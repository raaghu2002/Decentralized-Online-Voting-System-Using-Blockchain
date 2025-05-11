import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  RoadMap,
} from "../Components/index";

import Input from "../Components/Global/Input";
import Upload from "../Components/Global/Upload";
import Preview from "../Components/Global/Preview";
import UploadImg from "../Components/Global/UploadImg";
import PreviewImg from "../Components/Global/PreviewImg";
import Loader from "../Components/Global/Loader";
import PopUp from "../Components/Global/PopUp";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const signup = () => {
  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    VOTING_DAPP,
    REGISTER_CANDIDATE,
    GET_SINGLE_CANDIDATE,
    checkIfWalletIsConnected,
  } = useContext(VOTING_DAPP_CONTEXT);

  //CURRENT ADDRESS
  const [currentAddress, setCurrentAddress] = useState();
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const [candidate, setCandidate] = useState();

  //FILES
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);

  //CANDIDATE DETAIL
  const [updateCandidate, setUpdateCandidate] = useState({
    _name: "",
    _nominationForm: "",
    _affidavit: "",
    _criminalAntecedents: "",
    _assetsAndLiabilities: "",
    _educationalQualifications: "",
    _electoralRollEntry: "",
    _securityDeposit: "",
    _partyAffiliation: "",
    _oathOrAffirmation: "",
    _photographs: "",
    _proofOfAge: "",
    _proofOfAddress: "",
    _panCardDetails: "",
    _voterIdCardDetails: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const address = await checkIfWalletIsConnected();
      if (address) {
        setCurrentAddress(address);
        const items = await GET_SINGLE_CANDIDATE(address);
        setCandidate(items);
        console.log(items);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <section class="sign nb4-bg h-100 d-flex align-items-center position-relative z-0">
        <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
          <img
            src="assets/images/star.png"
            alt="vector"
            class="position-absolute push_animat"
          />
        </div>
        <div class="container ">
          <div class="row align-items-center justify-content-center justify-content-xl-start">
            <div class="col-12 col-sm-10 col-md-6">
              <div class="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
                <h1 class="display-one" style={{ color: "white" }}>Welcome Back!</h1>
                {image && <PreviewImg image={image} />}
                {pdf && <Preview pdf={pdf} />}
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto">
              <div class="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
                <div class="head_part">
                  <a href="/">
                    {" "}
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <h5 class="mt-5 mt-lg-6" style={{ color: "white" }}>Register as a candidate</h5>
                </div>
                {candidate?.address == zeroAddress && (
                  <div
                    autocomplete="off"
                    id="frmContactus"
                    class="contact__form mt-8 mt-lg-10  text-start"
                  >
                    <div class="d-flex flex-column gap-5 gap-lg-6 ">
                      <div class="row g-5 g-lg-6">
                        <div class="col-sm-6 col-md-12 col-xl-6">
                          <Input
                            name={"Name"}
                            placeholder={"Enter Full Name"}
                            type={"text"}
                            handleClick={(e) =>
                              setUpdateCandidate({
                                ...updateCandidate,
                                _name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-sm-6 col-md-12 col-xl-6">
                          <Input
                            name={"Nomination Form"}
                            placeholder={"Enter Nomination Form ID"}
                            type={"text"}
                            handleClick={(e) =>
                              setUpdateCandidate({
                                ...updateCandidate,
                                _nominationForm: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <Input
                        name={"Affidavit"}
                        placeholder={"Enter Affidavit Details"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _affidavit: e.target.value,
                          })
                        }
                      />

                      <Input
                        name={"Criminal Antecedents"}
                        placeholder={"Mention Any Criminal Background"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _criminalAntecedents: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Assets And Liabilities"}
                        placeholder={"Declare Assets and Liabilities"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _assetsAndLiabilities: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Educational Qualifications"}
                        placeholder={"Enter Educational Qualifications"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _educationalQualifications: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Electoral RollEntry"}
                        placeholder={"Provide Electoral Roll Entry ID"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _electoralRollEntry: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Security Deposit"}
                        placeholder={"Enter Security Deposit Details"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _securityDeposit: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Party Affiliation"}
                        placeholder={"Mention Party Affiliation (if any)"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _partyAffiliation: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Oath Or Affirmation"}
                        placeholder={"Provide Oath or Affirmation Statement"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _oathOrAffirmation: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Photographs"}
                        placeholder={"Upload Photograph URL or Reference"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _photographs: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Proof Of Age"}
                        placeholder={"Upload/Enter Proof of Age Document"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _proofOfAge: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Proof Of Address"}
                        placeholder={"Upload/Enter Proof of Address Document"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _proofOfAddress: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"Pan Card Details"}
                        placeholder={"Enter PAN Card Number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _panCardDetails: e.target.value,
                          })
                        }
                      />
                      <Input
                        name={"VoterId Card Details"}
                        placeholder={"Enter Voter ID Card Number"}
                        type={"text"}
                        handleClick={(e) =>
                          setUpdateCandidate({
                            ...updateCandidate,
                            _voterIdCardDetails: e.target.value,
                          })
                        }
                      />
                      <UploadImg
                        setLoader={setLoader}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        setImage={setImage}
                      />
                      <Upload
                        setLoader={setLoader}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        setPdf={setPdf}
                      />
                    </div>
                    <label class="checkbox-single d-flex align-items-center nw1-color mt-3" style={{ color: "white" }}>
                      <span class="checkbox-area d-center">
                        <input type="checkbox" />
                        <span class="checkmark d-center"></span>
                      </span>
                      I accept the privacy policy
                    </label>
                    <div class=" mt-7 mt-lg-8">
                      <button
                        onClick={() =>
                          REGISTER_CANDIDATE(updateCandidate, image, pdf)
                        }
                        class="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                        style={{ color: "white" }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}

                <div class="mt-8 mt-lg-10">
                  <p style={{ color: "white" }}>
                    Before registering kindly check the nomination details{" "}
                    <a href="/">here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {candidate?.address != zeroAddress && <PopUp candidate={candidate} />}
        {loader && <Loader />}
      </section>
    </>
  );
};

export default signup;


// {
//   _name: "Ravi Kumar",
//   _nominationForm: "Form 2A",
//   _affidavit: "Affidavit2024.pdf",
//   _criminalAntecedents: "None",
//   _assetsAndLiabilities: "₹25,00,000 (Assets), ₹2,00,000 (Liabilities)",
//   _educationalQualifications: "B.A. in Political Science",
//   _electoralRollEntry: "AC123456789",
//   _securityDeposit: "₹10,000",
//   _partyAffiliation: "Democratic Party",
//   _oathOrAffirmation: "Sworn on 2025-05-10",
//   _photographs: "photo.jpg",
//   _proofOfAge: "DOB Certificate - 1985",
//   _proofOfAddress: "Utility Bill - March 2025",
//   _panCardDetails: "ABCDE1234F",
//   _voterIdCardDetails: "VOTER1234567890"
// }
