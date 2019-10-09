import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

const baseDomain = "http://localhost:8080";
const baseURL = `${baseDomain}`;

const client = axios.create({
  baseURL
});
export default client;

// モック
const mockAxios = new MockAdapter(client);

// ガチャ一覧取得
mockAxios.onGet('/gachas').reply(200, [
  { id: 1, name: "ガチャ1", price: 300 },
  { id: 2, name: "ガチャ2", price: 500 },
  { id: 3, name: "ガチャ3", price: 1000 }
]);
// ガチャIDが1を取得
mockAxios.onGet('/gachas/1').reply(200, {
  name: "テストガチャ1",
  price: 300,
  items: [
    { name: "はずれメタルの鎧", rank: 5, text: "残念な鉱物で作られた鎧です。"},
    { name: "ダンボールの鎧", rank: 4, text: "ダンボールでできた鎧。火にものすごく弱い。"},
    { name: "ひのきの棒", rank: 3, text: "そこらへんにある棒（そこらへんにはない）"},
  ]
});
// ガチャIDが2を取得
mockAxios.onGet('/gachas/2').reply(200, {
  name: "テストガチャ2",
  price: 500,
  items: [
    { name: "メタルコングの盾", rank: 5, text: "メタルコングの皮で作られた盾です。"},
    { name: "ダンボールの剣", rank: 4, text: "ダンボールでできた剣。"},
    { name: "ひのきの杖", rank: 3, text: "そこらへんにある杖（そこらへんにはない）"},
  ]
});
// ガチャIDが3を取得
mockAxios.onGet('/gachas/3').reply(200, {
  name: "テストガチャ3",
  price: 1000,
  items: [
    { name: "ゴミ", rank: 5, text: "ゴミ"},
    { name: "ゴミ", rank: 5, text: "ゴミ"},
    { name: "ゴミ", rank: 5, text: "ゴミ"},
    { name: "ゴミ", rank: 5, text: "ゴミ"},
    { name: "ゴミ", rank: 5, text: "ゴミ"},
  ]
});
// ユーザー名でログイン
mockAxios.onPost('/users/login', { name: "めたる" }).reply(200, {
  id: 1,
  name: "めたる",
  level: 29,
  stone: {
    amount: 300
  },
  items: [
    { name: "白T", rare: 3, text: "最初に与えられる白のTシャツ" }
  ]
});
// ユーザーの石の個数を更新
mockAxios.onPut('/users/stone').reply(200, {
  amount: 0,
});