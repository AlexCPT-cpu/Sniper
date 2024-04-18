const SettingsScene = (scene, text, replyObj, data) => {
  scene.enter((ctx) => {
    ctx.reply(text, {
      reply_markup: replyObj,
    });
  });
  scene.action("chain_settings", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
  scene.action("wallet_settings", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("wallet_scene");
  });

  scene.action("wallet_back", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
};

export default SettingsScene;
