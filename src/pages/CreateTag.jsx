import { Button, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { client } from "lib/crud";

const CreateTag = () => {
  const [tagName, setTagName] = useState("");
  const toast = useToast();

  const handleSubmit = async () => {
    const success = await client.set(`tag:${Date.now()}`, { name: tagName });
    if (success) {
      toast({
        title: "Tag created.",
        description: "Your tag has been successfully created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTagName("");
    } else {
      toast({
        title: "Error",
        description: "There was an error creating your tag.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing={3}>
      <Input
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Enter tag name"
        size="sm"
      />
      <Button onClick={handleSubmit} colorScheme="blue">Create Tag</Button>
    </Stack>
  );
};

export default CreateTag;