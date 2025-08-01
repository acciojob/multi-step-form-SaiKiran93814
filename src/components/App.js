import React, { useState } from 'react';
import Step from './Step';
import "../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  // ✅ Add delay for Cypress compatibility
  const handleNext = () => {
  setTimeout(() => {
    setStep((prev) => prev + 1);
  }, 100); // Increased delay for Cypress timing
};


  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log("Submitted:", formData);
  };

  // ✅ Log current step to browser console
  console.log("Current Step:", step);

  return (
    <div className="container">
      <Step
        step={step}
        formData={formData}
        onChange={handleChange}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
