import React from "react";

const Provide = () => {
  return (
    <section className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <img
          src="assets/images/button.png"
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading p1-color fs-five mb-5">
                We Present MITH President Election
              </span>
              <h3 className="mb-5 mb-lg-6">
                Join the movement for a better leadership at MITH
              </h3>
              <p className="fs-six-up mx-ch mx-auto">
                The MITH President election is a pivotal event in shaping the future of our college. The president will represent the voice of the students and guide the institution toward greater success.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-award-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">A Fair Election</h4>
              <p>
                The MITH President election ensures a fair process where every student has the opportunity to vote and be heard.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-users fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Student Empowerment</h4>
              <p>
                Electing a president is not just about leadership; it's about giving the students the power to shape their future.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ti ti-shield-check-filled fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Transparent and Honest</h4>
              <p>
                focuses on transparency and honesty, ensuring the best candidate wins and upholds the trust of the student body.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
