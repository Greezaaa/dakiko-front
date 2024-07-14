import { useState, useEffect } from "react";
import {
  format,
  differenceInMinutes,
  addDays,
  isBefore,
  isAfter,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface OpenCloseStatus {
  text: string;
  isOpen: boolean;
}

const useOpenCloseStatus = (): OpenCloseStatus => {
  const [status, setStatus] = useState<OpenCloseStatus>({
    text: "",
    isOpen: false,
  });

  useEffect(() => {
    const checkStatus = () => {
      const timeZone = "Europe/Madrid";
      const now = toZonedTime(new Date(), timeZone);

      const openingHour = 10;
      const openingMinute = 0;
      const closingHour = 23;
      const closingMinute = 59;

      const openTimeToday = new Date(now);
      openTimeToday.setHours(openingHour, openingMinute, 0, 0);

      let closeTimeToday = new Date(now);
      closeTimeToday.setHours(closingHour, closingMinute, 0, 0);
      if (closingHour <= openingHour) {
        closeTimeToday = addDays(closeTimeToday, 1);
      }

      let statusMessage = "Closed";
      let isOpen = false;

      if (isAfter(now, openTimeToday) && isBefore(now, closeTimeToday)) {
        isOpen = true;
        const minutesUntilClose = differenceInMinutes(closeTimeToday, now);

        if (minutesUntilClose <= 30) {
          statusMessage = `Closing soon, in ${minutesUntilClose} minutes`;
        } else if (minutesUntilClose <= 60) {
          statusMessage = `Closing soon, at ${format(closeTimeToday, "HH:mm")}`;
        } else {
          statusMessage = "Open";
        }
      } else if (isBefore(now, openTimeToday)) {
        const minutesUntilOpen = differenceInMinutes(openTimeToday, now);

        if (minutesUntilOpen <= 30) {
          statusMessage = `Opening soon, in ${minutesUntilOpen} minutes`;
        } else if (minutesUntilOpen <= 60) {
          statusMessage = `Opening soon, at ${format(openTimeToday, "HH:mm")}`;
        } else {
          statusMessage = "Closed";
        }
      } else {
        const nextOpenTime = addDays(openTimeToday, 1);
        const minutesUntilOpen = differenceInMinutes(nextOpenTime, now);

        if (minutesUntilOpen <= 30) {
          statusMessage = `Opening soon, in ${minutesUntilOpen} minutes`;
        } else if (minutesUntilOpen <= 60) {
          statusMessage = `Opening soon, at ${format(nextOpenTime, "HH:mm")}`;
        } else {
          statusMessage = "Closed";
        }
      }

      setStatus({ text: statusMessage, isOpen });
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return status;
};

export default useOpenCloseStatus;
