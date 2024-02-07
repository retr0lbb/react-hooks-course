import { useCallback, useState } from "react"
import { PageContent } from "../components/layout/PageContent"
import UseCallBackButton from "./www/UseCallBackButton"

export const UseCallBack: React.FC = () => {
    const [count, setCount] = useState(0)

   const inc = useCallback( (delta: number) => {
        setCount(prev => prev + delta)
    }, [setCount])

    return(
        <PageContent>
            <div className="flex flex-col items-center justify-center w-full h-full gap-20">
                <span className="text-4xl">{count}</span>

                <UseCallBackButton inc={inc} />
            </div>
        </PageContent>
    )
}