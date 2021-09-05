import { useEffect } from "react";
import useFetch from "use-http";

const App = () => {
  const api = useFetch("/ping");
  console.log("api", api.data);
  useEffect(() => {
    api.get();
  }, []);
  return <div></div>;
};

export default App;
