import { useContext } from "react";
import "./style/dark.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userInputs, productInputs } from "./common/formSource";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
         <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />}/>
              <Route
                path="new"
                element={<New inputs={userInputs} title="New Add User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="New Add Product" />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
