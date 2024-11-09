import { useState, useEffect } from "react";
import { doGet } from "@/shared/api/api";
import { IRate, IRateData } from "@/shared/entities/Rate";

const url = `${process.env.NEXT_PUBLIC_OPENCHANGE}?app_id=${process.env.NEXT_PUBLIC_ID}`;

const useRate = (): [IRateData, IRate] => {
  const [rate, setRate] = useState<IRateData>({} as IRateData);
  const [keys, setKey] = useState<IRate>({} as IRate);
  const rateCall = async () => {
    const response: IRateData = await doGet({ url: url as string });
    const keyData: IRate = await response?.rates;
    setRate(response);
    setKey(keyData);
  };
  useEffect(() => {
    rateCall();
  }, []);

  return [rate, keys];
};

export default useRate;
