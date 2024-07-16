import React, { ChangeEvent, useState } from "react";
import { HStack, Box, Input, IconButton, Text } from "@chakra-ui/react";
import { FiPaperclip, FiSend } from "react-icons/fi";

/* 

The implementation for send message and attachments have been done at interface level.
This can be extended if we want to implement these functionality in detail.
Keeping send meesgae as optional for now
*/
interface ChatInputProps {
  sendMessage?: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    const input = document.getElementById("file-upload") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  const handlePaperclipClick = () => {
    const input = document.getElementById("file-upload") as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

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
          value={selectedFile ? selectedFile.name : ""}
          readOnly
        />
        {selectedFile && (
          <Text fontSize="sm" color="gray.500" mt="2">
            <span style={{ cursor: "pointer" }} onClick={clearFile}>
              (Remove)
            </span>
          </Text>
        )}
      </Box>
      <label htmlFor="file-upload" style={{ display: "none" }}>
        <Input
          id="file-upload"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileUpload}
        />
      </label>
      <IconButton
        aria-label="Attach File"
        icon={<FiPaperclip />}
        variant="ghost"
        onClick={handlePaperclipClick}
      />
      <IconButton
        aria-label="Send Message"
        icon={<FiSend />}
        variant="ghost"
        onClick={sendMessage}
      />
    </HStack>
  );
};

export default ChatInput;
