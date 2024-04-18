<template>
  <div class="Zenless-Zone-Zero-content">
    <SideBar @item-selected="onSideBarItemSelected"></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  methods: {
    onSideBarItemSelected(selectedItem) {
      switch (selectedItem) {
        case 'ZRecordsAnalysis':
          this.$router.push({name: "ZRecordsAnalysis"});
          break;
          // 其他 case...
      }
    },
  },
};
</script>