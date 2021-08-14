import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.inputStyleStandart // need to fix with (?:)


    return (
        <div className={s.someClass}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            <SuperButton className={s.button}  onClick={addUser}>Add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>

        </div>
    )
}

export default Greeting
