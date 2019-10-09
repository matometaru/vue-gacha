import { shallowMount } from "@vue/test-utils";
import sinon from 'sinon';
import GachaPlay from "@/components/GachaPlay.vue";

describe("GachaPlay.vue", () => {
  it(".gacha-playのテキストが「1回」か？", () => {
    const wrapper = shallowMount(GachaPlay, {
      propsData: { 
        number: 1,
        onPlayGacha: () => {}
      }
    });
    expect(wrapper.find(".gacha-play").text()).toBe("1回");
  });
  it(".gacha-playクリック時にonPlayGachaが実行されるか？", () => {
    const onPlayGachaStub = sinon.stub();
    const wrapper = shallowMount(GachaPlay, {
      propsData: { 
        number: 1,
        onPlayGacha: onPlayGachaStub
      }
    });
    wrapper.find(".gacha-play").trigger('click');
    expect(onPlayGachaStub.called).toBe(true);
  });
});
