import Home from "./Pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/updateUser/UpdateUser";
import NewHotel from "./Pages/newHotel/NewHotel"
import NewUser from "./Pages/newUser/NewUser";
import NewEvent from "./Pages/newEvent/NewEvent";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { cafeColumns, hotelColumns, userColumns, eventColumns } from "./datatablesource";
import NewCafe from "./Pages/newCafe/NewCafe";
import UpdateHotel from "./Pages/updateHotel/UpdateHotel";
import UpdateUser from "./Pages/updateUser/UpdateUser";
import UpdateEvent from './Pages/updateEvent/UpdateEvent'
import UpdateCafe from './Pages/updateCafe/UpdateCafe'



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

////////////////// Users //////////////////////

            <Route path="users">
              <Route 
              index 
              element={
                <ProtectedRoute>
                  <List columns={userColumns}/>
                </ProtectedRoute>} />
              <Route path=":id" 
              element={
                <ProtectedRoute>
                  <UpdateUser />
                </ProtectedRoute>
              }
               />
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <NewUser inputs={ userInputs } title="Add New Users" />
                </ProtectedRoute>
              } />
            </Route>

 ////////////////// Cafes //////////////////////
           
            <Route path="cafes">
              <Route index 
              element={
                <ProtectedRoute>
                  <List columns={cafeColumns} />
                </ProtectedRoute>
              } />

              <Route path=":id" 
              element={
                <ProtectedRoute>
                  <UpdateCafe />
                </ProtectedRoute>
              }
               />
               
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <NewCafe/>
                </ProtectedRoute>
              
              } />              
            </Route>

////////////////// Hotels //////////////////////

            <Route path="hotels">
              <Route 
              index 
              element={
                <ProtectedRoute>
                  <List columns={hotelColumns}/>
                </ProtectedRoute>} />
                <Route path=":id" 
              element={
                <ProtectedRoute>
                  <UpdateHotel />
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

////////////////// Events //////////////////////

            <Route path="events">
              <Route 
              index 
              element={
                <ProtectedRoute>
                  <List columns={eventColumns}/>
                </ProtectedRoute>} />
                <Route path=":id" 
              element={
                <ProtectedRoute>
                  <UpdateEvent />
                </ProtectedRoute>
              }
               />
              <Route path="new" 
              element={
                <ProtectedRoute>
                  <NewEvent />
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
