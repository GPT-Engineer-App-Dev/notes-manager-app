import { Button, Input, Stack, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { client } from "lib/crud";

const CreateNote = () => {
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = async () => {
    const success = await client.set(`note:${Date.now()}`, { content });
    if (success) {
      toast({
        title: "Note created.",
        description: "Your note has been successfully created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setContent("");
    } else {
      toast({
        title: "Error",
        description: "There was an error creating your note.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing={3}>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
        size="sm"
      />
      <Button onClick={handleSubmit} colorScheme="blue">Create Note</Button>
    </Stack>
  );
};

export default CreateNote;