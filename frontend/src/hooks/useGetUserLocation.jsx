import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/userSlice";

export const useGetUserLocation = () => {
  const dispatch = useDispatch();
  try {
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(setLocation({ lat: latitude, long: longitude }));
      });
    }, []);
  } catch (error) {}
};
