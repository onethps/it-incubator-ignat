import React from 'react'
import Affair from './Affair'
import {AffairType, deleteAffair, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType

}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <SuperButton className={props.filter === "all" ? s.categoryColor: ""} onClick={setAll}>All</SuperButton>
            <SuperButton className={props.filter === "high" ? s.categoryColor: ""} onClick={setHigh}>High</SuperButton>
            <SuperButton className={props.filter === "middle" ? s.categoryColor: ""} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={props.filter === "low" ? s.categoryColor: ""} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
