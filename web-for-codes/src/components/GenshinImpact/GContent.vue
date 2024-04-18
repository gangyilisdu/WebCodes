<template>
  <div class="genshin-impact-content">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedItem']), // 直接从根模块引入 selectedItem state
    ...mapGetters(['getSelectedItem']), // 修正：使用 mapGetters 引入 getter
  },
  watch: {
    getSelectedItem(newItem) {
      switch (newItem) {
        case 'GRecordsAnalysis':
          this.$router.push({name: "GRecordsAnalysis"});
          break;
        case 'GRecordsPrediction':
          this.$router.push({name: "GRecordsPrediction"});
          break;
      }
    }
  },
};
</script>

<style scoped>
</style>