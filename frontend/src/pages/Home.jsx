import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../Contant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { stateData } from "../data/state";
import LineChartComp from "../../components/LineChartComp";
import StackedBarChart from "../../components/StackBarChart";
import PieChartComp from "../../components/PieChartComp";
import { setDistrictData } from "../redux/userSlice";
import DashboardStatCards from "../../components/DashboardStatCards";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";

function Home() {
  const { location } = useSelector((state) => state.user);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [districList, setDistrictList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([]);

  let yearList = [];
  for (let i = 2025; i >= 1990; i--) {
    yearList.push(i);
  }

  useEffect(() => {
    const getCity = async () => {
      const latitude = location?.latitude;
      const longitude = location?.longitude;

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

      if (stateData[stateName]) {
        setDistrictList(stateData[stateName]);
      }
    };
    getCity();
  }, [location]);

  const handleSearch = async () => {
    try {
      const promise = axios.get(
        `${BACKEND_URL}/api/user/${state}/${district}/${year}`
      );
      toast.promise(promise, {
        loading: "Loading",
        success: "Got the data",
        error: "Error when fetching",
      });
      const response = await promise;

      console.log("response : ", response?.data?.success)
      const monthlyData = Object.values(
        response?.data?.data?.reduce((acc, item) => {
          const key = `${item.fin_year}-${item.month}`;
          if (!acc[key]) acc[key] = { ...item, count: 1 };
          else {
            // Average or sum key metrics
            acc[key].Average_Wage_rate_per_day_per_person +=
              item.Average_Wage_rate_per_day_per_person;
            acc[key].Total_Exp += item.Total_Exp;
            acc[key].Wages += item.Wages;
            acc[key].count++;
          }
          return acc;
        }, {})
      ).map((item) => ({
        ...item,
        Average_Wage_rate_per_day_per_person:
          item.Average_Wage_rate_per_day_per_person / item.count,
        Total_Exp: item.Total_Exp / item.count,
        Wages: item.Wages / item.count,
      }));

      const monthOrder = [
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "March",
      ];

      const sortedMonthlyData = monthlyData.sort(
        (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
      );

      

      setCurrentData(sortedMonthlyData);
      dispatch(setDistrictData(sortedMonthlyData));
    } catch (error) {
      console.log("error while getting district detail ", error);
    } finally {
      setLoading(false);
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
  };

  return (
    <div className=" bg-gray-200 font-sans p-4">
      <div>
        <h4 className="mb-4 font-semibold text-gray-800 text-2xl text-center">
          Select Your Location
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:col-span-3 md:grid-cols-3 gap-6 p-2 md:p-6 -space-y-2"
          >
            <div className="w-full md:max-w-72">
              <select
                name="state"
                id="state"
                value={state}
                className="p-1.5 md:p-2  w-full text-sm border bg-white rounded-xl shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleGetDistrict(e)}
              >
                <option value="">-- Select a State --</option>
                {Object.keys(stateData)?.map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:max-w-72">
              <select
                name="district"
                id="district"
                value={district}
                className="p-1.5 md:p-2  w-full text-sm border bg-white rounded-xl shadow-sme border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
                disabled={!state}
              >
                <option value="">-- Select a District --</option>
                {districList?.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:max-w-72">
              <select
                name="year"
                id="year"
                value={year}
                className="p-1.5 md:p-2 w-full text-sm border bg-white rounded-xl shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">-- Select a Year --</option>
                {yearList?.map((value, index) => (
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
            className={`p-1.5 mt-2 w-full  rounded-lg border shadow md:col-span-1 md:max-w-72 md:p-2 md:my-6 ${
              state && district && year
                ? "bg-[#7474ec] text-white hover:bg-[#7474ece0] hover:shadow-xl cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center justify-center gap-0.5">
              <IoMdSearch size={24} className="pt-0.5" />
              Search
            </span>
          </button>
        </div>
      </div>

      {loading || currentData.length <= 0 ? (
        <div className=" flex h-screen justify-center items-center pb-32 mx-4">
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-xl shadow-sm w-96 h-72 text-center">
            {currentData.length <= 0 && !loading ? (
              <>
                <h3 className="text-gray-700 font-medium text-lg">
                  No Data Available
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Try selecting another year to view results.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-gray-700 font-medium text-lg">
                  No district selected
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Please choose a state and district to view dashboard data.
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <DashboardStatCards />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-2 md:p-6">
            <LineChartComp
              line1_key={"Total_Households_Worked"}
              line2_key={"Total_Individuals_Worked"}
              title={"Employment trend"}
            />
            <PieChartComp
              title="Work Category Distribution"
              dataKeys={[
                "percent_of_Expenditure_on_Agriculture_Allied_Works",
                "percent_of_NRM_Expenditure",
              ]}
            />
            <LineChartComp
              line1_key={"Average_Wage_rate_per_day_per_person"}
              line2_key={"Wages"}
              title={"Wage trend"}
            />
            <StackedBarChart
              bar1_key={"Women_Persondays"}
              bar2_key={"Total_Households_Worked"}
              title={"Women Participation"}
            />
            <LineChartComp
              line1_key={"Approved_Labour_Budget"}
              line2_key={"Total_Exp"}
              title={"Budget vs Expenditure"}
            />
            <PieChartComp
              title="Caste Persondays"
              dataKeys={["SC_persondays", "ST_persondays"]}
            />
            <StackedBarChart
              bar1_key={"ST_persondays"}
              bar2_key={"SC_persondays"}
              title={"Caste Representation"}
            />
            <LineChartComp
              line1_key={"percentage_payments_gererated_within_15_days"}
              title={"Payment efficiency"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
