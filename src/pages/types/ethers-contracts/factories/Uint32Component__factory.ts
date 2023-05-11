/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  Uint32Component,
  Uint32ComponentInterface,
} from "../Uint32Component";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BareComponent__NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableWritable__NotWriter",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "authorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "value",
        type: "uint32",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSchema",
    outputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "enum LibTypes.SchemaValue[]",
        name: "values",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_world",
        type: "address",
      },
    ],
    name: "registerWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "value",
        type: "uint32",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "unauthorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "writeAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f6638038062002f66833981016040819052620000349162000243565b81818181620000433362000108565b60028190556001600160a01b038216156200006357620000638262000171565b5050604051620000739062000227565b604051809103906000f08015801562000090573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000bf9062000235565b604051809103906000f080158015620000dc573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b0392909216919091179055506200027f92505050565b60008051602062002f4683398151915280546040516001600160a01b038481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b60008051602062002f46833981519152546001600160a01b03163314620001ab57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200020b57600080fd5b505af115801562000220573d6000803e3d6000fd5b5050505050565b6108088062001eef83390190565b61084f80620026f783390190565b600080604083850312156200025757600080fd5b82516001600160a01b03811681146200026f57600080fd5b6020939093015192949293505050565b611c60806200028f6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80638b282947116100cd578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102ef578063d923c3c414610302578063f2fde38b1461031557600080fd5b8063b8bc073d146102bc578063bf4fe57e146102dc57600080fd5b80639d2c76b4116100b25780639d2c76b41461027f578063af640d0f14610292578063b361be46146102a957600080fd5b80638b282947146102645780638da5cb5b1461027757600080fd5b80634cc82215116101245780636b122fe0116101095780636b122fe01461021857806375c0669c1461022e578063861eb9051461024157600080fd5b80634cc82215146101f05780634fef6a381461020557600080fd5b80630ff4c9161461015657806330b67baa1461018357806331b933b9146101c8578063447e2bd2146101dd575b600080fd5b610169610164366004611426565b610328565b60405163ffffffff90911681526020015b60405180910390f35b6000546101a39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161017a565b6101d061034e565b60405161017a919061143f565b6101d06101eb366004611495565b610409565b6102036101fe366004611426565b61043b565b005b6102036102133660046114b2565b610486565b610220610564565b60405161017a92919061157b565b61020361023c3660046114b2565b610650565b61025461024f3660046114b2565b610706565b604051901515815260200161017a565b610203610272366004611777565b610790565b6101a36107dd565b61020361028d3660046114b2565b61081d565b61029b60025481565b60405190815260200161017a565b6101d06102b73660046117be565b610946565b6102cf6102ca366004611426565b610a03565b60405161017a91906117fb565b6102036102ea3660046114b2565b610aa5565b6102546102fd366004611426565b610b80565b61020361031036600461180e565b610c14565b6102036103233660046114b2565b610c3f565b60008061033483610a03565b806020019051810190610347919061183e565b9392505050565b600354604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa1580156103be573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610404919081019061185b565b905090565b6040805163ffffffff831660208201526060916104359101604051602081830303815290604052610946565b92915050565b61044433610706565b61047a576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048381610cb8565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104f6576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b606081526020019060019003908161057e575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c7565000000000000000000000000000000000000000000000000000000815250826000815181106105fd576105fd611901565b6020026020010181905250600a8160008151811061061d5761061d611901565b602002602001019060218111156106365761063661154c565b908160218111156106495761064961154c565b9052509091565b61065933610706565b61068f576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff1680610435575061075c6107dd565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161492915050565b61079933610706565b6107cf576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d98282610f77565b5050565b60006104047f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461088d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b15801561092b57600080fd5b505af115801561093f573d6000803e3d6000fd5b5050505050565b60048054825160208401206040517f796c5e940000000000000000000000000000000000000000000000000000000081529283015260609173ffffffffffffffffffffffffffffffffffffffff9091169063796c5e9490602401600060405180830381865afa1580156109bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610435919081019061185b565b6000818152600160205260409020805460609190610a2090611930565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4c90611930565b8015610a995780601f10610a6e57610100808354040283529160200191610a99565b820191906000526020600020905b815481529060010190602001808311610a7c57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b15576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6003546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610bf0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104359190611983565b6040805163ffffffff831660208201526107d991849101604051602081830303815290604052610790565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610caf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104838161120e565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff909216916385edea1391610cf5916119a5565b60405190819003812060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401602060405180830381865afa158015610d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d709190611a39565b600003610d7a5750565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a91610db7916119a5565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b158015610e1257600080fd5b505af1158015610e26573d6000803e3d6000fd5b50506003546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b158015610e9657600080fd5b505af1158015610eaa573d6000803e3d6000fd5b50505050610eb781611217565b60005b6005548110156107d95760058181548110610ed757610ed7611901565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b158015610f4c57600080fd5b505af1158015610f60573d6000803e3d6000fd5b505050508080610f6f90611a52565b915050610eba565b6003546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b158015610fe357600080fd5b505af1158015610ff7573d6000803e3d6000fd5b505060045460008581526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a9250611038916119a5565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b15801561109357600080fd5b505af11580156110a7573d6000803e3d6000fd5b505060048054845160208601206040517f771602f7000000000000000000000000000000000000000000000000000000008152928301526024820186905273ffffffffffffffffffffffffffffffffffffffff16925063771602f79150604401600060405180830381600087803b15801561112157600080fd5b505af1158015611135573d6000803e3d6000fd5b505050506111438282611285565b60005b600554811015611209576005818154811061116357611163611901565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b838906111c49086908690600401611ab1565b600060405180830381600087803b1580156111de57600080fd5b505af11580156111f2573d6000803e3d6000fd5b50505050808061120190611a52565b915050611146565b505050565b6104838161132c565b600081815260016020526040812061122e916113d8565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610911565b600082815260016020526040902061129d8282611b10565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f906112f69085908590600401611ab1565b600060405180830381600087803b15801561131057600080fd5b505af1158015611324573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b5080546113e490611930565b6000825580601f106113f4575050565b601f01602090049060005260206000209081019061048391905b80821115611422576000815560010161140e565b5090565b60006020828403121561143857600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156114775783518352928401929184019160010161145b565b50909695505050505050565b63ffffffff8116811461048357600080fd5b6000602082840312156114a757600080fd5b813561034781611483565b6000602082840312156114c457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461034757600080fd5b6000815180845260005b8181101561150e576020818501810151868301820152016114f2565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b838110156115f0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526115de8683516114e8565b955093820193908201906001016115a4565b50508584038187015286518085528782019482019350915060005b8281101561165e5784516022811061164c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8452938101939281019260010161160b565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156116e1576116e161166b565b604052919050565b600082601f8301126116fa57600080fd5b813567ffffffffffffffff8111156117145761171461166b565b61174560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161169a565b81815284602083860101111561175a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561178a57600080fd5b82359150602083013567ffffffffffffffff8111156117a857600080fd5b6117b4858286016116e9565b9150509250929050565b6000602082840312156117d057600080fd5b813567ffffffffffffffff8111156117e757600080fd5b6117f3848285016116e9565b949350505050565b60208152600061034760208301846114e8565b6000806040838503121561182157600080fd5b82359150602083013561183381611483565b809150509250929050565b60006020828403121561185057600080fd5b815161034781611483565b6000602080838503121561186e57600080fd5b825167ffffffffffffffff8082111561188657600080fd5b818501915085601f83011261189a57600080fd5b8151818111156118ac576118ac61166b565b8060051b91506118bd84830161169a565b81815291830184019184810190888411156118d757600080fd5b938501935b838510156118f5578451825293850193908501906118dc565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061194457607f821691505b60208210810361197d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561199557600080fd5b8151801515811461034757600080fd5b60008083546119b381611930565b600182811680156119cb57600181146119fe57611a2d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450611a2d565b8760005260208060002060005b85811015611a245781548a820152908401908201611a0b565b50505082870194505b50929695505050505050565b600060208284031215611a4b57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611aaa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8281526040602082015260006117f360408301846114e8565b601f82111561120957600081815260208120601f850160051c81016020861015611af15750805b601f850160051c820191505b8181101561132457828155600101611afd565b815167ffffffffffffffff811115611b2a57611b2a61166b565b611b3e81611b388454611930565b84611aca565b602080601f831160018114611b915760008415611b5b5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611324565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015611bde57888601518255948401946001909101908401611bbf565b5085821015611c1a57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122097f17b178c5900995017e3358f3352e393583230e27c80f931cb872c98f5739064736f6c63430008130033608060405234801561001057600080fd5b5061001a3361001f565b610099565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516001600160a01b038481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b610760806100a86000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b3660046105f2565b610171565b005b6100aa610233565b6040516100b7919061060b565b60405180910390f35b6100a06100ce3660046105f2565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e3660046105f2565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e6101493660046105f2565b610467565b60405190151581526020016100b7565b6100a061016c36600461064f565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b1561023057600080546103199060019061068c565b81548110610329576103296106cc565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106cc565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106cc565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d66106fb565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106cc565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610230817f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561060457600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561064357835183529284019291840191600101610627565b50909695505050505050565b60006020828403121561066157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461068557600080fd5b9392505050565b818103818111156106c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220944aaf9762ae76290245dc408d76111bab7c64832c55cc07b3c76ebf5553f39e64736f6c63430008130033608060405234801561001057600080fd5b5061001a3361001f565b610099565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516001600160a01b038481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b6107a7806100a86000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385edea131161005b57806385edea13146100d35780638da5cb5b14610101578063a0265ff81461012e578063f2fde38b1461015157600080fd5b80636526db7a14610082578063771602f714610097578063796c5e94146100aa575b600080fd5b61009561009036600461061d565b610164565b005b6100956100a536600461061d565b610301565b6100bd6100b836600461063f565b6103b5565b6040516100ca9190610658565b60405180910390f35b6100f36100e136600461063f565b60009081526020819052604090205490565b6040519081526020016100ca565b610109610415565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ca565b61014161013c36600461061d565b61045a565b60405190151581526020016100ca565b61009561015f36600461069c565b6104ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101d4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101de828261045a565b156102fd57600082815260208190526040902080546101ff906001906106d9565b8154811061020f5761020f610713565b6000918252602080832090910154848352828252604080842060018452818520868652909352909220548154811061024957610249610713565b60009182526020808320909101929092558381526001825260408082208483528084528183205486845283855291832085845293819052835491939092918490811061029757610297610713565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102e6576102e6610742565b600190038181906000526020600020016000905590555b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610371576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037b828261045a565b6102fd5760009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561040957602002820191906000526020600020905b8154815260200190600101908083116103f5575b50505050509050919050565b60006104557f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000828152602081905260408120548103610477575060006104e7565b600083815260016020908152604080832085845290915281205490036104c957600083815260208190526040812080548492906104b6576104b6610713565b90600052602060002001541490506104e7565b50600082815260016020908152604080832084845290915290205415155b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461055d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056681610569565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610566928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806040838503121561063057600080fd5b50508035926020909101359150565b60006020828403121561065157600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561069057835183529284019291840191600101610674565b50909695505050505050565b6000602082840312156106ae57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106d257600080fd5b9392505050565b818103818111156104e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212208f179889b83447173f817f61a16593c6e08bba2d527f5feb407885c6fac1b28264736f6c634300081300338a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460";

type Uint32ComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint32ComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint32Component__factory extends ContractFactory {
  constructor(...args: Uint32ComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Uint32Component> {
    return super.deploy(world, id, overrides || {}) as Promise<Uint32Component>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): Uint32Component {
    return super.attach(address) as Uint32Component;
  }
  override connect(signer: Signer): Uint32Component__factory {
    return super.connect(signer) as Uint32Component__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint32ComponentInterface {
    return new utils.Interface(_abi) as Uint32ComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint32Component {
    return new Contract(address, _abi, signerOrProvider) as Uint32Component;
  }
}