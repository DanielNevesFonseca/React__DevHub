import "./styles/index.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <MainRoutes />
      <ToastContainer theme="dark" autoClose={2000} position="bottom-right" />
    </>
  );
};

export default App;
