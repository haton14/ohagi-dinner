import { writable, derived } from "svelte/store";
import type { Record } from "../../types/record";

const useRecordStore = () => {
  const { subscribe, update } = writable<Record[]>([]);
  const add = (newRecords: Record[]) =>
    update((records: Record[]) => {
      return [...records, ...newRecords];
    });
  return { subscribe, update ,add};
};

export const records = useRecordStore();

export const find = (id: number) => {
  return derived(records, ($records) =>
    $records.find((record) => record.id === id)
  );
};
