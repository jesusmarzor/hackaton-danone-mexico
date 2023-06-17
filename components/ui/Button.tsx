interface props {
    children: string | JSX.Element
    onclick?: () => void
    color: string
    backgroundColor?: string
    borderColor?: string
    width: string
    height: string
}

export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor = "bg-transparent", borderColor = "border-transparent", onclick, width, height}) => {
    return <button className={`${color} ${backgroundColor} ${borderColor} ${width} ${height} rounded-sm border font-medium`} color={color} onClick={onclick}>{children}</button>
}