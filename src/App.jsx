import './App.css'
import styles from "./App.module.css";
import { useState } from 'react';
import Message from './components/Message/Message';
import MessageInput from './components/MessageInput/MessageInput';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [message,setMessage] = useState([
    {
      id:1,
      text: 'message1',
      createdAt: new Date(),
    },
    {
      id:2,
      text: 'message2',
      createdAt: new Date(),
    }]);
  return <main className={styles.container}>
    <section className={styles.chattingSection}>
      <div className={styles.messageSection}>{message.map((message)=>{
        return <Message 
          key={message.id} 
          id={message.id}
          text={message.text}
          setSelectedId={setSelectedId}
          setShowModal={setShowModal}
        />;
      })}
      </div>
      <MessageInput setMessage={setMessage}/>
    </section>
    {showModal && 
    <Modal
      selectedId={selectedId}
      setMessage={setMessage}
      setShowModal={setShowModal}
    />}
  </main>
}

export default App
