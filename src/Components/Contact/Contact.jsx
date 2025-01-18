export default function Contact() {
  return (
    <div className="mb-4 p-5">
      <div className="pt-3 conatiner">
        <app-star title="conatct section">
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              conatct section
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
        </app-star>
        <form
          action=""
          className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched"
        >
          <label className="position-relative top-0 __top"> </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <label className="position-relative top-0 __top"> </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <label className="position-relative top-0 __top"> </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <label className="position-relative top-0 __top"> </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <button className="btn btn-primary  mt-4 text-white">
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
