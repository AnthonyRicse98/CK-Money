"use client";
import DashBoardTemplate from "../templates/dashboard";
import useRate from "../hook/useRate";
import useClient from "@/app/hook/isClient";

const Home = () => {
  const isClient = useClient();
  const [rates, keys] = useRate();

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
