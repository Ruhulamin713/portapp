import React from "react";

const MyExperience = () => {
  return (
    <div className="text-white my-5 py-4">
      <h2 className="text-center">My Experience</h2>
      <div className="d-flex justify-content-center  flex-column flex-lg-row">
        <div className="card border bg-secondary p-5 w-auto m-4 ">
          <h2 className="text-center">Frontend Development</h2>
          <div className="d-flex justify-content-evenly">
            <div>
              {" "}
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Html
              </p>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Css
              </p>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Tailwind
              </p>
            </div>
            <div>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Bootstrap
              </p>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> JavaScript
              </p>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> React
              </p>
            </div>
          </div>
        </div>
        <div className="card border bg-secondary p-5 m-4  w-auto ">
          <h2 className="text-center">Backend Development</h2>
          <div className="d-flex justify-content-evenly">
            <div>
              {" "}
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Node.js
              </p>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> Express.js
              </p>
            </div>
            <div>
              <p>
                <i class="bi bi-patch-check-fill text-primary"></i> MongoDb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
