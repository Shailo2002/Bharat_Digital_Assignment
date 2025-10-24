import { Performance } from "../models/Performance.js";

export const getDistricData = async (req, res) => {
  try {
    console.log("get district endpoint check")
    const { district, state } = req.params;

    const data = await Performance.find({
      district_name: district,
      state_name: state,
    });
    console.log("data : ", data);

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
    });
  }
};
