const StartScene = (scene, text, replyObj, data) => {
  scene.enter((ctx) =>
    ctx.reply(text, {
      reply_markup: replyObj,
    })
  );
  scene.action("auto_snipe", (ctx) => {
    ctx?.deleteMessage();
    const users = data.users || {};
    if (!users.hasOwnProperty(ctx.chat.id)) {
      ctx.reply("Please create an wallet from settings first");
      ctx.scene.enter("start");
    } else {
      ctx.scene.enter("snipe_screen");
    }
  });
  scene.action("settings", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("settings_screen");
  });
  scene.action("pending_snipes", (ctx) => {
    ctx?.deleteMessage();
    const users = data.users || {};
    if (!users.hasOwnProperty(ctx.chat.id)) {
      ctx.reply("Please create an wallet from settings first");
      ctx.scene.enter("start");
    } else {
      ctx.scene.enter("pending_screen");
    }
  });
  scene.action("close", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
};

export default StartScene;
