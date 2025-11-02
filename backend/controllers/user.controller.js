import { redisClient } from "../config/redisClient.js";
import { Performance } from "../models/Performance.js";

export const getDistricData = async (req, res) => {
  try {
    console.log("get district endpoint check");
    const { district, state, year } = req.params;

    const cacheKey = `performance:${state}:${district}:${year}`;

    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      console.log("Served from Redis cache");
      return res.status(200).json({
        success: true,
        message: "data from cache",
        data: JSON.parse(cachedData),
      });
    }
    const startYear = parseInt(year, 10);
    const endYear = startYear + 1;
    const finalyear = `${startYear}-${endYear}`;

    const data = await Performance.find({
      district_name: district,
      state_name: state,
      fin_year: finalyear,
    });

    console.log("data : ", data.length);
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(data));
    console.log("🗄️ Cached data in Redis for 1 hour");

    return res.status(201).json({
      success: true,
      message: "data get successfully",
      data: data,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      success: false,
      message: "server error",
      error:  "Internal server error"
    });
  }
};


export const backendCheck = async (req, res) => {
  try {
    console.log("backend check");

    return res.status(201).json({
      success: true,
      message: "backend running successfully"
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
