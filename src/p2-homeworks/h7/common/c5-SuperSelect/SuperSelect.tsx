import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    customStyle?:string
    selectClassName?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps

    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (<option key={i} value={o}>{o}</option>)) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const selectClassName = `${'сделать красивый стиль для спана'} ${s.selectStyle}`

    return (
        <select onChange={ onChangeCallback} className={selectClassName} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
