import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const ChatSubHeader = () => {
  return (
    <Box
        paddingLeft={2}
        paddingTop={1}
        paddingBottom={4}
        display="flex"
        alignItems="center"
      >
        <Image
          borderRadius="full"
          boxSize="48px"
          src="/Profile.svg"
          alt="Header Image"
          ml={2}
        />
        <Box flex="1" ml={4} lineHeight="21px">
          <Text fontSize="md">
            From
            <Text as="span" fontSize="lg" fontWeight="bold">
              {" "}
              IGI Airport, T3
            </Text>
          </Text>
          <Text fontSize="md">
            To
            <Text as="span" fontSize="lg" fontWeight="bold">
              {" "}
              Sector 28
            </Text>
          </Text>
        </Box>
      </Box>
  );
};

export default ChatSubHeader;
