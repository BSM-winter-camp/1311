import { useEffect, useRef, useState } from "react"
import styles from "./MessageInput.module.css"

function MessageInput({setMessage}){

    const [inputvalue, setInputValue] = useState("");
    const inputRef = useRef();

    const handleSendMessageClick = () => {
        console.log(inputvalue)
        setMessage((prev)=>{
            return [...prev,{
                id:prev.length + 1,
                text:inputvalue,
                createAt: new Date(),
            }];
        })
        
    }

    useEffect(()=>{
        if(!inputRef.current) return;

        const handleInputEvent = (e) => {
            if (e.code === "Enter"){
                handleSendMessageClick()
            }
        }
        inputRef.current.addEventListener("keydown",handleInputEvent)

        return () => {
            if(!inputRef.current) return;
            inputRef.current.removeEventListener('keydown', handleInputEvent);
        }
    }, [inputvalue])

    return (
        <div className={styles.container}>
            <input 
            ref={inputRef}
            value = {inputvalue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            />
            <button onClick={handleSendMessageClick}>전송</button>
        </div>
    )
}
export default MessageInput