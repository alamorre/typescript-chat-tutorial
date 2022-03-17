import { useMultiChatLogic, ChatWindow } from "react-chat-engine-advanced";

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

  return (
    <div>
      <ChatWindow
        chats={chatProps.chats}
        messages={chatProps.messages}
        activeChatId={chatProps.activeChatId}
        username={chatProps.username}
        peopleToInvite={chatProps.peopleToInvite}
        hasMoreChats={chatProps.hasMoreChats}
        hasMoreMessages={chatProps.hasMoreMessages}
        isChatListLoading={chatProps.isChatListLoading}
        isChatFeedLoading={chatProps.isChatFeedLoading}
        isChatSettingsLoading={chatProps.isChatSettingsLoading}
        onChatFormSubmit={chatProps.onChatFormSubmit}
        onChatCardClick={chatProps.onChatCardClick}
        onChatLoaderShow={chatProps.onChatLoaderShow}
        onMessageLoaderShow={chatProps.onMessageLoaderShow}
        onMessageLoaderHide={chatProps.onMessageLoaderHide}
        onBottomMessageShow={chatProps.onBottomMessageShow}
        onBottomMessageHide={chatProps.onBottomMessageHide}
        onMessageFormSubmit={chatProps.onMessageFormSubmit}
        onInvitePersonClick={chatProps.onInvitePersonClick}
        onRemovePersonClick={chatProps.onRemovePersonClick}
        onDeleteChatClick={chatProps.onDeleteChatClick}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default App;
