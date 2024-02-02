import { Input } from "@nextui-org/react"
import { PageContent } from "../components/layout/PageContent"
import React, { useState, useMemo} from "react"


function sum(a: number, b:number): number{
    const future = Date.now() + 2000;
    while(Date.now() < future) {}
    return a+ b
}

export const UseMemoPage: React.FC = () => {
    
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const result = useMemo(() => sum(n1, n2) , [n1, n2])
    return(
        <PageContent className="pt-20">
            <div className="flex flex-col gap-3">
                <Input variant="flat" type="number" color="primary" radius="sm"
                value={`${n1}`} onChange={(e) => {
                    setN1(parseInt(e.target.value))
                }}
                />
                <Input variant="flat" type="number" color="primary" radius="sm"
                value={`${n2}`} onChange={(e) => {
                    setN2(parseInt(e.target.value))
                }}
                />
                <Input variant="flat" type="number" color="primary" radius="sm"
                value={`${n3}`} onChange={(e) => {
                    setN3(parseInt(e.target.value))
                }}
                />

                <span className="text-center w-full text-4xl">{result}</span>
            </div>
        </PageContent>
    )
}