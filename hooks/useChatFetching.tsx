import { useState, useEffect } from "react";
import axios from "axios";
import { ChatMessage } from "@/components/ChatMessages";
interface UseChatFetchingResult {
  chats: ChatMessage[];
  loading: boolean;
  fetchMoreChats: () => void;
}
const useChatFetching = (initialPage: number): UseChatFetchingResult => {
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState<number>(initialPage);
  const [pagesFetched, setPagesFetched] = useState(new Set());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      if (loading || pagesFetched.has(page)) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://qa.corider.in/assignment/chat?page=${page}`
        );
        const newChats = response.data.chats;
        setChats((prevChats) => [...newChats, ...prevChats]);
        setPagesFetched((prevPages) => new Set(prevPages).add(page));
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [page, pagesFetched, loading]);

  const fetchMoreChats = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { chats, loading, fetchMoreChats };
};

export default useChatFetching;
