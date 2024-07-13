import { VStack, HStack, Image } from "@chakra-ui/react";
export interface ChatMessage {
  id: string;
  message: string;
  sender: {
    self: boolean;
    image: string;
  };
}
export interface ChatMessagesProps {
  chats: ChatMessage[];
}
const ChatMessages = ({ chats }: ChatMessagesProps) => {
  return (
    <>
      {chats.map((chat) => (
        <HStack
          key={chat.id}
          borderRadius="md"
          maxWidth="75%"
          alignSelf={chat.sender.self ? "flex-end" : "flex-start"}
        >
          {!chat.sender.self && (
            <Image
              borderRadius="full"
              boxSize="40px"
              src={chat.sender.image}
              alt="Sender Image"
              alignSelf="flex-start"
            />
          )}
          <VStack
            align="start"
            backgroundColor={chat.sender.self ? "#1C63D5" : "#FFFFFF"}
            padding={4}
            color={chat.sender.self ? "#FFFFFF" : "#606060"}
            borderRadius="12px 12px 12px 0px"
          >
            <div
              contentEditable="true"
              dangerouslySetInnerHTML={{ __html: chat.message }}
            ></div>
          </VStack>
        </HStack>
      ))}
    </>
  );
};

export default ChatMessages;
