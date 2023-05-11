/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  JoinGameSystem,
  JoinGameSystemInterface,
} from "../JoinGameSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int32",
            name: "x",
            type: "int32",
          },
          {
            internalType: "int32",
            name: "y",
            type: "int32",
          },
        ],
        internalType: "struct Coord",
        name: "coord",
        type: "tuple",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001428380380620014288339810160408190526200003491620001dc565b8181620000413362000149565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200021b565b600080546001600160a01b039283166001600160a01b0319918216811790925560018054938616938216841790557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805482169093179092557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8680549092161790555050505062000242565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516001600160a01b038481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381168114620001d957600080fd5b50565b60008060408385031215620001f057600080fd5b8251620001fd81620001c3565b60208401519092506200021081620001c3565b809150509250929050565b6000602082840312156200022e57600080fd5b81516200023b81620001c3565b9392505050565b6111d680620002526000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063cb6cbba7146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004610c3a565b6100cf565b6040516100719190610d28565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004610d4a565b61013e565b6100cd6100c8366004610d8b565b6106c5565b005b60606000828060200190518101906100e79190610dc1565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000805460609133916101879073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610741565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156101f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102199190610df6565b15610285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c7265616479206a6f696e656400000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546102c99073ffffffffffffffffffffffffffffffffffffffff167f26cf7dc75ae68c708d2e4d32efa853730b92b0bf86104963fae257250466fa25610741565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015610313573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103599190810190610e31565b805186519192509061036c908290610efb565b6103769190610f64565b60030b855260208082015190860151610390908290610efb565b61039a9190610f64565b60030b60208601526001546103c59073ffffffffffffffffffffffffffffffffffffffff168661088f565b511561042d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f74686973207370616365206973206f6273747275637465640000000000000000604482015260640161027c565b6040517f60fe47b10000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff8316906360fe47b190602401600060405180830381600087803b15801561049557600080fd5b505af11580156104a9573d6000803e3d6000fd5b50506000546104f1925073ffffffffffffffffffffffffffffffffffffffff1690507f49a4584d9706380e35459e1f31e673445371b5bac20aa516f8ba8650b1843106610741565b73ffffffffffffffffffffffffffffffffffffffff1663dcb14c2f84876040518363ffffffff1660e01b815260040161052b929190610fad565b600060405180830381600087803b15801561054557600080fd5b505af1158015610559573d6000803e3d6000fd5b50506000546105a1925073ffffffffffffffffffffffffffffffffffffffff1690507f035372a84ed8a55d8457eb5799995a6c576105567e7fe094f6b26cf611c70afd610741565b73ffffffffffffffffffffffffffffffffffffffff166360fe47b1846040518263ffffffff1660e01b81526004016105db91815260200190565b600060405180830381600087803b1580156105f557600080fd5b505af1158015610609573d6000803e3d6000fd5b5050600054610651925073ffffffffffffffffffffffffffffffffffffffff1690507fc21082728a9fccb6fd1e9d68c7593b100c0c10579766b623a82bd937949f64d3610741565b73ffffffffffffffffffffffffffffffffffffffff166360fe47b1846040518263ffffffff1660e01b815260040161068b91815260200190565b600060405180830381600087803b1580156106a557600080fd5b505af11580156106b9573d6000803e3d6000fd5b50505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610735576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61073e81610a76565b50565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156107b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107f79190810190610fd4565b90508051600003610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161027c565b6108858160008151811061087a5761087a61107a565b602002602001015190565b9150505b92915050565b604080516002808252606082810190935260009190816020015b604080516060808201835260008083526020830152918101919091528152602001906001900390816108a957905050604080516060810190915290915080600281526020017f49a4584d9706380e35459e1f31e673445371b5bac20aa516f8ba8650b184310660001c81526020018460405160200161092891906110a9565b6040516020818303038152906040528152508160008151811061094d5761094d61107a565b6020908102919091018101919091526040805160608101825260008082527fd703888970216b9e7638d070dffe76bfc96703764185f5bf28908d52098f35578285015282519081529283018252908101919091528151829060019081106109b6576109b661107a565b60209081029190910101526040517f687485a600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063687485a690610a139084906004016110ca565b600060405180830381865afa158015610a30573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108859190810190610fd4565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161073e928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610b7c57610b7c610b2a565b60405290565b6040516060810167ffffffffffffffff81118282101715610b7c57610b7c610b2a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610bec57610bec610b2a565b604052919050565b600067ffffffffffffffff821115610c0e57610c0e610b2a565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215610c4c57600080fd5b813567ffffffffffffffff811115610c6357600080fd5b8201601f81018413610c7457600080fd5b8035610c87610c8282610bf4565b610ba5565b818152856020838501011115610c9c57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015610cd5578181015183820152602001610cbd565b50506000910152565b60008151808452610cf6816020860160208601610cba565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184610cde565b8060030b811461073e57600080fd5b600060408284031215610d5c57600080fd5b610d64610b59565b8235610d6f81610d3b565b81526020830135610d7f81610d3b565b60208201529392505050565b600060208284031215610d9d57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b600060408284031215610dd357600080fd5b610ddb610b59565b8251610de681610d3b565b81526020830151610d7f81610d3b565b600060208284031215610e0857600080fd5b815180151581146100f257600080fd5b805163ffffffff81168114610e2c57600080fd5b919050565b60006020808385031215610e4457600080fd5b825167ffffffffffffffff80821115610e5c57600080fd5b9084019060608287031215610e7057600080fd5b610e78610b82565b610e8183610e18565b8152610e8e848401610e18565b84820152604083015182811115610ea457600080fd5b80840193505086601f840112610eb957600080fd5b82519150610ec9610c8283610bf4565b8281528785848601011115610edd57600080fd5b610eec83868301878701610cba565b60408201529695505050505050565b600381810b9083900b01637fffffff81137fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000000082121715610889577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008260030b80610f9e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b808360030b0791505092915050565b828152606081016100f26020830184805160030b8252602081015160030b60208301525050565b60006020808385031215610fe757600080fd5b825167ffffffffffffffff80821115610fff57600080fd5b818501915085601f83011261101357600080fd5b81518181111561102557611025610b2a565b8060051b9150611036848301610ba5565b818152918301840191848101908884111561105057600080fd5b938501935b8385101561106e57845182529385019390850190611055565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b604081016108898284805160030b8252602081015160030b60208301525050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015611191577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08a85030186528251606081516006811061115c577f4e487b710000000000000000000000000000000000000000000000000000000085526021600452602485fd5b8652818a01518a870152908801518886018290529061117d81870183610cde565b978a019795505050918701916001016110f2565b5091999850505050505050505056fea2646970667358221220a10bf5e1842398f554d6655abc9ff229ab3bc506539fb316fddb637e31dd231564736f6c63430008130033";

type JoinGameSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JoinGameSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JoinGameSystem__factory extends ContractFactory {
  constructor(...args: JoinGameSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JoinGameSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<JoinGameSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): JoinGameSystem {
    return super.attach(address) as JoinGameSystem;
  }
  override connect(signer: Signer): JoinGameSystem__factory {
    return super.connect(signer) as JoinGameSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JoinGameSystemInterface {
    return new utils.Interface(_abi) as JoinGameSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JoinGameSystem {
    return new Contract(address, _abi, signerOrProvider) as JoinGameSystem;
  }
}
