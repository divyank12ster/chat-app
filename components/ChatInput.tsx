import React from "react";
import { HStack, Box, Input } from "@chakra-ui/react";
import { FiPaperclip, FiSend } from "react-icons/fi";

const ChatInput = () => {
  return (
    <HStack
      borderRadius="md"
      border="1px solid #E2E8F0"
      padding="8px"
      backgroundColor="white"
      spacing="4"
      alignItems="center"
      marginX="16px"
      marginY="16px"
    >
      <Box flex="1">
        <Input
          placeholder="Reply to @Rohit Yadav"
          variant="unstyled"
          _placeholder={{ color: "gray.500" }}
        />
      </Box>
      <FiPaperclip />
      <FiSend />
    </HStack>
  );
};

export default ChatInput;
