/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiAlertTriangle } from "react-icons/fi";
import { Select, MenuItem } from "@material-ui/core";
import { commerce } from "../lib/commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ token, next }) => {
  const [shippingCountryies, setShippingCountryies] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const [shippingSubdividions, setShippingSubdividions] = useState([]);
  const [shippingSubdividion, setShippingSubdividion] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  useEffect(() => {
    fetchShippingCountries(token.id);
  }, [token.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdividion)
      fetchOptions(token.id, shippingCountry, shippingSubdividion);
  }, [shippingCountry, shippingSubdividion, token.id]);

  const countries = Object.entries(shippingCountryies).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisons = Object.entries(shippingSubdividions).map(
    ([sub, name]) => ({
      id: sub,
      label: name,
    })
  );
  const options = shippingOptions.map((item) => ({
    id: item.id,
    label: `${item.description}-${item.price.formatted_with_symbol}`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountryies(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubDivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdividions(subdivisions);
    setShippingSubdividion(Object.keys(subdivisions)[0]);
  };
  const fetchOptions = async (checkoutid, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutid, {
      country,
      region,
    });

    setShippingOptions(options);
    // array
    setShippingOption(options[0].id);
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) =>
    next({ ...data, shippingCountry, shippingSubdividion, shippingOption });

  return (
    <div className="form-container">
      <h2>Your Shipping Address</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-elements">
          <div>
            <label className="label">First Name</label>
            <input
              name="firstname"
              type="text"
              ref={register({
                required: "Required",
              })}
            />
            {errors.firstname && (
              <p>
                <FiAlertTriangle /> {errors.firstname.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">Last Name</label>
            <input
              name="lastname"
              type="text"
              ref={register({
                required: "Required",
              })}
            />
            {errors.lastname && (
              <p>
                <FiAlertTriangle /> {errors.lastname.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">Email Address</label>
            <input
              name="email"
              type="text"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <p>
                <FiAlertTriangle /> {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">City / location </label>
            <input
              name="city"
              type="text"
              ref={register({
                required: "Required",
              })}
            />
            {errors.city && (
              <p>
                <FiAlertTriangle /> {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <label className="label">Pin code</label>
            <input
              name="pincode"
              type="text"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "invalid",
                },
              })}
            />
            {errors.pincode && (
              <p>
                <FiAlertTriangle /> {errors.pincode.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">Address </label>
            <input
              name="address"
              type="text"
              ref={register({
                required: "Required",
              })}
            />
            {errors.landmark && (
              <p>
                <FiAlertTriangle /> {errors.city.message}
              </p>
            )}
          </div>
        </div>
        <div className="selection-option">
          <div>
            <label className="label">Shipping country</label>
            <Select
              value={shippingCountry}
              className="section"
              onChange={(e) => setShippingCountry(e.target.value)}>
              {countries &&
                countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <div>
            <label className="label">Shipping State</label>
            <Select
              className="section"
              value={shippingSubdividion}
              onChange={(e) => setShippingSubdividion(e.target.value)}>
              {subdivisons.map((subdivsion) => (
                <MenuItem key={subdivsion.id} value={subdivsion.id}>
                  {subdivsion.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <label className="label">Shipping Options</label>
            {options.map((option) => (
              <Select
                className="section"
                value={shippingOption}
                onChange={(e) => setShippingOptions(e.target.value)}>
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              </Select>
            ))}
          </div>
        </div>
        <div className="checkout-btns">
          <Link to="/items/cart">
            <button className="cart-btn">Back to cart</button>
          </Link>

          <button className="payment-btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
