import React from "react"


import {Routes, Route} from "react-router-dom"
import { NotFound } from "../../pages/NotFound"
import { UseStatePage } from "../../pages/UseStatePage"
import { UseEffectPage } from "../../pages/UseEffect"

export const Content: React.FC = () => {
    return(
        <main className="w-full h-full bg-[#2c3e50]">
             <Routes>
                 <Route path="/" element={<>HEY</>} />
                 <Route path="/useState" element={<UseStatePage />} />
                 <Route path="/useEffect" element={<UseEffectPage />} />
                 <Route path="/*" element={<NotFound />} />
             </Routes>
        </main>
    )
}