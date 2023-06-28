# Crypto Devs Whitelist and NFT Collection

This project consists of two contracts: Whitelist.sol and CryptoDevs.sol. The goal of this project is to launch an NFT collection called Crypto Devs while providing guaranteed access to early supporters through a whitelist mechanism.

## Whitelist Contract

The Whitelist contract allows users to join a whitelist, granting them exclusive privileges when minting NFTs from the Crypto Devs collection. The contract has the following features:

- The contract creator sets a maximum limit on the number of whitelisted addresses (in this case, ten users).
- Users can call the `addAddressToWhitelist` function to add their address to the whitelist.
- Only addresses that are not already whitelisted and have not exceeded the maximum limit can be added.
- The contract maintains a mapping of whitelisted addresses and keeps track of the number of addresses whitelisted.

## CryptoDevs Contract

The CryptoDevs contract represents the NFT collection and includes the minting functionality for the Crypto Devs NFTs. The contract has the following features:

- Inherits from the ERC721Enumerable contract, which provides functionality for creating unique and enumerable NFTs.
- Inherits from the Ownable contract, which ensures that only the contract owner can perform certain actions.
- Defines a fixed price for minting each NFT (0.01 ether).
- Sets a maximum limit on the number of token IDs that can be minted (20 tokens in this case).
- Requires users to send the specified amount of Ether when minting an NFT, unless they are whitelisted.
- Checks if the number of tokens minted, including reserved tokens, exceeds the maximum limit before allowing minting.
- Grants special privileges to whitelisted addresses, allowing them to mint NFTs without paying the minting fee.
- Allows the contract owner to withdraw the accumulated Ether balance from the contract.

## Getting Started

To use this project, you can deploy the Whitelist contract and pass the maximum number of whitelisted addresses as a constructor argument. Then, deploy the CryptoDevs contract, passing the address of the Whitelist contract as a constructor argument. Once deployed, users can join the whitelist and mint NFTs according to the defined rules.
