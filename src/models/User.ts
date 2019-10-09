import Stone from '@/models/Stone';
import Item from '@/models/Item';

export default class Gacha {
  id: number;
  name: string;
  stone: Stone;
  items: Item[]

  constructor(id: number, name: string, stone: Stone, items: Item[]) {
    this.id = id;
    this.name = name;
    this.stone = stone;
    this.items = items;
  }
}