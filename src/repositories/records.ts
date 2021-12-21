import type { Records } from "../types/records";
import type { Record } from "../types/record";
import httpClient from "./httpClient";

export class RecordsRepository implements RecordsRepositoryInterface {
  async get(): Promise<Records> {
    const { data } = await httpClient.get<Records>("/records/v2");
    return data;
  }
  async create(record: Record): Promise<Record> {
    const { data } = await httpClient.post<Record>("/records", record);
    return data;
  }
}

export interface RecordsRepositoryInterface {
  get(): Promise<Records>;
  create(record: Record): Promise<Record>;
}
