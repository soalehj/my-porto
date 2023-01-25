import "./PageNotFound.css";
import ImgNotFound from "../Asset/pagenotfound.svg";
import { NavLink } from "react-router-dom";

function Thankyou() {
  return (
    <div className="PageNotFound">
      <div className="container">
        <div className="content-page-not-found d-flex justify-content-center">
          <div className="header-notfound-page">
            <div className="content-header">
              <h2>
                Sorry! <br />
                This page not ready.
              </h2>
              <div className="section-btn-back-home">
                <NavLink className="content-btn-home" to="/">
                  <button className="btn-go-home">
                    Go Home
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.94 10.7999L19.2 9.0611V4.7999C19.2 4.1399 18.66 3.5999 18 3.5999H16.8C16.14 3.5999 15.6 4.1399 15.6 4.7999V5.4635L13.2 3.0659C12.8724 2.7563 12.5724 2.3999 12 2.3999C11.4276 2.3999 11.1276 2.7563 10.8 3.0659L3.06002 10.7999C2.68562 11.1899 2.40002 11.4743 2.40002 11.9999C2.40002 12.6755 2.91842 13.1999 3.60002 13.1999H4.80002V20.3999C4.80002 21.0599 5.34002 21.5999 6.00002 21.5999H8.40002C9.06277 21.5999 9.60002 21.0626 9.60002 20.3999V15.5999C9.60002 14.9399 10.14 14.3999 10.8 14.3999H13.2C13.86 14.3999 14.4 14.9399 14.4 15.5999V20.3999C14.4 21.0626 14.3373 21.5999 15 21.5999H18C18.66 21.5999 19.2 21.0599 19.2 20.3999V13.1999H20.4C21.0816 13.1999 21.6 12.6755 21.6 11.9999C21.6 11.4743 21.3144 11.1899 20.94 10.7999Z"
                        stroke="none"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="ImgNotFound ">
            <img clasname="img-notfound" src={ImgNotFound} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
