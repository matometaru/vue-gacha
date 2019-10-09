// model
import Item from '@/models/Item';
import Gacha from '@/models/Gacha';

// repository
import GachaRepository from '@/repositories/gachaRepository';

// store
import store from '@/store'

export const gachas = async(): Promise<Gacha[]> => {
  return await new GachaRepository().gachas();
}

export const gacha = async(gachaId: number): Promise<Gacha> => {
  return await new GachaRepository().gachaById(gachaId);
}

// ガチャをプレイ
export const play = async (gacha: Gacha, number: number): Promise<Item[]> => {
  await store.dispatch('subStone', gacha.price * number);
  return gacha.play(number);
}