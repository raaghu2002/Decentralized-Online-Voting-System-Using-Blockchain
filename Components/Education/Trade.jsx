import React from "react";

const Trade = () => {
  return (
    <section class="trade_on trade_on--secondary pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star3.png"
          alt="vector"
          class="position-absolute push_animat d-none d-xxxl-flex top-0 start-0 pt-lg-16 ps-20 ms-lg-8"
        />
        <img
          src="assets/images/sun2.png"
          alt="vector"
          class="sun2 position-absolute push_animat d-none d-xxl-flex bottom-0 pb-120"
        />
      </div>
      <div class="container">
        <div class="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div class="col-10 col-sm-8 col-md-7 col-lg-6 order-2 order-lg-0">
            <div class="trade_on__thumbs d-flex justify-content-end">
              <img src="assets/images/education.png" alt="Imgae" />
            </div>
          </div>
          <div class="col-md-10 col-lg-6 col-xxl-5">
            <div class="trade_on__content">
              <span class="heading p1-color fs-six mb-5">Trader Academy</span>
              <h4 class="mb-4 mb-lg-5">
                Investing in Knowledge A Wise Choice for Success
              </h4>
              <p class="mx-ch">
                Knowledge empowers individuals to make informed decisions.
                Whether it's in personal finance, career choices, or everyday
                life navigate challenges with confidence.
              </p>
              <div class="d-flex gap-3 align-items-center mt-5 mt-lg-6">
                {" "}
                <span class="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color">
                  Learn
                </span>
                <i class="ti ti-arrow-narrow-right p1-color fs-four"></i>
                <span class="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color ms-1">
                  Understand
                </span>
                <i class="ti ti-arrow-narrow-right p1-color fs-four"></i>
                <span class="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color ms-1">
                  Trade
                </span>
              </div>
              <a
                href="signup.html"
                class="cmn-btn fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-4 py-lg-3 px-lg-5 mt-7 mt-xxl-8"
              >
                Start Learning <i class="ti ti-arrow-right fs-four"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
