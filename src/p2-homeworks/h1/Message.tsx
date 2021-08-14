import React from 'react'
import s from './Message.module.css';


export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={s.box}>
            <img src={props.avatar} className={s.avatar}></img>
            <div className={s.messageContent}>
                <div className={s.textContent}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.date}>{props.time}</div>
                </div>

            </div>
        </div>
    )
}

export default Message
