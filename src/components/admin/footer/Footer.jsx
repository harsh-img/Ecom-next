import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
            <div className="mb-2 mb-md-0">
              © , made with ❤️ by
              <a
                href="https://pixinvent.com"
                target="_blank"
                className="footer-link fw-medium"
              >
                Pixinvent
              </a>
            </div>
            <div className="d-none d-lg-inline-block">
              <a
                href="https://themeforest.net/licenses/standard"
                className="footer-link me-4"
                target="_blank"
              >
                License
              </a>
              <a
                href="https://themeforest.net/user/pixinvent/portfolio"
                target="_blank"
                className="footer-link me-4"
              >
                More Themes
              </a>
              <a
                href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/"
                target="_blank"
                className="footer-link me-4"
              >
                Documentation
              </a>
              <a
                href="https://pixinvent.ticksy.com/"
                target="_blank"
                className="footer-link d-none d-sm-inline-block"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
