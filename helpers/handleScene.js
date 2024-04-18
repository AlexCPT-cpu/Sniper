const handleScene = (scene, text, replyObj) => {
  scene.enter((ctx) =>
    ctx.reply(text, {
      reply_markup: replyObj,
    })
  );
  scene.action("auto_snipe", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("snipe_screen");
  });
  scene.action("settings", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("settings_screen");
  });
  scene.action("pending_snipes", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("pending_screen");
  });
  scene.action("close", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
};

export default handleScene;
