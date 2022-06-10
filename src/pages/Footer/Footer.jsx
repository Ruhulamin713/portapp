import React from "react";

const Footer = () => {
  return (
    <div
      className="text-white mt-5 border-top border-light"
      style={{ height: "100px" }}
    >
      <p className="text-center">
        &copy; {new Date().getFullYear()} All Right Reserved by Md Ruhul Amin
      </p>
    </div>
  );
};

export default Footer;
