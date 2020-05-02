import { useRef, useEffect } from "react";

// example useMemoWithComparator(employee, (a, b) => a.id === b.id)
function useMemoWithComparator(value, comparatorFn) {
  const oldRef = useRef();
  const oldValue = oldRef.current;
  const areValuesEqual = comparatorFn(oldValue, value);
  useEffect(() => {
    if (!areValuesEqual) {
      oldRef.current = value;
    }
  });

  return areValuesEqual ? oldValue : value;
}
