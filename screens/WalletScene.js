import { ethers } from "ethers";

const WalletScene = (scene, text1, replyObj1, text2, replyObj2, data) => {
  scene.enter((ctx) => {
    const users = data.users || {};
    if (
      !users.hasOwnProperty(ctx.chat.id) ||
      users[ctx.chat.id].accounts.length == 0
    ) {
      ctx.reply(text1, {
        reply_markup: replyObj1,
      });
    } else {
    }
  });
  scene.action("create_wallet", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("import_scene");
  });
  scene.action("import_wallet", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("import_scene");
  });

  scene.action("go_back", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("settings_screen");
  });
};

export default WalletScene;
