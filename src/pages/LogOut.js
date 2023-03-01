import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function LogOut() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/loginpage");
  });

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div>
      <button className="logut-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LogOut;
