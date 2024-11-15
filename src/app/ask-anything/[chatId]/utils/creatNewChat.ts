import { addChat, getAllChats, getChat } from '@/app/_lib/db'
import { store } from '@/app/_utils/store'
import useStore from '@/app/_utils/store/store'

export async function addAndSelectChat() {
  const { setSelectedChat, setChats } = useStore()
  const apiKey = localStorage.getItem('openai:key')
  if (apiKey?.length) {
    let chatId = await addChat({})
    const selectedChat = await getChat({ id: chatId })
    const chats = await getAllChats()
    setSelectedChat(selectedChat)
    setChats(chats)
    return chatId
  }
  return 0
}
