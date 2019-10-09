import Repository from '@/repositories/Repository'
import User from '@/models/User';
import Stone from '@/models/Stone';
import Item from '@/models/Item';

const resource = "/users";

interface UesrRepositoryIterface {
  id: number;

  login(name: string): Promise<User>;
  updateStone(stone: Stone): Promise<void>;
}


export default class UesrRepository implements UesrRepositoryIterface {
  id: number;

  constructor() {
    this.id = 0;
  }

  async login(name: string): Promise<User> {
    const { data } = await Repository.post(`${resource}/login`, { name });
    const items: Item[] = [];
    for (const item of data.items) {
      new Item(item.name, item.rare, item.text)
    }
    return new User(data.id, data.name, new Stone(data.stone.amount), items);
  }

  async updateStone(stone: Stone): Promise<void>{
    const amount = stone.amount;
    const { data } = await Repository.put(`${resource}/stone`, { amount });
  }
}