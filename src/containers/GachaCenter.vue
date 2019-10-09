<template>
  <div class="gacha-center">
    <gacha-list :gachas="gachas" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex'

import GachaList from '@/components/GachaList.vue'
// model
import Gacha from '@/models/Gacha'
// service
import * as gachaService from '@/services/gachaService'

type Data = {
  gachas: Gacha[];
}

export default Vue.extend({
  name: "GachaBody",
  components: {
    GachaList
  },
  data(): Data {
    return {
      gachas: []
    };
  },
  async created() {
    this.gachas = await gachaService.gachas();
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
