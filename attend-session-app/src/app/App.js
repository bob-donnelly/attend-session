//Importing the Browserrouter from react router dom in three parts to link the front end together
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing views from the views folder
import UserProfile from '../view/userProfile';
import AdminPanel from '../view/adminPanel';
import Signup from '../view/signup';
import Login from '../view/login';
import ProtectAdminRoutes from '../components/protectAdminRoutes';
import ProtectUserRoutes from '../components/protectUserRoutes';

// Application function that will house all of the page components
function App() {

  // Returns the router which will house all of the routes
  return(
    <Router>
      <main> 
      {/* 
          Routes from react-router-dom which declare a route, 
          the exact path and the element which is the component for that route 
      */}
          <Routes>
            <Route element={<ProtectUserRoutes />}>
              <Route exact path="/profile" element={<UserProfile />}/>
            </Route>
            <Route element={<ProtectAdminRoutes />}>
              <Route exact path="/admin" element={<AdminPanel />}/>
            </Route>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/login" element={<Login />}/>
          </Routes>
      </main>
    </Router>
  );
};

// Export default is used if there is only one function in the file
export default App;
