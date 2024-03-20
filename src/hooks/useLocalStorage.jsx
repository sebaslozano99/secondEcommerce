import { useState } from "react";


const useLocalStorage = (key, initialValue) => {
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = window.localStorage.get(key);
        return item ? JSON.parse(item) : initialValue;
    }
    catch{
        return initialValue;
    }
  });

  function setValue(value) {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export default useLocalStorage