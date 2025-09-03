import "./App.css";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router/routers";

function App() {
  return (
    <>
      <Toaster />
      <AppRouter />
    </>
  );
}

export default App;
