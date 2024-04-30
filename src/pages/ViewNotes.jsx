import { Box, Heading, Select, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "lib/crud";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await client.getWithPrefix("note:");
      if (allNotes) setNotes(allNotes.map(n => n.value));
    };
    const fetchTags = async () => {
      const allTags = await client.getWithPrefix("tag:");
      if (allTags) setTags(allTags.map(t => t.value));
    };
    fetchNotes();
    fetchTags();
  }, []);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  return (
    <VStack spacing={4}>
      <Heading>View Notes</Heading>
      <Select placeholder="Filter by tag" onChange={handleTagChange}>
        {tags.map(tag => (
          <option key={tag.id} value={tag.name}>{tag.name}</option>
        ))}
      </Select>
      {notes.filter(note => note.tags.includes(selectedTag) || selectedTag === "").map(note => (
        <Box key={note.id} p={5} shadow="md" borderWidth="1px">
          <Text>{note.content}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ViewNotes;