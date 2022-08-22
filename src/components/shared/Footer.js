import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">
                    About us
                  </Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">
                    Client portal
                  </Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">
                    Awards
                  </Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">
                    Help
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="#!" className="text-white">
                    Contact
                  </Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="mb-3">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-3">
            <Link to="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <Link className="text-white" to="https://mdbootstrap.com/">
            MDBootstrap.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
