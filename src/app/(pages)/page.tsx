"use client";
import DashBoardTemplate from "../templates/dashboard";
import useRate from "../hook/useRate";
import useClient from "@/app/hook/isClient";
import { API_URL } from "../lib/utilities/constant";
import { IRate } from "@/shared/entities/Rate";

const Home = () => {
  const isClient = useClient();
  const [rates, keys] = useRate(API_URL);
  console.log("🚀 ~ Home ~ keys:", keys);
  console.log("🚀 ~ Home ~ isDataRate:", rates);
  return (
    isClient && (
      <DashBoardTemplate>
        hola nuevo peru trataremos de mejorar
        <ul>
          {Object.entries(keys)?.map(([key, value]) => (
            <li key={key}>
              {key} : {value}
            </li>
          ))}
        </ul>
      </DashBoardTemplate>
    )
  );
};

export default Home;
