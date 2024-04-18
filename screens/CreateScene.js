import { ethers } from "ethers";

const CreateScene = (scene, text, replyObj, data) => {
  scene.enter((ctx) => {
    ctx.reply(text);
  });
  scene.on("text", (ctx) => {
    ctx?.deleteMessage();
  });
};

export default CreateScene;
// const users = data.users || {};
// if (!users.hasOwnProperty(ctx.chat.id)) {
//   users[ctx.chat.id] = {
//     accounts: [],
//     pending_snipes: [],
//     id: ctx.chat.id,
//   };
// }
