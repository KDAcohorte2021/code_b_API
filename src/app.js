const express = require("express");
const cors = require("cors");
const path = require("./config/paths");
const { User, Role, UserRole, sequelize } = require("./models");
const roleRouter = require("./routes/role.routes");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
const corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// Start routes

// route exemple : app.use(path.authBaseURI, authRouter);

app.use(path.roleBaseURI, roleRouter);

// End routes

app.listen(PORT, () => {
  console.log(`The server listens on the port http://localhost:${PORT}`);
});
