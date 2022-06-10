import React from "react";
import banner from "../../image/banner1.jpg";
import profile from "../../image/profile.jpg";

const Banner = () => {
  return (
    <div className="my-5 text-white d-flex justify-content-center align-items-center flex-column flex-lg-row">
      <div className="order-lg-3 rounded w-50">
        {" "}
        <img src={profile} alt="" className="img-fluid rounded-circle" />
      </div>
      <div className="p-5 w-75">
        <p>Web developer</p>
        <h2>About Me</h2>
        <p>
          Hi! I am Ruhul Amin.I am a Frontend web developer.I am a creative,
          time punctual, dedicated, goal-oriented individual with decent moral
          Values and Ethicates along with a high-energy level, honed
          communication skills, strong organizational skills, and meticulous
          attention to detail.
        </p>
        <a
          href="https://drive.google.com/drive/u/0/folders/1zZ73IFQ66sZVhH22Pd9PMLglLpfbsNp0"
          target="blank"
          className="btn text-white border mt-5 border-primary px-4 py-2"
        >
          Download Resume{" "}
        </a>
      </div>
    </div>
  );
};

export default Banner;
