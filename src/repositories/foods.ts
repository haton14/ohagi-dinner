import type { Foods } from "../types/foods";
import httpClient from "./httpClient";

export class FoodsRepository implements FoodsRepositoryInterface {
  async get(): Promise<Foods> {
    const { data } = await httpClient.get<Foods>("/foods");
    return data;
  }

}

export interface FoodsRepositoryInterface {
  get(): Promise<Foods>;
}
