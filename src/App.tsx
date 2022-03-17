import { useMultiChatLogic } from "react-chat-engine-advanced";

const projectId = "90da2e14-0910-4d15-ad84-c52b5dbc81be";
const username = "adam";
// file deepcode ignore HardcodedNonCryptoSecret: <tutorial>
const secret = "pass1234";

function App() {
  // messages = []
  // Add message = {...} to messages when one comes in
  // Authenticate the user
  // loads relevant chats, add them to chats = []
  const chatProps = useMultiChatLogic(projectId, username, secret);

  console.log("chatProps", chatProps);

  return <div></div>;
}

export default App;
