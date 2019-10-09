import Repository from '@/repositories/Repository'
import Gacha from '@/models/Gacha';
import Item from '@/models/Item';

const resource = "/gachas";

interface GachaRepositoryIterface {
  gachas(): Promise<Gacha[]>;
  gachaById(id: number): Promise<Gacha>;
  items(items: any[]): Item[];
  addItem(item: Item): boolean;
}

export default class GachaRepository implements GachaRepositoryIterface {

  async gachas(): Promise<Gacha[]> {
    const { data } = await Repository.get(`${resource}`);

    const gachas = [];
    for (const gacha of data) {
      gachas.push(new Gacha(gacha.id, gacha.name, gacha.price, []));
    }
    return gachas;
  }

  async gachaById(id: number): Promise<Gacha> {
    const { data } = await Repository.get(`${resource}/${id}`);

    return new Gacha(1, data.name, data.price, data.items);
  }

  // 配列をアイテムモデルに変換して返す
  items(itemObjects: any[]): Item[] {
    // それをモデルに変換して返す
    const items: Item[] = [];
    for (const item of itemObjects) {
      items.push(new Item(item.name, item.rank, item.text));
    }
    return items;
  }

  addItem(item: Item): boolean {
    // apiで追加する処理
    return true;
  }
}