const dotenv = require("dotenv");

dotenv.config();
console.log("Gemini key loaded:", !!
process.env.GEMINI_API_KEY);

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
