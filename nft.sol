// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TraxaNFT is ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter private _tokenIdCounter;
  uint256 public constant totalSupply = 1;
  
  constructor(string memory tokenUri) ERC721("TraxaNFT", "TXCNT") {
      mint(tokenUri);
  }
  
  function mint(string memory uri) public {
    uint256 itemId = _tokenIdCounter.current();
    require(itemId < totalSupply);

    _safeMint(msg.sender, itemId);
    _setTokenURI(itemId, uri);
    _tokenIdCounter.increment();
  }

}