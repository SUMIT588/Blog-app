import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "react";

import {Header} from '../src/components/index'
// import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div>
    <div>
      <Header />
     <main>
      <Outlet />
     </main>
     {/* <Footer/> */}
    </div>
    </div>
  ) : null;
}

export default App;
