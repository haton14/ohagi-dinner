import type { Records } from "../types/records";

export class RecordsRepository {
  public get() {
    let records: Records = {
      years: [
        {
          year: 2021,
          months: [
            {
              month: 11,
              days: [
                {
                  day: 2,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 10,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
                {
                  day: 4,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 2,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 14,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
                {
                  day: 30,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 4,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
              ],
            },
            {
              month: 12,
              days: [
                {
                  day: 1,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 1,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
                {
                  day: 31,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 1,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
              ],
            },
          ],
        },
        {
          year: 2022,
          months: [
            {
              month: 1,
              days: [
                {
                  day: 1,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 1,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
                {
                  day: 4,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 3,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 12,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
                {
                  day: 30,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 1,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
              ],
            },
            {
              month: 12,
              days: [
                {
                  day: 1,
                  record: {
                    id: 1,
                    foods: [
                      {
                        id: 1,
                        name: "ミルワーム",
                        amount: 1,
                        unit: "匹",
                      },
                      {
                        id: 2,
                        name: "ペレット",
                        amount: 1,
                        unit: "個",
                      },
                    ],
                    created_at: 1111,
                    last_updated_at: 1111,
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    return records;
  }
}
