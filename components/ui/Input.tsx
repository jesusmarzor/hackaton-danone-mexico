interface props {
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
    title: string
    width: string
}

export const Input: React.FC<props> = ({title, changeText, width}) => {
    return(
        <input onChange={e => changeText(e)} className={`${width}`} placeholder={title}/>
    )
}