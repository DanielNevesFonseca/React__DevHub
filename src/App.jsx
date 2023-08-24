import "./styles/index.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Loading } from "./components/Loading/Loading";
import { UserContext } from "./providers/UserContext";

const App = () => {
  const { redirectLoading } = useContext(UserContext);

  return (
    <>
      {redirectLoading ? <Loading /> : <MainRoutes />}
      <ToastContainer
        theme="dark"
        autoClose={1 * 1000}
        position="bottom-right"
        limit={1}
      />
    </>
  );
};

export default App;
