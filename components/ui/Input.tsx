import SearchIcon from "./icons/SearchIcon"

interface props {
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
    title: string
}

export const Input: React.FC<props> = ({title, changeText}) => {
    return(
        <div className="relative flex h-12 max-w-sm m-8">
            <SearchIcon classesName="absolute top-0 bottom-0 my-auto left-10" width="16" height="16"/>
            <input className="pl-20 w-full bg-lightBlue placeholder-violetBlue text-sm"  onChange={e => changeText(e)} placeholder={title}/>
        </div>
    )
}