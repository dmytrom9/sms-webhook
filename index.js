import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const allowedIps = ["188.42.218.183", "142.91.156.119"];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Webhook route (the one you’ll give to your provider)
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook received:", req.body);

  // Respond quickly to acknowledge receipt
  res.status(200).send("Webhook received");

  // Optionally store in memory or DB
  // Example: saveEvent(req.body);
});

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("🚀 Webhook server is running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
