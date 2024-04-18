<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header">
      <button class="toggle-button" @click="toggleSidebar">
        <i :class="[isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left']"></i>
      </button>
    </div>
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item title" :class="{ 'active': selectedItem === '搜索'}">
        <i class="fas fa-search fa-lg"></i><span v-show="!isCollapsed" class="sidebar-menu-text"> 搜索</span>
      </li>
      <li class="sidebar-menu-item" @click="selectItem('Search')" :class="{ 'active': selectedItem === 'Search' }">
        <i class="fas fa-user-friends"></i><span v-show="!isCollapsed"> 新朋友</span>
      </li>
      <!-- 祈愿 with icon -->
      <li class="sidebar-menu-item title" :class="{ 'active': selectedItem === '祈愿'}">
        <i class="fas fa-praying-hands fa-lg"></i><span v-show="!isCollapsed" class="sidebar-menu-text"> 祈愿</span>
      </li>
      <!-- 抽卡分析 -->
      <li class="sidebar-menu-item" @click="selectItem('GRecordsAnalysis')" :class="{ 'active': selectedItem === 'GRecordsAnalysis' }">
        <i class="fas fa-chart-line"></i><span v-show="!isCollapsed"> 抽卡分析</span>
      </li>
      <!-- 抽卡预测 -->
      <li class="sidebar-menu-item" @click="selectItem('GRecordsPrediction')" :class="{ 'active': selectedItem === 'GRecordsPrediction' }">
        <i class="fas fa-envelope-open-text"></i><span v-show="!isCollapsed"> 抽卡预测</span>
      </li>
      <!-- 工具 with icon -->
      <li class="sidebar-menu-item title" :class="{ 'active': selectedItem === '工具' }">
        <i class="fas fa-toolbox fa-lg"></i><span v-show="!isCollapsed" class="sidebar-menu-text"> 工具</span>
      </li>
      <!-- 角色评分 -->
      <li class="sidebar-menu-item" @click="selectItem('Notifications')" :class="{ 'active': selectedItem === 'Notifications' }">
        <i class="fas fa-star"></i><span v-show="!isCollapsed"> 角色评分</span>
      </li>
      <!-- 圣遗物评分 -->
      <li class="sidebar-menu-item" @click="selectItem('Settings')" :class="{ 'active': selectedItem === 'Settings' }">
        <i class="fas fa-cog"></i><span v-show="!isCollapsed"> 圣遗物评分</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      selectedItem: "",
      isCollapsed: false // Track sidebar collapse/expand state
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed; // Toggle sidebar collapse/expand
    },
    selectItem(item) {
      // Check if the clicked item is not a title
      if (!['祈愿', '工具'].includes(item)) {
        this.selectedItem = item;
        this.$emit('item-selected', item);
        this.$store.dispatch('selectSideBarItem', this.selectedItem);
        if (this.isCollapsed) {
          this.isCollapsed = false; // Expand the sidebar if it's collapsed
        }
      }
    },
  }

};
</script>

<style scoped>
.sidebar {
  left: 0;
  bottom: 0;
  background-color: #293241;
  width: 250px;
  overflow: hidden; /* Hide overflow for rounded corners */
  transition: width 0.3s; /* Add transition */
}

.collapsed {
  width: 60px; /* Collapsed width */
}

.sidebar-header {
  display: flex;
  justify-content: flex-end;
}

.sidebar-menu-text {
  font-size: 1.5em;
  margin-right: 10px; /* 增加右边距以分隔箭头 */
}

.toggle-button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
}

.toggle-button i {
  font-size: 1.2em; /* 调整箭头大小 */
  color: #555; /* 更改箭头颜色 */
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
}

.sidebar-menu-item {
  margin-bottom: 10px;
  color: #fff;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.3s; /* Add transition */
}

.sidebar-menu-item:hover {
  background-color: #343a40;
  transform: scale(1.05); /* Scale on hover */
  cursor: pointer;
}

.sidebar-menu-item i {
  margin-right: 10px; /* Increase the margin between icon and text */
}

.sidebar-menu-text {
  font-size: 1.2em; /* Increase text size */
}

.title {
  pointer-events: none; /* Prevent clicking on title items */
}

.active {
  background-color: #394264; /* Keep currently selected item highlighted */
}

/* Hide text when sidebar is collapsed */
.sidebar-menu-item span {
  display: inline-block;
}

.collapsed .sidebar-menu-item span {
  display: none;
}

/* Center collapse button vertically */
.collapsed .sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
