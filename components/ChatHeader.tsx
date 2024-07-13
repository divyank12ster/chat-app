import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiArrowLeft, FiEdit } from "react-icons/fi";

const ChatHeader = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      alignItems="center"
      paddingX={2}
      paddingTop={4}
    >
      <Flex direction="row" alignItems="center">
        <IconButton
          icon={<FiArrowLeft />}
          aria-label="Back"
          variant="ghost"
          fontSize="24px"
        />
        <Text fontSize="24px" fontWeight="bold" ml={1}>
          Trip 1
        </Text>
      </Flex>

      <IconButton
        variant="ghost"
        fontSize="20px"
        icon={<FiEdit />}
        aria-label="Edit"
      />
    </Flex>
  );
};

export default ChatHeader;
