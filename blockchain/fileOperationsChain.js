const fs = require("fs");
const { BlockChain } = require("./blockchain");

module.exports = {
  read: () => {
    try {
      var read = fs.readFileSync("./a");
      read = JSON.parse(read);
      var blockchain = new BlockChain(read);
      return blockchain;
    } catch (err) {
      console.log(err);
      return new Error("Error Occured. Check Logs");
    }
  },

  addBlock: (votes) => {
    try {
      var blockchain = b.read();
      var check = blockchain.addNewBlockToChain(
        votes,
        blockchain.getTotalVotesCount()
      );

      console.log(blockchain.getTotalVotesCount());
      if (check) {
        fs.writeFileSync("./a", JSON.stringify(blockchain));
      } else {
        throw new Error("Block Not added");
      }
    } catch (err) {
      console.log(err);
      return new Error("Error Occured. Check logs");
    }
  },
};
