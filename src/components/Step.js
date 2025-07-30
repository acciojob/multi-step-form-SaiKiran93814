import React from 'react';

const Step = ({ step, formData, onChange, onNext, onPrevious, onSubmit }) => {
  // RegEx for MM/YY format
  const isValidExpiry = (value) => {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
  };

  return (
    <form className="form-box" onSubmit={onSubmit}>
      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>
          <p>First name:</p>
          <input
            id="first_name"
            type="text"
            value={formData.first_name}
            onChange={onChange}
            required
          />
          <p>Last Name:</p>
          <input
            id="last_name"
            type="text"
            value={formData.last_name}
            onChange={onChange}
            required
          />
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>
          <p>Brand</p>
          <input
            id="model"
            type="text"
            value={formData.model}
            onChange={onChange}
            required
          />
          <p>Model</p>
          <input
            id="car_price"
            type="number"
            value={formData.car_price}
            onChange={onChange}
            required
          />
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Payment Details</h2>
          <p>Credit Card Number:</p>
          <input
            id="card_info"
            type="text"
            inputMode="numeric"
            maxLength={12}
            value={formData.card_info}
            onChange={onChange}
            required
          />
          {formData.card_info.length > 0 && formData.card_info.length !== 12 && (
            <p className="warning">Credit card number must be exactly 12 digits long</p>
          )}
          <p>Expiration Date:</p>
          <input
            id="expiry_date"
            type="text"
            placeholder="MM/YY"
            value={formData.expiry_date}
            onChange={onChange}
            required
          />
          {formData.expiry_date.length > 0 && !isValidExpiry(formData.expiry_date) && (
            <p className="warning">Expiration Date must be in the format MM/YY</p>
          )}
        </div>
      )}

      <div className="btn-group">
        {step > 1 && (
          <button type="button" className="btn" onClick={onPrevious}>
            Previous
          </button>
        )}
       {step < 3 && (
  <button
    type="button"
    id="nextBtn"  // ADD THIS
    className="btn"
    onClick={onNext}
  >
    Next
  </button>
)}
        {step === 3 && (
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Step;
