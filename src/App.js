import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AdminRoute from "./Components/Authentication/AdminRoute";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import BookedServices from "./Components/DashboardComponents/BookedServices";
import ManageServices from "./Components/DashboardComponents/ManageServices";
import ManageReviews from "./Components/DashboardComponents/ManageReviews";
import ManageTeam from "./Components/DashboardComponents/ManageTeam";
import ManageProjects from "./Components/DashboardComponents/ManageProjects";
import ManageClients from "./Components/DashboardComponents/ManageClients";
import ManageOrders from "./Components/DashboardComponents/ManageOrders";
import Payment from "./Components/DashboardComponents/Payment";

function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route index element={<BookedServices />} />
              <Route path="payment" element={<Payment />} />
              <Route path="manage-orders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
              <Route path="manage-services" element={<AdminRoute><ManageServices /></AdminRoute>} />
              <Route path="manage-projects" element={<AdminRoute><ManageProjects /></AdminRoute>} />
              <Route path="manage-clients" element={<AdminRoute><ManageClients /></AdminRoute>} />
              <Route path="manage-team" element={<AdminRoute><ManageTeam /></AdminRoute>} />
              <Route path="manage-reviews" element={<AdminRoute><ManageReviews /></AdminRoute>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
