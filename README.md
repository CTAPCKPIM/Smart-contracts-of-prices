# 09/13/2022 - Smart contracts for monitoring the price of tokens.
---
**Smart contracts of the prices** - **preserved** prices of tokens, **setting** with the help of **script** _PyScript_.

>[**Link on PyScript**](https://github.com/CTAPCKPIM/PyScript.git)

___Tokens___:
>_(Ethereum: goerli)_
> + CRV - [0x9BA0D124e47DB74c40440Dc297FB4d68e8fF8023](https://goerli.etherscan.io/address/0x9BA0D124e47DB74c40440Dc297FB4d68e8fF8023#code); 
> + WETH - [0x2845c79c4879971c6Ac4810b591cbd36f973EAC6](https://goerli.etherscan.io/address/0x2845c79c4879971c6Ac4810b591cbd36f973EAC6#code);
> + FARM - [0x1e9D1602b3D16b1Ac56703cafdC093B6643621D9](https://goerli.etherscan.io/address/0x1e9D1602b3D16b1Ac56703cafdC093B6643621D9#code);

>_(Fantom: testnet)_
> + SPIRIT - [0x923b10057dc8C15A7b7c55E84E37a3649e160b77](https://testnet.ftmscan.com/address/0x923b10057dc8C15A7b7c55E84E37a3649e160b77#code);
> + WFTM - [0xc40cE45B9734Ff0891AeA10Bb382D4D2620A2F2F](https://testnet.ftmscan.com/address/0xc40ce45b9734ff0891aea10bb382d4d2620a2f2f#code);
> + YFI - [0xE50dcaDDF5D60AB06679881b5dce724B2995C1a0](https://testnet.ftmscan.com/address/0xE50dcaDDF5D60AB06679881b5dce724B2995C1a0#code);

>_(Polygon: mumbai)_
> + QUICK - [0x6C7f693fe02b04c9302E16721Cd9680432c0e5A5](https://mumbai.polygonscan.com/address/0x6C7f693fe02b04c9302E16721Cd9680432c0e5A5#code);
> + ORBS - [0x465fBD82c206986B9A1E5eD8943c56Ba898b6501](https://mumbai.polygonscan.com/address/0x465fBD82c206986B9A1E5eD8943c56Ba898b6501#code);
> + WMATIC - [0xdeae7b833d107915dC9F051E81c06E9c12779aC1](https://mumbai.polygonscan.com/address/0xdeae7b833d107915dC9F051E81c06E9c12779aC1#code);

>_(AVAX: Avalanche Fuji)_
> + WAVAX - [0x3548117307121f582270Aae03AC334B3E26756c3](https://testnet.snowtrace.io/address/0x3548117307121f582270Aae03AC334B3E26756c3#code);
> + SPELL - [0x66aEe73703011bcCD46a66E2F994dCA13925c539](https://testnet.snowtrace.io/address/0x66aEe73703011bcCD46a66E2F994dCA13925c539#code);
> + PTP - [0x789DebCE62D5F3F38Aa973135b96BaE4b3Cf8a80](https://testnet.snowtrace.io/address/0x789DebCE62D5F3F38Aa973135b96BaE4b3Cf8a80#code);

>_(BSC: testnet)_
> + WBNB - [0x3E5B7EbA31224Dfc573d20081f30395aF295a43b](https://testnet.bscscan.com/address/0x3E5B7EbA31224Dfc573d20081f30395aF295a43b#code);
> + CAKE - [0x6187746e4FC586002e0D3134f944505C34FbD4AE](https://testnet.bscscan.com/address/0x6187746e4FC586002e0D3134f944505C34FbD4AE#code); 
> + STG - [0xAC125837E0885C218E1012177beFdC257f01b2d2](https://testnet.bscscan.com/address/0xAC125837E0885C218E1012177beFdC257f01b2d2#code);

---
## Hardhat Project

In this project using **"Yarn"**.

> **yarn init -y** - for install the _Yarn_;
> **yarn install** - installs all _dependencies_;
> **yarn build** - for _compile_ contracts;
> **yarn prettier** - for code _formatting_;
> **yarn test**  - for _testing_ contracts;

> **yarn hardhat run scripts/script.js --network 'name'** - for _deploying_ smart contracts in _networks_;
> + **'script.js'** - _deploy.js/ deployAVAX.js/ deployBSC.js/ deployFTM.js/ deployMUMBAI.js_;
> + **'name'** - _name of the network_;

>  **npx hardhat verify (1) "(2)" "(2)" --network 'name'**
> + **(1)** - _address of the contract_; 
> + **"(2)"** - _constructor parameters_;
> + **'name'** - _name of the network_;

> **goerli/ ftmTestnet/ polygonMumbai/ avalancheFujiTestnet/ bscTestnet** - _names_ of networks;



