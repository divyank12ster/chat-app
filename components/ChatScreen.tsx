import { Flex, VStack } from "@chakra-ui/react";
import ChatHeader from "./ChatHeader";
import ChatSubHeader from "./ChatSubHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import useChatFetching from "@/hooks/useChatFetching";
import React, { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const ChatScreen = () => {
  const { chats, loading, fetchMoreChats } = useChatFetching(0);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const fetchThreshold = 200; 

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (chatContainerRef?.current?.scrollTop < fetchThreshold && !loading) {
        fetchMoreChats();
      }
    }, 50);

    const chatContainer = chatContainerRef.current;
    chatContainer?.addEventListener("scroll", handleScroll);

    return () => {
      chatContainer.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreChats, loading]);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer.scrollTop < fetchThreshold && !loading) {
      chatContainer.scrollTop = fetchThreshold; 
    }
  }, [chats]);

  return (
    <Flex direction="column" height="100vh" justify="space-between">
      <ChatHeader />
      <ChatSubHeader />

      <VStack
        spacing={4}
        padding={4}
        overflowY="scroll"
        flex="1"
        ref={chatContainerRef}
      >
        <ChatMessages chats={chats} />
      </VStack>

      <ChatInput />
    </Flex>
  );
};

export default ChatScreen;
