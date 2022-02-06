// Data set up
let abi = [{"inputs":[{"internalType":"string","name":"tokenUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let bytecode = '0x60806040523480156200001157600080fd5b5060405162003f0338038062003f03833981810160405281019062000037919062000919565b6040518060400160405280600881526020017f54726178614e46540000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f5458434e540000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620007a2565b508060019080519060200190620000d4929190620007a2565b505050620000f7620000eb6200010f60201b60201c565b6200011760201b60201c565b6200010881620001dd60201b60201c565b5062000ef6565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000620001f660086200024560201b62000d581760201c565b9050600181106200020657600080fd5b6200021833826200025360201b60201c565b6200022a81836200027960201b60201c565b620002416008620002fa60201b62000d661760201c565b5050565b600081600001549050919050565b620002758282604051806020016040528060008152506200031060201b60201c565b5050565b6200028a826200037e60201b60201c565b620002cc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002c39062000b01565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190620002f5929190620007a2565b505050565b6001816000016000828254019250508190555050565b620003228383620003ea60201b60201c565b620003376000848484620005d060201b60201c565b62000379576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003709062000abd565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200045d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004549062000b23565b60405180910390fd5b6200046e816200037e60201b60201c565b15620004b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004a89062000adf565b60405180910390fd5b620004c5600083836200078a60201b60201c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000517919062000bd1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000620005fe8473ffffffffffffffffffffffffffffffffffffffff166200078f60201b62000d7c1760201c565b156200077d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02620006306200010f60201b60201c565b8786866040518563ffffffff1660e01b815260040162000654949392919062000a69565b602060405180830381600087803b1580156200066f57600080fd5b505af1925050508015620006a357506040513d601f19601f82011682018060405250810190620006a09190620008e7565b60015b6200072c573d8060008114620006d6576040519150601f19603f3d011682016040523d82523d6000602084013e620006db565b606091505b5060008151141562000724576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200071b9062000abd565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505062000782565b600190505b949350505050565b505050565b600080823b905060008111915050919050565b828054620007b09062000cce565b90600052602060002090601f016020900481019282620007d4576000855562000820565b82601f10620007ef57805160ff191683800117855562000820565b8280016001018555821562000820579182015b828111156200081f57825182559160200191906001019062000802565b5b5090506200082f919062000833565b5090565b5b808211156200084e57600081600090555060010162000834565b5090565b600062000869620008638462000b6e565b62000b45565b90508281526020810184848401111562000888576200088762000dcc565b5b6200089584828562000c98565b509392505050565b600081519050620008ae8162000edc565b92915050565b600082601f830112620008cc57620008cb62000dc7565b5b8151620008de84826020860162000852565b91505092915050565b6000602082840312156200090057620008ff62000dd6565b5b600062000910848285016200089d565b91505092915050565b60006020828403121562000932576200093162000dd6565b5b600082015167ffffffffffffffff81111562000953576200095262000dd1565b5b6200096184828501620008b4565b91505092915050565b620009758162000c2e565b82525050565b6000620009888262000ba4565b62000994818562000baf565b9350620009a681856020860162000c98565b620009b18162000ddb565b840191505092915050565b6000620009cb60328362000bc0565b9150620009d88262000dec565b604082019050919050565b6000620009f2601c8362000bc0565b9150620009ff8262000e3b565b602082019050919050565b600062000a19602e8362000bc0565b915062000a268262000e64565b604082019050919050565b600062000a4060208362000bc0565b915062000a4d8262000eb3565b602082019050919050565b62000a638162000c8e565b82525050565b600060808201905062000a8060008301876200096a565b62000a8f60208301866200096a565b62000a9e604083018562000a58565b818103606083015262000ab281846200097b565b905095945050505050565b6000602082019050818103600083015262000ad881620009bc565b9050919050565b6000602082019050818103600083015262000afa81620009e3565b9050919050565b6000602082019050818103600083015262000b1c8162000a0a565b9050919050565b6000602082019050818103600083015262000b3e8162000a31565b9050919050565b600062000b5162000b64565b905062000b5f828262000d04565b919050565b6000604051905090565b600067ffffffffffffffff82111562000b8c5762000b8b62000d98565b5b62000b978262000ddb565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000bde8262000c8e565b915062000beb8362000c8e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000c235762000c2262000d3a565b5b828201905092915050565b600062000c3b8262000c6e565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101562000cb857808201518184015260208101905062000c9b565b8381111562000cc8576000848401525b50505050565b6000600282049050600182168062000ce757607f821691505b6020821081141562000cfe5762000cfd62000d69565b5b50919050565b62000d0f8262000ddb565b810181811067ffffffffffffffff8211171562000d315762000d3062000d98565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b62000ee78162000c42565b811462000ef357600080fd5b50565b612ffd8062000f066000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102cd578063c87b56dd146102e9578063d85d3d2714610319578063e985e9c514610335578063f2fde38b1461036557610116565b8063715018a61461026b5780638da5cb5b1461027557806395d89b4114610293578063a22cb465146102b157610116565b806318160ddd116100e957806318160ddd146101b557806323b872dd146101d357806342842e0e146101ef5780636352211e1461020b57806370a082311461023b57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611f14565b610381565b60405161014291906123b5565b60405180910390f35b610153610463565b60405161016091906123d0565b60405180910390f35b610183600480360381019061017e9190611fb7565b6104f5565b604051610190919061234e565b60405180910390f35b6101b360048036038101906101ae9190611ed4565b61057a565b005b6101bd610692565b6040516101ca9190612632565b60405180910390f35b6101ed60048036038101906101e89190611dbe565b610697565b005b61020960048036038101906102049190611dbe565b6106f7565b005b61022560048036038101906102209190611fb7565b610717565b604051610232919061234e565b60405180910390f35b61025560048036038101906102509190611d51565b6107c9565b6040516102629190612632565b60405180910390f35b610273610881565b005b61027d610909565b60405161028a919061234e565b60405180910390f35b61029b610933565b6040516102a891906123d0565b60405180910390f35b6102cb60048036038101906102c69190611e94565b6109c5565b005b6102e760048036038101906102e29190611e11565b6109db565b005b61030360048036038101906102fe9190611fb7565b610a3d565b60405161031091906123d0565b60405180910390f35b610333600480360381019061032e9190611f6e565b610b8f565b005b61034f600480360381019061034a9190611d7e565b610bcc565b60405161035c91906123b5565b60405180910390f35b61037f600480360381019061037a9190611d51565b610c60565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061044c57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061045c575061045b82610d8f565b5b9050919050565b60606000805461047290612888565b80601f016020809104026020016040519081016040528092919081815260200182805461049e90612888565b80156104eb5780601f106104c0576101008083540402835291602001916104eb565b820191906000526020600020905b8154815290600101906020018083116104ce57829003601f168201915b5050505050905090565b600061050082610df9565b61053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690612572565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058582610717565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ed906125f2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610615610e65565b73ffffffffffffffffffffffffffffffffffffffff16148061064457506106438161063e610e65565b610bcc565b5b610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a906124b2565b60405180910390fd5b61068d8383610e6d565b505050565b600181565b6106a86106a2610e65565b82610f26565b6106e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106de90612612565b60405180910390fd5b6106f2838383611004565b505050565b610712838383604051806020016040528060008152506109db565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b7906124f2565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561083a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610831906124d2565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610889610e65565b73ffffffffffffffffffffffffffffffffffffffff166108a7610909565b73ffffffffffffffffffffffffffffffffffffffff16146108fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f490612592565b60405180910390fd5b6109076000611260565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461094290612888565b80601f016020809104026020016040519081016040528092919081815260200182805461096e90612888565b80156109bb5780601f10610990576101008083540402835291602001916109bb565b820191906000526020600020905b81548152906001019060200180831161099e57829003601f168201915b5050505050905090565b6109d76109d0610e65565b8383611326565b5050565b6109ec6109e6610e65565b83610f26565b610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2290612612565b60405180910390fd5b610a3784848484611493565b50505050565b6060610a4882610df9565b610a87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7e90612552565b60405180910390fd5b6000600660008481526020019081526020016000208054610aa790612888565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad390612888565b8015610b205780601f10610af557610100808354040283529160200191610b20565b820191906000526020600020905b815481529060010190602001808311610b0357829003601f168201915b505050505090506000610b316114ef565b9050600081511415610b47578192505050610b8a565b600082511115610b7c578082604051602001610b6492919061232a565b60405160208183030381529060405292505050610b8a565b610b8584611506565b925050505b919050565b6000610b9b6008610d58565b905060018110610baa57600080fd5b610bb433826115ad565b610bbe81836115cb565b610bc86008610d66565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c68610e65565b73ffffffffffffffffffffffffffffffffffffffff16610c86610909565b73ffffffffffffffffffffffffffffffffffffffff1614610cdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd390612592565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4390612412565b60405180910390fd5b610d5581611260565b50565b600081600001549050919050565b6001816000016000828254019250508190555050565b600080823b905060008111915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ee083610717565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f3182610df9565b610f70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6790612492565b60405180910390fd5b6000610f7b83610717565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fea57508373ffffffffffffffffffffffffffffffffffffffff16610fd2846104f5565b73ffffffffffffffffffffffffffffffffffffffff16145b80610ffb5750610ffa8185610bcc565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661102482610717565b73ffffffffffffffffffffffffffffffffffffffff161461107a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611071906125b2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e190612452565b60405180910390fd5b6110f583838361163f565b611100600082610e6d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611150919061279e565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111a79190612717565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138c90612472565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161148691906123b5565b60405180910390a3505050565b61149e848484611004565b6114aa84848484611644565b6114e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e0906123f2565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061151182610df9565b611550576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611547906125d2565b60405180910390fd5b600061155a6114ef565b9050600081511161157a57604051806020016040528060008152506115a5565b80611584846117db565b60405160200161159592919061232a565b6040516020818303038152906040525b915050919050565b6115c782826040518060200160405280600081525061193c565b5050565b6115d482610df9565b611613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160a90612512565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061163a929190611b65565b505050565b505050565b60006116658473ffffffffffffffffffffffffffffffffffffffff16610d7c565b156117ce578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261168e610e65565b8786866040518563ffffffff1660e01b81526004016116b09493929190612369565b602060405180830381600087803b1580156116ca57600080fd5b505af19250505080156116fb57506040513d601f19601f820116820180604052508101906116f89190611f41565b60015b61177e573d806000811461172b576040519150601f19603f3d011682016040523d82523d6000602084013e611730565b606091505b50600081511415611776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176d906123f2565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117d3565b600190505b949350505050565b60606000821415611823576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611937565b600082905060005b6000821461185557808061183e906128eb565b915050600a8261184e919061276d565b915061182b565b60008167ffffffffffffffff81111561187157611870612a21565b5b6040519080825280601f01601f1916602001820160405280156118a35781602001600182028036833780820191505090505b5090505b60008514611930576001826118bc919061279e565b9150600a856118cb9190612934565b60306118d79190612717565b60f81b8183815181106118ed576118ec6129f2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611929919061276d565b94506118a7565b8093505050505b919050565b6119468383611997565b6119536000848484611644565b611992576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611989906123f2565b60405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119fe90612532565b60405180910390fd5b611a1081610df9565b15611a50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4790612432565b60405180910390fd5b611a5c6000838361163f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611aac9190612717565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b828054611b7190612888565b90600052602060002090601f016020900481019282611b935760008555611bda565b82601f10611bac57805160ff1916838001178555611bda565b82800160010185558215611bda579182015b82811115611bd9578251825591602001919060010190611bbe565b5b509050611be79190611beb565b5090565b5b80821115611c04576000816000905550600101611bec565b5090565b6000611c1b611c1684612672565b61264d565b905082815260208101848484011115611c3757611c36612a55565b5b611c42848285612846565b509392505050565b6000611c5d611c58846126a3565b61264d565b905082815260208101848484011115611c7957611c78612a55565b5b611c84848285612846565b509392505050565b600081359050611c9b81612f6b565b92915050565b600081359050611cb081612f82565b92915050565b600081359050611cc581612f99565b92915050565b600081519050611cda81612f99565b92915050565b600082601f830112611cf557611cf4612a50565b5b8135611d05848260208601611c08565b91505092915050565b600082601f830112611d2357611d22612a50565b5b8135611d33848260208601611c4a565b91505092915050565b600081359050611d4b81612fb0565b92915050565b600060208284031215611d6757611d66612a5f565b5b6000611d7584828501611c8c565b91505092915050565b60008060408385031215611d9557611d94612a5f565b5b6000611da385828601611c8c565b9250506020611db485828601611c8c565b9150509250929050565b600080600060608486031215611dd757611dd6612a5f565b5b6000611de586828701611c8c565b9350506020611df686828701611c8c565b9250506040611e0786828701611d3c565b9150509250925092565b60008060008060808587031215611e2b57611e2a612a5f565b5b6000611e3987828801611c8c565b9450506020611e4a87828801611c8c565b9350506040611e5b87828801611d3c565b925050606085013567ffffffffffffffff811115611e7c57611e7b612a5a565b5b611e8887828801611ce0565b91505092959194509250565b60008060408385031215611eab57611eaa612a5f565b5b6000611eb985828601611c8c565b9250506020611eca85828601611ca1565b9150509250929050565b60008060408385031215611eeb57611eea612a5f565b5b6000611ef985828601611c8c565b9250506020611f0a85828601611d3c565b9150509250929050565b600060208284031215611f2a57611f29612a5f565b5b6000611f3884828501611cb6565b91505092915050565b600060208284031215611f5757611f56612a5f565b5b6000611f6584828501611ccb565b91505092915050565b600060208284031215611f8457611f83612a5f565b5b600082013567ffffffffffffffff811115611fa257611fa1612a5a565b5b611fae84828501611d0e565b91505092915050565b600060208284031215611fcd57611fcc612a5f565b5b6000611fdb84828501611d3c565b91505092915050565b611fed816127d2565b82525050565b611ffc816127e4565b82525050565b600061200d826126d4565b61201781856126ea565b9350612027818560208601612855565b61203081612a64565b840191505092915050565b6000612046826126df565b61205081856126fb565b9350612060818560208601612855565b61206981612a64565b840191505092915050565b600061207f826126df565b612089818561270c565b9350612099818560208601612855565b80840191505092915050565b60006120b26032836126fb565b91506120bd82612a75565b604082019050919050565b60006120d56026836126fb565b91506120e082612ac4565b604082019050919050565b60006120f8601c836126fb565b915061210382612b13565b602082019050919050565b600061211b6024836126fb565b915061212682612b3c565b604082019050919050565b600061213e6019836126fb565b915061214982612b8b565b602082019050919050565b6000612161602c836126fb565b915061216c82612bb4565b604082019050919050565b60006121846038836126fb565b915061218f82612c03565b604082019050919050565b60006121a7602a836126fb565b91506121b282612c52565b604082019050919050565b60006121ca6029836126fb565b91506121d582612ca1565b604082019050919050565b60006121ed602e836126fb565b91506121f882612cf0565b604082019050919050565b60006122106020836126fb565b915061221b82612d3f565b602082019050919050565b60006122336031836126fb565b915061223e82612d68565b604082019050919050565b6000612256602c836126fb565b915061226182612db7565b604082019050919050565b60006122796020836126fb565b915061228482612e06565b602082019050919050565b600061229c6029836126fb565b91506122a782612e2f565b604082019050919050565b60006122bf602f836126fb565b91506122ca82612e7e565b604082019050919050565b60006122e26021836126fb565b91506122ed82612ecd565b604082019050919050565b60006123056031836126fb565b915061231082612f1c565b604082019050919050565b6123248161283c565b82525050565b60006123368285612074565b91506123428284612074565b91508190509392505050565b60006020820190506123636000830184611fe4565b92915050565b600060808201905061237e6000830187611fe4565b61238b6020830186611fe4565b612398604083018561231b565b81810360608301526123aa8184612002565b905095945050505050565b60006020820190506123ca6000830184611ff3565b92915050565b600060208201905081810360008301526123ea818461203b565b905092915050565b6000602082019050818103600083015261240b816120a5565b9050919050565b6000602082019050818103600083015261242b816120c8565b9050919050565b6000602082019050818103600083015261244b816120eb565b9050919050565b6000602082019050818103600083015261246b8161210e565b9050919050565b6000602082019050818103600083015261248b81612131565b9050919050565b600060208201905081810360008301526124ab81612154565b9050919050565b600060208201905081810360008301526124cb81612177565b9050919050565b600060208201905081810360008301526124eb8161219a565b9050919050565b6000602082019050818103600083015261250b816121bd565b9050919050565b6000602082019050818103600083015261252b816121e0565b9050919050565b6000602082019050818103600083015261254b81612203565b9050919050565b6000602082019050818103600083015261256b81612226565b9050919050565b6000602082019050818103600083015261258b81612249565b9050919050565b600060208201905081810360008301526125ab8161226c565b9050919050565b600060208201905081810360008301526125cb8161228f565b9050919050565b600060208201905081810360008301526125eb816122b2565b9050919050565b6000602082019050818103600083015261260b816122d5565b9050919050565b6000602082019050818103600083015261262b816122f8565b9050919050565b6000602082019050612647600083018461231b565b92915050565b6000612657612668565b905061266382826128ba565b919050565b6000604051905090565b600067ffffffffffffffff82111561268d5761268c612a21565b5b61269682612a64565b9050602081019050919050565b600067ffffffffffffffff8211156126be576126bd612a21565b5b6126c782612a64565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127228261283c565b915061272d8361283c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561276257612761612965565b5b828201905092915050565b60006127788261283c565b91506127838361283c565b92508261279357612792612994565b5b828204905092915050565b60006127a98261283c565b91506127b48361283c565b9250828210156127c7576127c6612965565b5b828203905092915050565b60006127dd8261281c565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612873578082015181840152602081019050612858565b83811115612882576000848401525b50505050565b600060028204905060018216806128a057607f821691505b602082108114156128b4576128b36129c3565b5b50919050565b6128c382612a64565b810181811067ffffffffffffffff821117156128e2576128e1612a21565b5b80604052505050565b60006128f68261283c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561292957612928612965565b5b600182019050919050565b600061293f8261283c565b915061294a8361283c565b92508261295a57612959612994565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612f74816127d2565b8114612f7f57600080fd5b50565b612f8b816127e4565b8114612f9657600080fd5b50565b612fa2816127f0565b8114612fad57600080fd5b50565b612fb98161283c565b8114612fc457600080fd5b5056fea26469706673582212205e08f8210c3f64c7d35e224dc4b8e2616c42c75493d3d10aae106d392800858f64736f6c63430008070033'

//Contract object and account info
const web3 = new Web3(window.ethereum);
let deploy_contract = new web3.eth.Contract(abi);

export async function deploy(account, tokenUri, confirmation, error) {
    let payload = {
        data: bytecode,
        arguments: [tokenUri]
    }

    let parameter = {
        from: account,
        gasPrice: 20e9,
        gas: 5e6,
    }

    // Function Call
    deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
        if(err) error(err);
        confirmation(transactionHash);
    }).on('confirmation', () => {}).then((newContractInstance) => {
        confirmation(newContractInstance.options.address);
    })
}