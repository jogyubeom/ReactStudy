import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  return (
    <>
      <div>Home</div>
      <p>{params.get("value")}</p>
    </>
  );
};

export default Home;
