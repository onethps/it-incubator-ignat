import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loadingGIF from '../../assets/loader.gif'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    let loadingState = useSelector((state:AppStoreType) => state.loading)

    const loading = loadingState.loading

    let dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout( () => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };



    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                <div> <img  className={s.styleLoadingGIF} src={loadingGIF}/></div>
                ) : (
                <div>
                <SuperButton onClick={setLoading}>set loading...</SuperButton>

                </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
