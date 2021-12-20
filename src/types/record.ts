import type { Food } from "./food";

export interface Record {
  id: number;
  foods: Food[];
  last_updated_at: number;
  created_at: number;
}
