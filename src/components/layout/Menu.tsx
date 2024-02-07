import React from "react"
import { MenuLinks } from "../shared/MenuLinks"

export const Menu: React.FC = () => {
    return(
        <nav className="h-full bg-[#1b263b] w-60">
            <ul className="w-full h-full flex flex-col justify-evenly items-center py-10 text-slate-50 text-xl">
                <MenuLinks to="/" text="Inicio" />
                <MenuLinks to="/useState" text="Use State" />
                <MenuLinks to="/useEffect" text="UseEffect" />
                <MenuLinks to="/useRef" text="UseRef" />
                <MenuLinks to="/useMemo" text="UseMemo" />
                <MenuLinks to="/useCallback" text="UseCallback" />
                <MenuLinks to="/useContext" text="UseContext" />
                <MenuLinks to="/q" text="UseReducer" />
                <MenuLinks to="/q" text="CustomHook" />
            </ul>
        </nav>
    )
}