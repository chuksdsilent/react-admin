
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { userInputs } from "./formSource";
import "./style/Dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app" : "app dark"}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index  element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs}  title="Add New User"/>} />
          </Route>
          <Route path="products">
            <Route index  element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New Product" />} />
          </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
