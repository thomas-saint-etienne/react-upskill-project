import { useState } from "react";
import { Age } from "./Age";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Band } from "./Band";
import { Email } from "./Email";
import { Name } from "./Name";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
  });
  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to update form data based on field and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // The updateFormData function is designed to update the state of formData based on the provided field and value arguments. Let's break it down step by step:

  // Function Arguments:

  // field: This argument represents the key (or property name) in the formData object that you want to update. For example, it could be "name", "age", "email", etc.
  // value: This argument represents the new value that you want to assign to the specified field.
  // setFormData:

  // This is the state update function provided by the useState hook for the formData state. It's used to update the state of formData.
  // Function Body:

  // prev: This represents the current state of formData before any updates. It's a common pattern to use a function inside setState (or setFormData in this case) when the next state depends on the previous state.

  // { ...prev }: This syntax is called the spread operator. It's used to create a new object that contains all of the properties of the prev object. This ensures that we're not directly mutating the state, but instead creating a new copy of it.

  // [field]: value: This is a computed property name. It allows you to set the property of an object based on the value of a variable (field in this case). The value of this property will be set to the value argument passed to the function. For example, if field is "name" and value is "John", this would add or update the property "name" with the value "John" in the new object.

  // In summary, the updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values, but with the specified field updated to the new value.

  /// GOING BACK AND FORTH BETWEENQUESTIONS

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    // Check if current step is not the last step
    if (currentStep < 6) {
      // Check if the current step is complete
      switch (currentStep) {
        case 1:
          // Condition: Check if name field is not empty
          if (formData.name.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your name");
          break;
        case 2:
          // Condition: Check if age field is not empty
          if (formData.age.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your age");
          break;
        case 3:
          // Condition: Check if email field is not empty
          if (formData.email.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your email");
          break;
        case 4:
          // Condition: Check if favoriteBand field is not empty
          if (formData.favoriteBand.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite band");
          break;
        case 5:
          // Condition: Check if favoriteAlbum field is not empty
          if (formData.favoriteAlbum.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite album");
          break;
        default:
          // Proceed to the next step if all conditions are met
          setCurrentStep(currentStep + 1);
      }
    }
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // function to submit the form itself
  const submitForm = () => {
    console.log(formData);
    setFormSubmitted(true);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Favorite Band: ${formData.favoriteBand}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
  `;
    alert(formattedData);
  };

  // Function to reset the form and start over
  const startOver = () => {
    setFormData({
      name: "",
      age: "",
      email: "",
      favoriteBand: "",
      favoriteAlbum: "",
      favoriteArtist: "",
    });
    setFormSubmitted(false);
    setCurrentStep(1); // Reset to the first step
  };

  return (
    <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Age component if on step 2 */}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {/* Render the Email component if on step 3 */}
      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}
      {/* Render the Band component if on step 4 */}
      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
      {/* Render the Album component if on step 5 */}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 6 */}
      {!formSubmitted && currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
      )}
      {!formSubmitted && (
        <div>
          {/* Show the "Back" button if not on the first step */}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 6 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}

      {/* Render the form data after submission */}
      {formSubmitted && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Favorite Band: {formData.favoriteBand}</p>
          <p>Favorite Album: {formData.favoriteAlbum}</p>
          <p>Favorite Artist: {formData.favoriteArtist}</p>
          {/* Button to start over */}
          <button onClick={startOver}>Start Over</button>
        </div>
      )}
    </div>
  );
};
