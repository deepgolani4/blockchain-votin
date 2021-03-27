// "use strict";
var blake2 = require("blake2");

class Vote {
  constructor(from, to, timestamp) {
    this.from = from;
    this.to = to;
    this.timestamp = timestamp;
  }

  get getVote() {
    return JSON.stringify(this.getSerializeVote());
  }

  getSerializeVote() {
    return {
      from: this.from,
      to: this.to,
      timestamp: this.timestamp,
    };
  }
}

class Block {
  constructor(timestamp, votes, previousHash, count) {
    this.timestamp = timestamp;
    this.votes = votes;
    this.previousHash = previousHash;
    this.count = count;
    this.totalVotesThisBlock = votes.length;
  }

  #getData() {
    return {
      timestamp: this.timestamp,
      votes: this.votes,
      previousHash: this.previousHash,
      count: this.count,
    };
  }

  generateCounts() {
    this.votes.forEach((vote) => {
      vote.to in this.count
        ? (this.count[vote.to] = this.count[vote.to] + 1)
        : (this.count[vote.to] = 1);
    });
  }

  getCounts() {
    return this.count;
  }

  generateHash() {
    var h = blake2.createHash("blake2b");
    h.update(Buffer.from(JSON.stringify(this.#getData())));
    this.currentHash = h.digest("hex");
  }

  #checkGenerate() {
    var h = blake2.createHash("blake2b");
    h.update(Buffer.from(JSON.stringify(this.#getData())));
    var a = h.digest("hex");
    return a;
  }

  getHash() {
    return this.currentHash;
  }

  getPreviousHash() {
    return this.previousHash;
  }

  isValidBlock() {
    return this.currentHash == this.#checkGenerate();
  }
}

class BlockChain {
  constructor() {
    this.genesis = new Block(
      Date.now(),
      [new Vote("genesis", "Genesis", Date.now())],
      "Genesis",
      {}
    );
    this.genesis.generateHash();
    this.blocks = [this.genesis];
  }

  proofOfWork() {
    for (let i = 1; i < this.blocks.length; i++) {
      // if (!this.blocks[i].isValidBlock()) {
      //   console.log("F1", this.blocks[i]);
      //   return false;
      // }
      if (this.blocks[i].getPreviousHash() != this.blocks[i - 1].getHash()) {
        console.log("F2");
        return false;
      }
    }
    return true;
  }

  getLatestHash() {
    return this.blocks[this.blocks.length - 1].getHash();
  }

  generateNewBlock(votes, previousHash, count) {
    var block = new Block(Date.now(), votes, previousHash, count);
    block.generateCounts();
    block.generateHash();
    return block;
  }

  addNewBlockToChain(votes, count) {
    this.blocks.push(this.generateNewBlock(votes, this.getLatestHash(), count));
    // return true;
    if (this.proofOfWork()) {
      console.log("Success");
      return true;
    } else {
      console.log("F");
      this.blocks = this.blocks.slice(0, this.blocks.length - 1);
      return false;
    }
  }

  getTotalVotesCount() {
    return this.blocks[this.blocks.length - 1].getCounts();
  }
}

const a = new BlockChain();

a.addNewBlockToChain(
  [new Vote("b", "a", Date.now()), new Vote("d", "c", Date.now())],
  a.getTotalVotesCount()
);

a.addNewBlockToChain([new Vote("g", "a", Date.now())], a.getTotalVotesCount());
console.log(a, a.getTotalVotesCount());

// ============== BLOCK VERIFY CHECK ==========
