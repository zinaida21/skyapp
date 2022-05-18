import { useState } from "react";

const useInput = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    onBlur: (e) => {
      if (!e.target.value && required) setError("Это обязательное поле");
      else if (e.target.value === "Ваше имя") setError("Введите имя");
      else if (e.target.value === "Ваш пароль") setError("Введите пароль");
      else setError(null);
      console.log(e.target.value);
    },
    onChange: (e) => setValue(e.target.value),
    error,
  };
};

export default useInput;
