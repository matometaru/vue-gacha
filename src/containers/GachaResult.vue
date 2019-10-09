<template>
  <div class="gacha-result">
    <ul class="gacha-result-list">
      <li v-for="item in items" :key="item.name">{{ item.name }}</li>
    </ul>
    <button @click="share">Twitterにシェアする</button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
// model
import Item from '@/models/Item'

export default Vue.extend({
  name: "GachaResult",
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    }
  },
  methods: {
    share(): void {
      alert(`snsにシェアしました。（してない）`)
    },
  },
});
</script>

<style scoped lang="scss">
.gacha-result {
  margin: 40px 0 0;
  &-list {
    list-style: none;
    overflow: hidden;
    li {
      float: left;
      width: 16%;
      padding: 10px;
      margin: 1%;
      border: 1px solid #ddd;
    }
  }
}
</style>
