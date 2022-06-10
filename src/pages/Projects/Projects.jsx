import React from "react";
import woodpecker from "../../image/woodpecker.png";
import rockStone from "../../image/rockstone.png";
import cargallery from "../../image/cargallery.png";

const Projects = () => {
  return (
    <div className="container my-5 py-5" id="projects">
      <h2 className="text-center">My Recent Work</h2>
      <div className=" row row-cols-1 row-cols-lg-3 g-3 my-4">
        <div className="col">
          <div class="card bg-dark border ">
            <img src={woodpecker} class="card-img-top " alt="..." />
            <div class="card-body ">
              <h5 class="">Woodpecker</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-black">
                  ❖ After login, users can Manage items, Add items.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ A user can see the items added by him.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ Users can Update, deliver and restock items.
                </li>
              </ul>
              <a
                href="https://woodpecker-b622f.web.app/"
                class="btn btn-primary"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card bg-dark border ">
            <img src={cargallery} class="card-img-top " alt="..." />
            <div class="card-body ">
              <h5 class="">Car Gallery</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-black">
                  ❖ After login, users can Manage items, Add items.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ A user can see the items added by him.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ Users can Update, deliver and restock items.
                </li>
              </ul>
              <a
                href="https://car-gallery-75b2e.web.app/"
                class="btn btn-primary"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card bg-dark border ">
            <img src={rockStone} class="card-img-top " alt="..." />
            <div class="card-body ">
              <h5 class="">Rock Stone</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-black">
                  ❖ Users can login with username and password.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ Google login with Firebase authentication.
                </li>
                <li className="list-group-item list-group-item-black">
                  ❖ Different training packages are displayed.
                </li>
              </ul>
              <a href="#" class="btn btn-primary">
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
