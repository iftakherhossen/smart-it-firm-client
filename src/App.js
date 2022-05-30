import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AdminRoute from "./Components/Authentication/AdminRoute";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              {/* <Route index element={<DashboardHome />} />
              <Route path="services" element={<ServiceLists />} />
              <Route path="postReviews" element={<PostReviews />} />
              <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="addService" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="manageOrders" element={<AdminRoute><ManageOrders /></AdminRoute>} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
