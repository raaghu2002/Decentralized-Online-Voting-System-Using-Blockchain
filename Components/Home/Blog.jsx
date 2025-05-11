import React from "react";

const Blog = () => {
  return (
    <section className="blog_news pt-120 pb-120 position-relative z-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="heading__content d-flex row-gap-7 gap-20 flex-wrap justify-content-between align-items-center mb-10 mb-lg-15">
            <div className="heading__part">
              <span className="heading s1-color fs-five mb-5">Blog</span>
              <h3>Voting System with Blockchain</h3>
            </div>
            <a
              href="#"
              className="cmn-btn link fs-six-up gap-2 gap-lg-3 align-items-center"
            >
              See All <i className="ti ti-arrow-right fs-four"></i>
            </a>
          </div>
        </div>
        <div className="row gy-6">
          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="#">
                  <h5 className="mb-4 mb-lg-5">
                    Introduction to Blockchain Voting
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex row-gap-0 flex-wrap gap-3 mb-4 mb-lg-5">
                  May 11, 2025 <span>|</span> Written by Tech Insights
                </div>
                <p>
                  Blockchain technology is revolutionizing the voting process by introducing a tamper-proof, decentralized system that ensures transparency and trust. It eliminates the need for intermediaries and significantly reduces the risk of fraud.
                </p>
                <a
                  href="#"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="#">
                  <h5 className="mb-4 mb-lg-5">
                    Benefits of Blockchain in Elections
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  May 11, 2025 <span>|</span> Written by Tech Insights
                </div>
                <p>
                  With blockchain, votes are securely recorded on a distributed ledger that cannot be altered. This builds public trust, enhances accessibility through online voting, and streamlines vote tallying with real-time updates.
                </p>
                <a
                  href="#"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xxl-4">
            <div className="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="#">
                  <h5 className="mb-4 mb-lg-5">
                    Challenges in Blockchain Voting Adoption
                  </h5>
                </a>
                <div className="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  May 11, 2025 <span>|</span> Written by Tech Insights
                </div>
                <p>
                  Despite its promise, blockchain voting faces challenges like digital divide, voter anonymity concerns, and the need for regulatory frameworks. Addressing these issues is essential for widespread implementation.
                </p>
                <a
                  href="#"
                  className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
                >
                  Continue Reading <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
