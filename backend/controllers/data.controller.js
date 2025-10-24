import axios, { all } from "axios";
import { Performance } from "../models/Performance.js";

export const getData = async (req, res) => {
  const API_KEY = process.env.DATA_GOV_API_KEY;
  const BASE_URL = process.env.BASE_URL;
  try {
    console.log("getData endpoint check");

    // const states = [
    //   "UTTAR PRADESH",
    //   "MADHYA PRADESH",
    //   "BIHAR",
    //   "ASSAM",
    //   "MAHARASHTRA",
    //   "GUJARAT",
    //   "RAJASTHAN",
    //   "TAMIL NADU",
    //   "CHHATTISGARH",
    //   "KARNATAKA",
    //   "TELANGANA",
    //   "ODISHA",
    //   "ANDHRA PRADESH",
    //   "PUNJAB",
    //   "JHARKHAND",
    //   "HARYANA",
    //   "ARUNACHAL PRADESH",
    //   "JAMMU AND KASHMIR",
    //   "MANIPUR",
    //   "UTTARAKHAND",
    //   "KERALA",
    //   "HIMACHAL PRADESH",
    //   "MEGHALAYA",
    //   "WEST BENGAL",
    //   "MIZORAM",
    //   "NAGALAND",
    //   "TRIPURA",
    //   "SIKKIM",
    //   "ANDAMAN AND NICOBAR",
    //   "LADAKH",
    //   "PUDUCHERRY",
    //   "GOA",
    //   "DN HAVELI AND DD",
    //   "LAKSHADWEEP",
    // ];

    const states = ["UTTAR PRADESH", "DN HAVELI AND DD", "LAKSHADWEEP"];

    let allData = [];
    for (const state of states) {
      const { data } = await axios.get(
        `${BASE_URL}?api-key=${API_KEY}&format=json&limit=1000&filters[state_name]=${encodeURIComponent(
          state
        )}`
      );
      console.log(`✅ ${state}: ${data.records?.length || 0} records`);

      if (data.records && data.records.length > 0) {
        allData.push(...data.records);
      }

      await new Promise((r) => setTimeout(r, 1000));
    }

    await Performance.deleteMany({});
    await Performance.insertMany(allData);

    console.log(`🚀 Total stored records: ${allData.length}`);
    res.json({ message: "Data synced successfully", count: allData.length });
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to sync data from MGNREGA API" });
  }
};
