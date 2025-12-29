import styles from "./Modal.module.css"

function Modal({selectedId,setMessage,setShowModal}){
    const handleCancelClick = ()=>{
        setShowModal(false)
    }
    const handelConfirmClick = () => {
        setMessage((prev) => {
            return prev.filter((message)=> message.id !== selectedId)
        })
        setShowModal(false)
    }

    return <section className={styles.container}>
        <span>정말 삭제 하시겠습니까?</span>
        <div className={styles.buttonSection}>
            <button onClick={handelConfirmClick}>확인</button>
            <button onClick={handleCancelClick}>취소</button>
        </div>
    </section>
}

export default Modal;