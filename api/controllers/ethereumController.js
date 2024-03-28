// controllers/ethereumController.js
import Web3 from "web3";

// Initialize Web3 with Infura node
const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/5a9a800083b743839b307fa3f395554d"
);
const web3 = new Web3(provider);

export const getEthBalance = async (req, res) => {
  try {
    const balanceWei = await web3.eth.getBalance(req.params.address);
    const balanceEth = web3.utils.fromWei(balanceWei, "ether");
    res.json({ balance: balanceEth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching balance" });
  }
};
