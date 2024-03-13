import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.status);

  const [loader, setLoader] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // navigate("/");
    }

    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? <h2>Loading ... </h2> : <>{children}</>;
}

export default Protected;
