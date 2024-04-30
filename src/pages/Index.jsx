import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <VStack spacing={8} align="center">
      <Heading mb={4}>Notes Application</Heading>
      <Box>
        <Link to="/view-notes"><Button colorScheme="teal">View Notes</Button></Link>
        <Link to="/create-note"><Button colorScheme="teal" ml={4}>Create Note</Button></Link>
        <Link to="/create-tag"><Button colorScheme="teal" ml={4}>Create Tag</Button></Link>
      </Box>
    </VStack>
  );
};

export default Index;