/** @format */

import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, CircularProgress } from "@material-ui/core";
import "./checkout.css";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../lib/commerce";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const steps = ["Shipping address", "Payment"];

const Checkout = ({ cart, handleCapture, error, order }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkOuttokens, setToken] = useState("");
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setisFinished] = useState(false);
  const [isdata, setData] = useState({});

  useEffect(() => {
    const generaToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);
        setToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generaToken();
  }, [cart.id]);

  const nextStep = () => setActiveStep((preValue) => preValue + 1);
  const prevStep = () => setActiveStep((preValue) => preValue - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  function handleData(data) {
    setData(data);
  }
  const timeout = () => {
    setTimeout(() => {
      setisFinished(true);
    }, 3000);
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm token={checkOuttokens} next={next} />
    ) : (
      <PaymentForm
        token={checkOuttokens}
        shippingData={shippingData}
        handleCapture={handleCapture}
        backStep={prevStep}
        nextStep={nextStep}
        timeout={timeout}
        data={handleData}
      />
    );

  let Confirmation = () =>
    isFinished ? (
      <div>
        <p>Thank you for your Purchase {isdata.customer.firstname} </p>
        <Link to="/">
          <button style={{ marginTop: "3rem" }} className="back-btn">
            Go to Home
          </button>
        </Link>
      </div>
    ) : (
      <div className="spinner">
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <h4>Error :{error}</h4>
      <br />
      <button>Go to Home</button>
    </>;
  }

  return (
    <div className="checkout-page">
      <div className="checkbox-form">
        <h3>
          Checkout - page <IoBagCheckOutline className="checkout-icon" />
        </h3>
        <Stepper className='stepper' activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkOuttokens && <Form />
        )}
      </div>
    </div>
  );
};

export default Checkout;
