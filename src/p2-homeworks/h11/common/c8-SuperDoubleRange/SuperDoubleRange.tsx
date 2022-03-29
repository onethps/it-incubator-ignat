import React, {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";
import {Slider} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType =  {
    onChangeRange?: (value: [number, number]) => void
    value?: number[]
    setValue2:(value: number[]) => void
    setValue1:(val:number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue1,
        setValue2,
        value,
        onChangeRange,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange11 = (event: Event, newValue: number | number[]) => {
        setValue1(value![0])
        setValue2(newValue as number[]);
    };



    return (
        <div style={{width:'130px', display:'inline-block'}}>
            <Slider
                value={value}
                onChange={handleChange11}
                // className={finalRangeClassName}
                // {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
