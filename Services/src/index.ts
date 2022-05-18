const express = require("express");
const storage = require("node-persist");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const router = express.Router();
const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profiles");
const PORT = process.env.PORT || 3000;
//CRUD - Create Read Update Delete
(async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  let options = { dir: "./storage" };
  await storage.init(options);

  // app.use("/", indexRouter);
  app.use("/profiles", profileRouter);

  // // Create user - POST
  // app.post("/users", async (req: Request, res: Response) => {
  //   let u = req.body;
  //   let id = uuidv4();
  //   u.id = id;
  //   u.updated = new Date();
  //   await storage.setItem(id, u);
  //   res.statusCode = 201;
  //   res.json(u);
  // });

  // // Read users - GET
  // app.get("/users", async (req: Request, res: Response) => {
  //   let users = await storage.values();
  //   res.json(users);
  // });

  // // Read user by id - GET
  // app.get("/user/:id", async (req: Request, res: Response) => {
  //   let id = req.params.id;
  //   let user = await storage.getItem(id);
  //   res.json(user);
  // });

  // // Edit - PUT
  // app.put("/user/:id", async (req: Request, res: Response) => {
  //   let id = req.params.id;
  //   let original = await storage.getItem(id);
  //   let updated = { ...original, ...req.body, updated: new Date() };
  //   await storage.updateItem(original.id, updated);
  //   res.statusCode = 200;
  //   res.json(updated);
  // });

  // // Delete - DELETE
  // app.get("/user/:id", async (req: Request, res: Response) => {
  //   let id = req.params.id;
  //   let user = await storage.removeItem(id);
  //   res.statusCode = 204;
  //   res.json(user);
  // });

  app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
  });
})();

module.exports = router;
