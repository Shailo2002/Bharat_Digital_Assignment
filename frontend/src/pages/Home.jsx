import React, { useState } from "react";
import { BACKEND_URL } from "../../Contant";
import axios from "axios"

function Home() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  console.log("backend url ", BACKEND_URL)

  const handleSearch = async () => {
    try {
      console.log("state : ", state, " distric : ", district)
      const response = await axios.get(
        `${BACKEND_URL}/api/user/${state}/${district}`
      );
      console.log("response : ", response);
    } catch (error) {
      console.log("error while getting district detail ", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg p-5">
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
                className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              >
                <option value="">-- Select a State --</option>
                <option value="goa">Goa</option>
                <option value="delhi">Delhi</option>
                <option value="UTTAR PRADESH">UTTAR PRADESH</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="district" className="block mb-2 font-medium">
                District
              </label>
              <select
                name="district"
                id="district"
                className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                <option value="">-- Select a District --</option>
                <option value="noida">Noida</option>
                <option value="gurugram">Gurugram</option>
                <option value="AMROHA">AMROHA</option>
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
