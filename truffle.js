module.exports = {
  networks: {
    ropsten: {
      network_id: 3,        // Official Ethereum test network
      host: "localhost", // Random IP for example purposes (do not use)
      port: 8545
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
