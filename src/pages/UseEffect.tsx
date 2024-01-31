import { Input } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

function calcFactorial(number: any): number {
  
    const n: number = parseInt(number)
    if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  if(n >= 999){
    return -0
  }
  return n * calcFactorial(n - 1);
}

export const UseEffectPage: React.FC = () => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [status, SetStatus] = useState("Impar")

  useEffect(() => {
    setFactorial(calcFactorial(number));
  }, [number]);


  useEffect(() => {
    SetStatus(number % 2 === 0? "Par": "Impar")
  })
  return (
    <div className="w-full h-full flex flex-col items-center py-10">
      <h1 className="font-bold text-3xl text-slate-50">
        Exercicios de Use Effect
      </h1>
      <div className="w-80 border-t"></div>

      <div className="mt-10 py-4 flex flex-col gap-2">
        <h2 className="text-center text-xl text-slate-50">
          Fatorial: {factorial}
        </h2>
        <Input
          type="number"
          label="number"
          onChange={(e) => {
            setNumber(+e.target.value);
          }}
        />
      </div>

      <div className="mt-10 py-4 flex flex-col gap-2">
        <h2 className="text-center text-xl text-slate-50">
          Status: {status}
        </h2>
      </div>
    </div>
  );
};
