
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index  element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="product">
            <Route index  element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
