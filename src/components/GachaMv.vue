<template>
  <div class="gacha-mv">
    <slick ref="slick" :options="slickOptions" @reInit="reInit">
      <div v-for="(item, index) in items" :key="index" class="gacha-mv-list">
        <p class="gacha-mv-list-name">{{ item.name }}</p>
        <p class="gacha-mv-list-rare">{{ item.rare }}</p>
        <p class="gacha-mv-list-description">{{ item.description }}</p>
      </div>
    </slick>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Gacha from '@/models/Gacha'
import Item from '@/models/Item'

// slick
import Slick from 'vue-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default Vue.extend({
  name: "GachaMv",
  components: { Slick },
  props: {
    gacha: Object as PropType<Gacha>,
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
  computed: {
    pickupItems(): Item[] {
      return this.items.filter((item) => {
        return item.isPickup();
      });
    }
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
