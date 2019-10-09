<template>
  <div class="gacha-center">
    <h1 class="gacha-center-header">ガチャ結果</h1>
    <gacha-result
      :items="items"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import GachaResult from '@/containers/GachaResult.vue'
// model
import Item from '@/models/Item'

export default Vue.extend({
  name: "GachaCenter",
  components: {
    GachaResult
  },
  props: {
    itemsString: String
  },
  computed: {
    items(): Item[] {
      return JSON.parse(this.itemsString);
    }
  }
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
