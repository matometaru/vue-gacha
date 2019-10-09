<template>
  <ul class="gacha-list">
    <li v-for="gacha in gachas" :key="gacha.id">
      <router-link :to="{ name: 'gacha-play', params: { gachaId: gacha.id }}">
        <p>{{ gacha.name }}</p>
        <p>{{ gacha.price }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Gacha from '@/models/Gacha';

export default Vue.extend({
  name: "GachaList",
  props: {
    gachas: {
      type: Array as PropType<Gacha[]>,
      required: true,
    }
  },
});
</script>

<style scoped lang="scss">
.gacha-list {
  margin: 40px 0 0;
  list-style: none;
  li {
    border: 1px solid #ddd;
    padding: 10px;
    & + li {
      margin-top: 15px;
    }
  }
}
</style>
