import fs from "fs";
import path from "path";
import express from "express";
import { Telegraf, Scenes, session } from "telegraf";
import { config } from "dotenv";
import {
  createSceneData,
  importSceneData,
  settingsSceneData,
  snipeSceneData,
  startSceneData,
  walletSceneData,
} from "./constants/index.js";
import StartScene from "./screens/StartScene.js";
import SnipeScene from "./screens/SnipeScreen.js";
import SettingsScene from "./screens/SettingsScene.js";
import WalletScene from "./screens/WalletScene.js";
import CreateScene from "./screens/CreateScene.js";
import ImportScene from "./screens/ImportScene.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("static"));
app.use(express.json());

// Load the environment variables from the '.env' file
config();

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

let data = {};
try {
  const rawData = fs.readFileSync("./constants/data.json");
  data = JSON.parse(rawData);
} catch (error) {
  console.error("Error reading data.json:", error);
}
console.log(data);
const startScene = new Scenes.BaseScene("start");
const snipeScene = new Scenes.BaseScene("snipe_screen");
const settingsScene = new Scenes.BaseScene("settings_screen");
const walletScene = new Scenes.BaseScene("wallet_scene");
const createScene = new Scenes.BaseScene("create_scene");
const importScene = new Scenes.BaseScene("import_scene");

// Initialize scene manager
const stage = new Scenes.Stage([
  startScene,
  snipeScene,
  settingsScene,
  walletScene,
  createScene,
  importScene,
]);
bot.use(session());
bot.use(stage.middleware());

// Command to start the conversation
StartScene(startScene, startSceneData.text, startSceneData.reply_data, data);
SnipeScene(snipeScene, snipeSceneData.text, snipeSceneData.reply_data, data);
SettingsScene(
  settingsScene,
  settingsSceneData.text,
  settingsSceneData.reply_data,
  data
);
WalletScene(
  walletScene,
  walletSceneData.text1,
  walletSceneData.reply_data1,
  walletSceneData.text2,
  walletScene.reply_data2,
  data
);
CreateScene(
  createScene,
  createSceneData.text,
  createSceneData.reply_data,
  data
);
ImportScene(
  importScene,
  importSceneData.text,
  importSceneData.reply_data,
  data
);

bot.start((ctx) => {
  ctx.scene.enter("start");
});

bot.launch();

app.listen(port, () => console.log(`Listening on ${port}`));
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
