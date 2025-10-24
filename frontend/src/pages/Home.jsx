import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../Contant";
import axios from "axios";
import { useSelector } from "react-redux";
import { stateData } from "../data/state";

function Home() {
  const { location } = useSelector((state) => state.user);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [districList, setDistrictList] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const latitude = location?.latitude;
      const longitude = location?.longitude;
      console.log("location : ", location);

      const result = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );

      const data = result?.data;

      const stateName = data?.principalSubdivision?.toUpperCase();

      const adminArray = data?.localityInfo.administrative;

      const districtObject = adminArray.find((item) => item.adminLevel === 5);

      const districtName = districtObject ? districtObject.name : null;
      const cleanedDistrictName = districtName
        .replace(" district", "")
        ?.toUpperCase();
      setState(stateName);
      setDistrict(cleanedDistrictName);
      console.log("State:", state);
      console.log("District:", district);
    };
    getCity();
  }, [location]);

  const handleSearch = async () => {
    try {
      console.log("state : ", state, " distric : ", district);
      const response = await axios.get(
        `${BACKEND_URL}/api/user/${state}/${district}`
      );
      console.log("response : ", response);
    } catch (error) {
      console.log("error while getting district detail ", error);
    }
  };

  const handleGetDistrict = (e) => {
    setState(e.target.value);
    setDistrict("");
    if (state == "") {
      setDistrictList([]);
      setDistrict("");
    }
    setDistrictList(stateData[e.target.value]);
    console.log("district list : ", stateData[e.target.value]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg ">
        <div className="flex flex-col justify-center min-w-64">
          <h4 className="mb-4 font-bold text-xl text-center">
            Select Your Location
          </h4>

          <form
            onSubmit={handleSearch}
            className="flex flex-col items-center w-full gap-4"
          >
            <div className="w-full">
              <label htmlFor="state" className="block mb-2 font-medium">
                State
              </label>
              <select
                name="state"
                id="state"
                value={state}
                className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleGetDistrict(e)}
              >
                <option value="">-- Select a State --</option>
                {Object.keys(stateData).map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="district" className="block mb-2 font-medium">
                District
              </label>
              <select
                name="district"
                id="district"
                value={district}
                className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
                disabled={!state}
              >
                <option value="">-- Select a District --</option>
                {districList.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <button
            disabled={!district || !state}
            onClick={handleSearch}
            className={`p-2 mt-6 w-full rounded-lg border shadow ${
              state && district ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
