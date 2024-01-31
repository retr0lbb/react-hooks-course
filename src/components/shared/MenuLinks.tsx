import { Link } from "react-router-dom"

interface MenuLinksProps{
    to: string
    text: string
}

export const MenuLinks: React.FC<MenuLinksProps> = ({text, to}) => {
    return(
        <Link className="w-full h-full grid place-items-center text-center font-bold hover:bg-[#2980b9] transition-all" to={to}>{text}</Link>
    )
}