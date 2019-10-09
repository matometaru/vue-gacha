<template>
  <div class="gacha-play">
    <h1 class="gacha-play-header">ガチャを回す画面</h1>
    <gacha-body :gachaId="gachaId" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import GachaBody from '@/containers/GachaBody.vue'

export default Vue.extend({
  name: "GachaPlay",
  components: {
    GachaBody
  },
  data() {
    return {
      gachaId: Number(this.$route.params.gachaId)
    };
  },
});
</script>

<style scoped lang="scss">
.gacha-play {
  margin: 40px 0 0;
  &-header {
    font-size: 20px;
  }
}
</style>
