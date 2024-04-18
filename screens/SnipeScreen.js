import axios from "axios";
import isEthAddress from "../helpers/isEthAddress.js";

const SnipeScene = (scene, text, reply_data, data) => {
  scene.enter((ctx) => ctx.reply(text));

  scene.on("text", (ctx) => {
    const contractAddress = ctx.message.text;
    const result = isEthAddress(contractAddress);
    if (result) {
      const url = `https://api.dexscreener.io/latest/dex/tokens/${contractAddress}`;
      axios.get(url).then((res) => {
        const data = res.data;
        ctx?.deleteMessage();
        ctx.session.contractAddress = contractAddress;
        ctx.reply(
          `
        \n🔘 Token: ${data.pairs[0].baseToken.name}\n
        🔘 ${contractAddress}\n
        🔘 DEX: ${
          data.pairs[0].dexId.toUpperCase() +
          "_" +
          data.pairs[0].labels[0].toUpperCase()
        }\n
        🔘 Safe to buy: 🟢 Safe\n

        📊 Market Cap: $${data.pairs[0].fdv.toLocaleString()}\n
        ⚖️ Liquidity: ${data.pairs[0].liquidity.usd.toLocaleString()} USD\n
        📑 Price USD: ${data.pairs[0].priceUsd.toLocaleString()} USD\n\n
        `,
          { reply_markup: reply_data }
        );
      });
      // const provider = new ethers.JsonRpcProvider(process.env.INFURA_KEY)
      // const contract = new ethers.Contract(contractAddress, erc20Abi, provider)
    } else {
      ctx.reply("Please enter a valid ETH token address");
    }
  });

  scene.action("buy_0.1_eth", (ctx) => {
    ctx?.deleteMessage();
    const users = data.users || {};
    if (!users.hasOwnProperty(ctx.chat.id)) {
      users[ctx.chat.id] = {
        accounts: [],
        pending_snipes: [],
        id: ctx.chat.id,
      };
    }
    console.log(ctx.session.contractAddress);
  });
  scene.action("buy_0.2_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("settings_screen");
  });
  scene.action("buy_0.5_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("pending_screen");
  });
  scene.action("buy_1_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
  scene.action("buy_2_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
  scene.action("buy_5_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
  scene.action("buy_max_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
  scene.action("buy_x_eth", (ctx) => {
    ctx?.deleteMessage();
    ctx.scene.enter("start");
  });
};

export default SnipeScene;
