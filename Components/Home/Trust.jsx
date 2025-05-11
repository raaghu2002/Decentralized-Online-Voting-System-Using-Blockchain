import React from "react";

const Trust = () => {
  return (
    <section className="people_trust pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        {/* Removed unnecessary images */}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-xxl-7">
            <div className="heading__content mb-8 mb-lg-10 text-center">
              <span className="heading p1-color fs-five mb-5">Election Voting</span>
              <h3 className="mb-4 mb-lg-6">Vote for the MITM President</h3>
              <p className="fs-six-up mx-ch mx-auto">
                Welcome to the MITM Presidential election voting platform. Please cast your vote for the next leader!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="singletab">
              <ul className="tablinks d-center flex-wrap gap-3 gap-lg-4  mb-10 mb-xxl-15">
                <li className="nav-links active">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-vote fs-four s1-color"></i>Vote Now
                  </button>
                </li>
                <li className="nav-links">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-info fs-four s1-color"></i>Candidate Information
                  </button>
                </li>
                <li className="nav-links">
                  <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                    <i className="ti ti-comment fs-four s1-color"></i>Live Election Updates
                  </button>
                </li>
              </ul>
              <div className="tabcontents">
                {/* Voting Section */}
                <div className="tabitem active">
                  <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-xl-6 col-xxl-7 ">
                      <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
                        {/* Removed image */}
                        <a
                          href="#candidate1" // Updated href to be a placeholder for candidate 1
                          className="popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle"
                        >
                          <i className="fa-solid fa-play fs-four"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-5">
                      <div className="trade_on__content">
                        <h4 className="mb-4">Vote for the MITM President</h4>
                        <p className="mx-ch">
                          Cast your vote for the MITM President! The election is underway, and your vote counts!
                        </p>
                        <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Vote for Candidate 1
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Vote for Candidate 2
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Vote for Candidate 3
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Vote for Candidate 4
                          </li>
                        </ul>
                        <div className="mt-8 mt-xxl-10">
                          <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="odometer display-four s1-color"
                                  data-odometer-final="12"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  K
                                </span>
                              </div>
                              <span className="mt-4">Votes Casted</span>
                            </div>
                            <div className="counter-part">
                              <div className="counters d-flex">
                                <span
                                  className="odometer display-four s1-color"
                                  data-odometer-final="5.5"
                                >
                                  0
                                </span>
                                <span className="display-four symbol s1-color">
                                  M
                                </span>
                              </div>
                              <span className="mt-4">Total Votes (In USD)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Candidate Info Tab */}
                <div className="tabitem">
                  <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-xl-6 col-xxl-5">
                      <div className="trade_on__content">
                        <h4 className="mb-4">Candidate Information</h4>
                        <p className="mx-ch">
                          Meet the candidates for MITM President! Get to know their vision and manifesto.
                        </p>
                        <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Candidate 1: Vision & Plan
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Candidate 2: Vision & Plan
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Candidate 3: Vision & Plan
                          </li>
                          <li className="d-flex align-items-center gap-3 fs-six-up">
                            <i className="ti ti-circle-check s1-color fs-four"></i>Candidate 4: Vision & Plan
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-7 ">
                      {/* Removed image */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
