<template>
  <div
    class="gacha-play"
    @click="onPlayGacha(number)"
  >{{ number }}回</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: "GachaPlay",
  props: {
    number: {
      type: Number,
      required: true,
    },
    onPlayGacha: {
      type: Function,
      required: true,
    }
  }
});
</script>

<style scoped lang="scss">
.gacha-play {
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0.5em 1em;
  margin: 0 1em;
}
</style>
