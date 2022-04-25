import { useContext } from "react";
import "./style/dark.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { userInputs, productInputs } from "./common/formSource";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";
import { DarkModeContext } from "./context/darkModeContext";
import  Login  from "./Pages/login/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login'/>
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
         <Route path="/">
           <Route path="/login" element={<Login />} />
            <Route 
              index 
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } 
            /> 
            <Route path="users">
              <Route 
                index 
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                } 
              />
              <Route 
                path=":userId" 
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="New Add User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route 
                index 
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route 
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route 
                path="new" 
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="New Add Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
