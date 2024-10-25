"use client";
import useClient from "@/app/hook/isClient";

const Home = () => {
  const isClient = useClient();

  return isClient && <div>holssa</div>;
};

export default Home;
