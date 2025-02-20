import ChatArea from "./ChatArea";
import InputBar from "./InputBar";
import styles from "./styles.module.css";

const GroqChat = () => {
  return (
    <div className={styles.GroqChat}>
      <ChatArea />
      <InputBar />
    </div>
  );
};

export default GroqChat;
