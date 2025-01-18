import avatars from "../../Assets/Images/avataaars.svg";
export default function Home() {
  return (
    <>
      <>
        <div
          className="home d-flex justify-content-center align-items-center text-white p-5"
          style={{ backgroundColor: "#1ABC9C" }}
        >
          <div className="text-center">
            <img src={avatars} alt="" />
            <>
              <div className="text-center pt-4">
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                  start Framework
                </h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div
                    className="line ms-3 "
                    style={{
                      backgroundColor: "white",
                      width: "80px",
                      height: "4px",
                    }}
                  ></div>
                  <i className="fa-solid fa-star ms-3"></i>
                  <div
                    className="line ms-3 "
                    style={{
                      backgroundColor: "white",
                      width: "80px",
                      height: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </>
            <div className="m-5">Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>

       
         
        </>
      </>
    
  );
}
