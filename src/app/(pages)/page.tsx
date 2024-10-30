"use client";
import useClient from "@/app/hook/isClient";
import DashBoardTemplate from "../templates/dashboard";

const Home = () => {
  const isClient = useClient();

  return (
    isClient && (
      <DashBoardTemplate>
        hola nuevo peru trataremos de mejorar
      </DashBoardTemplate>
    )
  );
};

export default Home;
