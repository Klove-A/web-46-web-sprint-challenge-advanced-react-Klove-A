import { useState } from "react";

// write your custom hook here to control your checkout form

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "", 
  zip: "",
}; 

const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);
}