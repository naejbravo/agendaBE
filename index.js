const express = require("express");
const cors = require("cors");
const AgendaRoutes = require("./app/routes/agenda.routes");

const { connectDb } = require("./app/utils/database/db");
const PORT = 8000;

const app = express();
connectDb();

// var corsOptions = {
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   optionsSuccessStatus: 204,
//   maxAge: 500,
// };

// app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/agenda", AgendaRoutes);

// app.use("/", (req, res, next) => {
//   return res.json({
//     res: "funciona",
//   });
// });

app.listen(PORT, () => {
  console.log(`El servidor esta iniciado en el puerto ${PORT}`);
});
