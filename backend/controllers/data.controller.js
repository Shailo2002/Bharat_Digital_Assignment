import axios, { all } from "axios";
import { Performance } from "../models/Performance.js";
import { states } from "../data/state.js";
import { redisClient } from "../config/redisClient.js";

export const getData = async (req, res) => {
  const API_KEY = process.env.DATA_GOV_API_KEY;
  const BASE_URL = process.env.BASE_URL;
  try {
    console.log("getData endpoint check");

    let allData = [];
    for (const state of states) {
      const { data } = await axios.get(
        `${BASE_URL}?api-key=${API_KEY}&format=json&limit=20000&filters[state_name]=${encodeURIComponent(
          state
        )}`
      );
      console.log(`${state}: ${data.records?.length || 0} records`);

      if (data.records && data.records.length > 0) {
        allData.push(...data.records);
      }

      await new Promise((r) => setTimeout(r, 1000));
    }

    await Performance.deleteMany({});
    await Performance.insertMany(allData);
    await redisClient.flushAll();


    console.log(`Total stored records: ${allData.length}`);
    res.json({ message: "Data synced successfully", count: allData.length });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to sync data from MGNREGA API" });
  }
};
