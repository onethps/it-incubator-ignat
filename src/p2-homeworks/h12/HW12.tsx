import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const themeState = useSelector((state:AppStoreType) => state.theme)
    const theme = themeState.theme

    let dispatch = useDispatch()


    // useDispatch, onChangeCallback

    const onChangeCallback = (e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChange={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
