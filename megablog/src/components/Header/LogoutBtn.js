import React, { useState } from "react";

import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
 
  const handleLogout = () => {
    authService.deleteAccount().then(() => {
      dispatch(logout());
    }).catch((error) => console.log(
      "Logout error : ",error));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg mb-4 text-black">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                No
              </button>
            </div>
          </div>

          <button className="fixed top-0 right-0 m-4 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800">
            Logout
          </button>
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
export default LogoutBtn;
