import styles from "./Message.module.css"

function Message({text, setShowModal,setSelectedId,id}){

    const handleDeleteClick = () => {
        setSelectedId(id);
        setShowModal(true);
    }

    return <div 
    className={styles.container}>
        {text}
        <button onClick={handleDeleteClick}>삭제</button>
    </div>;
}
export default Message;