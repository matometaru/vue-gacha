<template>
  <div class="gacha-mv">
    <slick ref="slick" :options="slickOptions" @reInit="reInit">
      <div v-for="(item, index) in items" :key="index" class="gacha-mv-list">
        <p class="gacha-mv-list-name">{{ item.name }}</p>
        <img :src="item.image">
        <p class="gacha-mv-list-description">{{ item.description }}</p>
      </div>
    </slick>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Item from '@/models/Item'

// slick
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default Vue.extend({
  name: "GachaMv",
  components: { Slick },
  props: {
    items: Array as PropType<Item[]>
  },
  data() {
    return {
      slickOptions: {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    };
  },
  watch: {
    items() {
      (this.$refs.slick as any).destroy();
      this.$nextTick(() => {
        (this.$refs.slick as any).create();
      });
    }
  },
  methods: {
    reInit() {
      this.$nextTick(() => {
          (this.$refs.slick as any).reSlick();
      });
    },
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
