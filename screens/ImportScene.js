import { ethers } from "ethers";

const ImportScene = (scene, text, replyObj, data) => {
  scene.enter((ctx) => {
    ctx.reply(text);
  });
  scene.on("text", (ctx) => {
    ctx?.deleteMessage();
    console.log(ctx);
    // ctx.scene.enter("import_scene");
  });
};

export default ImportScene;
// const users = data.users || {};
// if (!users.hasOwnProperty(ctx.chat.id)) {
//   users[ctx.chat.id] = {
//     accounts: [],
//     pending_snipes: [],
//     id: ctx.chat.id,
//   };
// }
