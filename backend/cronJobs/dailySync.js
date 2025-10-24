import cron from "node-cron";

import dotenv from "dotenv";
import { getData } from "../controllers/data.controller.js";
dotenv.config();

cron.schedule(
  "0 2 * * *",
  async () => {
    console.log("🕑 [CRON] Starting daily MGNREGA data sync...");
    try {
      const req = {};
      const res = {
        json: (data) => console.log("✅ [CRON] Sync complete:", data),
        status: (code) => ({
          json: (msg) => console.log(`❌ [CRON] ${code}:`, msg),
        }),
      };
      await getData(req, res);
    } catch (error) {
      console.error("❌ [CRON] Sync failed:", err.message);
    }
  },
  { timezone: "Asia/Kolkata" }
);
