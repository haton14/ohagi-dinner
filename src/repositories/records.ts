import type { Records } from "../types/records";
import httpClient from "./httpClient";

export class RecordsRepository implements RecordsRepositoryInterface {
  async get(): Promise<Records> {
    console.log(httpClient);
    const { data } = await httpClient.get<Records>("/records");
    return data;
  }
}

export  interface RecordsRepositoryInterface {
  get(): Promise<Records>;
}
