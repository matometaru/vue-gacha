import { shallowMount } from "@vue/test-utils";
import GachaMv from "@/components/GachaMv.vue";

import Item from '@/models/Item'
import Slick from 'vue-slick';

describe("GachaMv.vue", () => {
  it("itemsの値がhtmlに出力されているか？", () => {
    const items = [
      new Item("ガチャ名", 3, "ガチャ説明")
    ];
    const wrapper = shallowMount(GachaMv, {
      propsData: { items }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("slickの初期値オプション通りのhtmlに出力されているか？", async() => {
    const items = [
      new Item("ガチャ名3", 3, "ガチャ説明3"),
      new Item("ガチャ名4", 4, "ガチャ説明4"),
    ];
    const wrapper = shallowMount(GachaMv, {
      stubs: {
        'slick': Slick,
      },
      propsData: { items }
    });
    console.log(wrapper.vm.$data.slickOptions.dots);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
