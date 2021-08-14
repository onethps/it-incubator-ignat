import React from 'react'
import {AffairType, deleteAffair, filterAffairs} from "./HW2";
import {AffairsPropsType} from "./Affairs";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairs}>

            <div className={s.affairItem}>{props.affair.name + ' '}</div>
            <div className={
                    props.affair.priority === 'high' ? s.red : "" ||
                    props.affair.priority === 'low' ? s.yellow : "" ||
                    props.affair.priority === 'middle' ? s.blue : ""
                }>
                [{props.affair.priority}]
            </div>


            <SuperButton red onClick={deleteCallback} className={s.button}>X</SuperButton>
        </div>
    )
}

export default Affair
