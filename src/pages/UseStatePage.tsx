import React, { useState } from "react"
import { Button, Input } from "@nextui-org/react"


export const UseStatePage: React.FC = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Init")

    return(
        <div className="w-full h-full flex flex-col items-center py-10">
            <h1 className="font-bold text-3xl text-slate-50">Exercicios de Use State</h1>
            <div className="w-80 border-t"></div>
            
            <div className="mt-3 text-slate-50 text-xl flex flex-col items-center gap-4 p-8">
                <h2>Exercicio 1</h2>
                <span>{count}</span>
                <div className=" flex gap-4">
                    <Button variant="ghost" color="primary" onClick={() => setCount(prev => prev + 10)}>+10</Button>
                    <Button variant="ghost" color="secondary" onClick={() => setCount(prev => prev - 10)}>-10</Button>
                    <Button variant="ghost" color="success" onClick={() => setCount(prev => prev = 0)}>0</Button>
                </div>
            </div>

            <div className="mt-3 text-slate-50 text-xl flex flex-col items-center gap-4 p-8">
                <h2>Exercicio 2</h2>
                <span>{name}</span>
                <Input 
                    type="text"
                    label="Nome"
                    onChange={(e)=>{
                        setName(e.target.value)
                    }} value={name}
                />
            </div>  
        </div>
    )
}