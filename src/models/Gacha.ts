import Item from '@/models/Item';

export default class Gacha {
  id: number;
  name: string;
  price: number;
  items: Item[];

  constructor(id: number, name: string, price: number, items: Item[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.items = items;
  }

  play(number: number): Item[] {
    const resultItem: Item[] = [];
    for (let i = 0; i < number; i++) {
      resultItem.push(this.items[Math.floor(Math.random() * this.items.length)]);
    }
    return resultItem;
  }
}