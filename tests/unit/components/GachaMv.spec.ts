import { shallowMount } from "@vue/test-utils";
import GachaMv from "@/components/GachaMv.vue";

import Item from '@/models/Item'
import Slick from 'vue-slick';

describe("GachaMv.vue", () => {
  it("itemsの値がhtmlに出力されているか？", () => {
    const items = [
      new Item("アイテム名", 3, "アイテム説明")
    ];
    const wrapper = shallowMount(GachaMv, {
      propsData: { items }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("slickの初期値オプション通りのhtmlに出力されているか？", async() => {
    const items = [
      new Item("アイテム名3", 3, "アイテム説明3"),
      new Item("アイテム名4", 4, "アイテム説明4"),
    ];
    const wrapper = shallowMount(GachaMv, {
      stubs: {
        'slick': Slick,
      },
      propsData: { items }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("pickupItemが期待通りか？", async() => {
    const items = [
      new Item("アイテム名3", 3, "アイテム説明3"),
      new Item("アイテム名4", 4, "アイテム説明4"),
      new Item("アイテム名5", 5, "アイテム説明5"),
    ];
    const wrapper = shallowMount(GachaMv, {
      propsData: { items }
    });
    expect((wrapper.vm as any).pickupItems).toEqual([new Item("アイテム名5", 5, "アイテム説明5")]);
  });
});
