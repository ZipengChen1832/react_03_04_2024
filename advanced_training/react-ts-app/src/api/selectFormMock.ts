export interface Item {
  id: number;
  itemName: string;
}

export type ItemAPIResponse = Item[];

const items: Item[] = [
  { id: 1, itemName: "Egg" },
  { id: 2, itemName: "Bread" },
  { id: 3, itemName: "Milk" },
  { id: 4, itemName: "Cheese" },
];

export const getItems = async () => items;
