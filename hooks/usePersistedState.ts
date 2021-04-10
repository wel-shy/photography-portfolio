import { useState, useEffect, Dispatch } from "react";

const usePersistedState = (
  defaultState: any,
  key: string
): [any, Dispatch<any>] => {
  const local = process.browser ? localStorage.getItem(key) : undefined;
  const [state, setState] = useState(local ? JSON.parse(local) : defaultState);

  useEffect(() => {
    const { errorMessage, ...rest } = state;
    localStorage.setItem(key, JSON.stringify(rest));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
