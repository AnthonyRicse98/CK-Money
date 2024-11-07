import { useState, useEffect } from "react";
import { doGet } from "@/shared/api/api";
import { IRate, IRateData } from "@/shared/entities/Rate";

const useRate = (API_URL: string) : [IRateData , IRate ]   => {
    const [rate, setRate] = useState<IRateData>({} as IRateData);
    const [ keys , setKey ] = useState<IRate >({} as IRate)
    const rateCall = async () => {
        const response : IRateData = await doGet({ url : API_URL})
        const keyData : IRate = await response?.rates
        console.log("🚀 ~ rateCall ~ keyData:", keyData)
        setRate(response)
        setKey(keyData)
    }
    useEffect(()=> {
        rateCall()
    } , [])

    return  [ rate , keys ] ;
}

export default useRate;
