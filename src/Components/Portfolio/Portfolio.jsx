import poert1 from "../../Assets/Images/poert1.png";
import poert2 from "../../Assets/Images/port2.png";
import poert3 from "../../Assets/Images/port3.png";
import "../Portfolio/Prtofolio.css";
export default function Portfolio() {
  return (
    <>
      <div className="mb-4 p-5">
        <div className="pt-4">
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line ms-3 "
                style={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "4px",
                }}
              ></div>
              <i className="fa-solid fa-star ms-3"></i>
              <div
                className="line ms-3 "
                style={{
                  backgroundColor: "black",
                  width: "80px",
                  height: "4px",
                }}
              ></div>
            </div>
          </div>

          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert1} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert2} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert3} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert1} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert2} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={poert3} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
