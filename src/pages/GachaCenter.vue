<template>
  <div class="gacha-center">
    <h1 class="gacha-center-header">ガチャ</h1>
    <gacha-center />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import GachaCenter from '@/containers/GachaCenter.vue'

export default Vue.extend({
  components: {
    GachaCenter
  },
  props: {
    msg: String
  },
  data() {
    return {
      items: [] as PropType<{}>
    };
  },
  created() {
    // 
  },
  mounted() {
    //
  },
  methods: {
    onPlayGacha(): string {
      return "";
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
