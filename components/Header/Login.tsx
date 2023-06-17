import UserIcon from "components/ui/icons/UserIcon"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

interface props {
    name: String
    route: Url
}


export const Login: React.FC<props> = ({name, route}) => {
    return(
        <div className="flex justify-end items-center h-12 bg-violetBlue py-2 px-10">
            <Link className="flex justify-center items-center gap-2 text-white text-xs" href={route}>
                <UserIcon
                    width="15"
                    height="15"
                    fill="white"
                />
                {name}
            </Link>
        </div>
    )
}