import { Button } from "@nextui-org/react"
import React from "react"
interface UseCallBackButtonProps{
    inc: (delta: number) => void
}

function UseCallBackButton({ inc }: UseCallBackButtonProps){
    console.log("render...")
    return(
        <div className="flex gap-2">
                    <Button onClick={() => inc(6)}>+6</Button>
                    <Button onClick={() => inc(12)}>+12</Button>
                    <Button onClick={() => inc(18)}>+18</Button>
        </div>
    )
}


export default React.memo(UseCallBackButton)