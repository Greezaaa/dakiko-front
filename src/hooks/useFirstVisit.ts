import { useEffect, useState } from "react";

const useVisitCounter = (): number => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const key = "visitCount";

    const existingValue = localStorage.getItem(key);
    if (!existingValue) {
      localStorage.setItem(key, "1");
      setVisitCount(1);
    } else {
      const count = parseInt(existingValue, 10) + 1;
      localStorage.setItem(key, count.toString());
      setVisitCount(count);
    }
  }, []);
  return visitCount;
};
export default useVisitCounter;
