import Home from "./Pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import NewHotel from "./Pages/newHotel/NewHotel"
import New from "./Pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { cafeColumns, hotelColumns, userColumns } from "./datatablesource";
import NewCafe from "./Pages/newCafe/NewCafe";

function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route 
              index 
              element={
                <ProtectedRoute>
                  <List columns={userColumns}/>
                </ProtectedRoute>} />
              <Route path=":userId" 
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
               />
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <New inputs={ userInputs } title="Add New Users" />
                </ProtectedRoute>
              } />
            </Route>
           
            <Route path="cafes">
              <Route index 
              element={
                <ProtectedRoute>
                  <List columns={cafeColumns} />
                </ProtectedRoute>
              } />
              <Route path=":productId" 
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>}
               />
               
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <NewCafe/>
                </ProtectedRoute>
              
              } />              
            </Route>

            <Route path="hotels">
              <Route 
              index 
              element={
                <ProtectedRoute>
                  <List columns={hotelColumns}/>
                </ProtectedRoute>} />
              <Route path=":userId" 
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
               />
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <NewHotel />
                </ProtectedRoute>
              } />
            </Route>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
