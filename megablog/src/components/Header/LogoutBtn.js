import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    }).catch((error) => console.log(
      "Logout error : ",error));
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
export default LogoutBtn;
