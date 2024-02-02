import { Input } from "@nextui-org/react";
import React, {useEffect, useRef, RefObject, useState} from "react"

export const UseReffPage: React.FC = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("")
    const [interpol, setInterpol] = useState("")
    const count = useRef(1)


    const input_01 = useRef<HTMLInputElement>()
    const input_02 = useRef<HTMLInputElement>()


    useEffect(() =>{
        count.current++
        interpolateString(value1, value2)
        if(input_02.current){
            input_02.current.focus({
                preventScroll: true
            })
        }
    }, [value1])

    useEffect(() =>{
        count.current++
        interpolateString(value1, value2)
        if(input_01.current){
            input_01.current.focus({
                preventScroll: true
            })
        }
    }, [value2])

    function interpolateString(arr1: string, arr2: string){
        if(arr1 === "" && arr2 ===""){
            setInterpol("")
        }
        const higherLenght = arr1.length >= arr2.length? arr1.length : arr2.length
        let finedArray = ""
        for(let i = 0; i < higherLenght; i++){
            if(i < arr1.length && i < arr2.length){
                finedArray += (arr1[i]+ arr2[i])
            }
            else{
                finedArray += arr1[i]? arr1[i]: arr2[i]
            }
        }
        setInterpol(finedArray)
    }

    return(
        <div className="w-full h-full flex flex-col items-center pt-20 px-80 gap-10">
            
            <div className="text-3xl text-slate-50">
            <span>Valor: </span>
            <span>{interpol} [</span>
            <span>{count.current}</span>
            <span>]</span>
            </div>
            
            <Input
                type="text"
                value={value1}
                onChange={(e)=>{
                    setValue1(e.target.value)
                    console.log(count.current)
                }}
                ref={input_01 as RefObject<HTMLInputElement>}
            />           


            <h1 className="pt-10 text-4xl font bold text-slate-50">Exercici0 2</h1>
            <Input
                type="text"
                value={value2}
                ref={input_02 as RefObject<HTMLInputElement>}
                
                onChange={(e)=>{
                    setValue2(e.target.value)
                    console.log(count.current)
                }}
               
            />     
        </div>
    )
}