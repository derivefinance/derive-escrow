# derive-escrow
The smart contract in this repository are used to escrow the Derive DAO Token (DRV).
There are two types of escrow contracts in this repository.


### DeriveEscrow.sol
This contract is used to escrow DRV destined to private investors and public token sale.

### RewardEscrow.sol
This contract is used to escrow DRV obtained from the inflationary supply.


## Instructions
To install dependencies: ```npm install```

### Building contracts
```npm run build```

### Deploying contracts

Create an environment variable with your desider private key, e.g.:

```export PRIVATE_KEY_TESTNET=0x0000000000000000000000000000000000000000000000000000000000000000``` 

To deploy on BSC testnet: ```npm run deploy-testnet```

See package.json and truffle-config.js for more environments.