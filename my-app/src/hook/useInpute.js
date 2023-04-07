import { useState } from "react";

const useInput = (initialValue, validatorFn) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validatorFn === "function") {
      willUpdate = validatorFn(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange, setValue };
};

export default useInput;
