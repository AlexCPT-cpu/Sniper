const startSceneData = {
  text: `⚙️ Sniper Bot \n \n Paste the token address below to quick start with preset defaults`,
  reply_data: {
    inline_keyboard: [
      [{ text: "🤖 Auto Snipe", callback_data: "auto_snipe" }],
      // [{ text: "❇️ Manual Snipe", callback_data: "manual_snipe" }],
      [{ text: "⚙️ Settings", callback_data: "settings" }],
      [{ text: "🔫 Pending Snipes", callback_data: "pending_snipes" }],
      [{ text: "❌ Close", callback_data: "close" }],
    ],
  },
};
const snipeSceneData = {
  text: "🔘 Paste the token address below",
  reply_data: {
    inline_keyboard: [
      [
        { text: "Buy 0.1 ETH", callback_data: "buy_0.1_eth" },
        { text: "Buy 0.2 ETH", callback_data: "buy_0.2_eth" },
      ],
      [
        { text: "Buy 0.5 ETH", callback_data: "buy_0.5_eth" },
        { text: "Buy 1 ETH", callback_data: "buy_1_eth" },
      ],
      [
        { text: "Buy 2 ETH", callback_data: "buy_2_eth" },
        { text: "Buy 5 ETH", callback_data: "buy_5_eth" },
      ],
      [
        { text: "Buy Max ETH", callback_data: "buy_max_eth" },
        { text: "Buy X ETH", callback_data: "buy_x_eth" },
      ],
      [
        { text: "🔙 Back", callback_data: "snipe_back" },
        { text: "❌ Cancel", callback_data: "snipe_cancel" },
      ],
    ],
  },
};

const settingsSceneData = {
  text: `Welcome to Settings. Please choose category to change your settings.
  `,
  reply_data: {
    inline_keyboard: [
      [
        { text: "⛓️ Chain Settings", callback_data: "chain_settings" },
        { text: "💰 Wallet Settings", callback_data: "wallet_settings" },
      ],
      [{ text: "🔙 Back", callback_data: "wallet_back" }],
    ],
  },
};

const walletSceneData = {
  text1: `You have no existing wallets please create or import  one ...`,
  reply_data1: {
    inline_keyboard: [
      [
        { text: "💳 Create Wallet", callback_data: "create_wallet" },
        { text: "📦 Import Wallet", callback_data: "import_wallet" },
      ],
      [{ text: "💼 Manage Wallet", callback_data: "manage_wallet" }],
    ],
  },
  text2: ``,
  reply_data2: {},
};

const createSceneData = {
  text: `Enter wallet name`,
  reply_data: {},
};
const importSceneData = {
  text: `Enter your private key`,
  reply_data: {},
};

export {
  startSceneData,
  snipeSceneData,
  settingsSceneData,
  walletSceneData,
  createSceneData,
  importSceneData,
};
