
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { userInputs } from "./formSource";
import "./style/Dark.scss"
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useParams } from "react-router-dom";
import { MenuContext } from "./context/MenuContext";
function App() {
  const {darkMode} = useContext(DarkModeContext)
  const {id} = useParams()
  const { dispatchMenu } = useContext(MenuContext)
  console.log("name is ", useParams())


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
