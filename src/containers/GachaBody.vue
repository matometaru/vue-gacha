<template>
  <div class="gacha-center">
    <gacha-mv :gachas="gacha" :items="items" />
    <gacha-play :number="1" :onPlayGacha="onPlayGacha" />
    <gacha-play :number="10" :onPlayGacha="onPlayGacha" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex'

import GachaMv from '@/components/GachaMv.vue'
import GachaPlay from '@/components/GachaPlay.vue'
// model
import Item from '@/models/Item'
import Gacha from '@/models/Gacha'
// service
import * as gachaService from '@/services/gachaService'

type Data = {
  gacha: Gacha;
  items: Item[];
}

export default Vue.extend({
  name: "GachaBody",
  components: {
    GachaMv,
    GachaPlay
  },
  props: {
    gachaId: {
      type: Number,
      default: 1
    }
  },
  data(): Data {
    return {
      gacha: new Gacha(1, "", 300, []),
      items: [],
    };
  },
  async created() {
    this.gacha = await gachaService.gacha(this.gachaId)
    this.items = this.gacha.items;
  },
  methods: {
    ...mapActions([
      'subStone',
    ]),
    async onPlayGacha(number: number): Promise<void> {
      if(!confirm(`石を${this.gacha.price * number}個消費して、${number}回 ガチャを回します。`)) {
        return;
      }
      // 処理が複雑なのでガチャサービスを叩く
      const items = await gachaService.play(this.gacha, number);
      alert(JSON.stringify(items));
      // 結果ページへ遷移
      this.$router.push({ name: 'gacha-result', params: { itemsString: JSON.stringify(items) }})
    },
  },
});
</script>

<style scoped lang="scss">
.gacha-center {
  margin: 40px 0 0;
  &-header {
    font-size: 20px;
  }
}
</style>
