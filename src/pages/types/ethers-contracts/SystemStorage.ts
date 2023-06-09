/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface SystemStorageInterface extends utils.Interface {
  functions: {
    "components()": FunctionFragment;
    "world()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "components" | "world"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "components",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "world", values?: undefined): string;

  decodeFunctionResult(functionFragment: "components", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;

  events: {};
}

export interface SystemStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SystemStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    components(overrides?: CallOverrides): Promise<[string]>;

    world(overrides?: CallOverrides): Promise<[string]>;
  };

  components(overrides?: CallOverrides): Promise<string>;

  world(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    components(overrides?: CallOverrides): Promise<string>;

    world(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    components(overrides?: CallOverrides): Promise<BigNumber>;

    world(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    components(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    world(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
