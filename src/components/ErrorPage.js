import React from "react";
import error from "../error.webp";
function ErrorPage() {
  return (
    <div
      style={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <img src={error} alt="No-Image" style={{ width: "60%" }} />
    </div>
  );
}

export default ErrorPage;
