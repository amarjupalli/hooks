import { useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, any] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = (): void => setValue(!value);
  return [value, toggleValue];
};
