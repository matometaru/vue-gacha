<template>
  <div class="gacha-center">
    <h1 class="gacha-center-header">ガチャ</h1>
    <gacha-list />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: "GachaCenter",
  components: {
    
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
