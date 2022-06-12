import { useState } from "react";

function useInputText(defaultValue) {
  const [value, setValue] = useState    (defaultValue);

  function onChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange };
}
export default useInputText;
