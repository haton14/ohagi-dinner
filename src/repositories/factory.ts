import { RecordsRepository, RecordsRepositoryInterface } from "./records";
import { FoodsRepository, FoodsRepositoryInterface } from "./foods";

export const RECORDS = Symbol("record");
export const FOODS = Symbol("foods");

export interface Repositories {
  [RECORDS]: RecordsRepositoryInterface;
  [FOODS]: FoodsRepositoryInterface;
}

export default {
  [RECORDS]: new RecordsRepository(),
  [FOODS]: new FoodsRepository(),
} as Repositories;
