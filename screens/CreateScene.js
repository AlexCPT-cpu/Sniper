import path from "path";
import { ethers } from "ethers";

const CreateScene = (scene, text, replyObj, data) => {
  scene.enter((ctx) => {
    ctx.reply(text);
  });
  scene.on("text", (ctx) => {
    ctx?.deleteMessage();
    const users = data.users || {};
    const name = ctx.message.text;
    if (!users.hasOwnProperty(ctx.chat.id)) {
      // const provider = new ethers.JsonRpcProvider(process.env.INFURA_KEY)
      const wallet = ethers.Wallet.createRandom();
      const privateKey = wallet.privateKey;
      users[ctx.chat.id] = {
        accounts: [
          {
            private_key: privateKey,
            name,
          },
        ],
        pending_snipes: [],
        id: ctx.chat.id,
      };
      const filePath = path.join(__dirname, "./constants/data.json");
      const balance = 0.22;
      const address = wallet.address;
      try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        const text = `\n✅ Default\n\n
          ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n\n
          💰 ${name} · ${balance} ETH\n
          ${address}\n`;
        const hyperlink = `<a href="https://etherscan.io/address/${address}">🌍 View on Etherscan</a>`;
        const message = `${text}\n${hyperlink}`;
        ctx.replyWithHTML(message);
      } catch (error) {
        console.error("Error writing data to file:", error);
      }
    }
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
