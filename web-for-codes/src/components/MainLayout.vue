<template>
  <div class="app-layout">
    <div class="header">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <div class="title">Web For Star</div>
      <div class="nav">
        <router-link :to="'/GContent/GRecordsAnalysis'" :class="{ 'nav-item': true, 'active': selectedOption === 'GContent' }" @click="selectOption('GContent')">
          <i class="fas fa-gamepad"></i> <!-- Icon for 原神 -->
          原神
        </router-link>
        <router-link :to="'/SContent/SRecordsAnalysis'" :class="{ 'nav-item': true, 'active': selectedOption === 'SContent' }" @click="selectOption('SContent')">
          <i class="fas fa-train"></i> <!-- Icon for 崩坏星穹铁道 -->
          崩坏星穹铁道
        </router-link>
        <router-link :to="'/ZContent/ZRecordsAnalysis'" :class="{ 'nav-item': true, 'active': selectedOption === 'ZContent' }" @click="selectOption('ZContent')">
          <i class="fas fa-skull-crossbones"></i> <!-- Icon for 绝区零 -->
          绝区零
        </router-link>
      </div>

      <div class="action" style="display: flex; margin-left: auto;">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- Conditionally render user info or login/register buttons -->
        <div v-if="user">
          <div class="nav-item user-info">
            <span class="icon"><i class="fas fa-user"></i></span>
            {{ user.username }}
          </div>
        </div>
        <div v-else>
          <button class="nav-item register-btn" @click="goToRegistation">
            <span class="icon"><i class="fas fa-user-plus"></i></span> <!-- Icon for register -->
            注册
          </button>
          <button class="nav-item login-btn" @click="goToLogIn">
            <span class="icon"><i class="fas fa-sign-in-alt"></i></span> <!-- Icon for login -->
            登录
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="sidebar">
        <SideBar />
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { mapState } from 'vuex';

export default {
  name: 'MainLayout',
  data() {
    return {
      selectedOption: ''
    };
  },
  components: {
    SideBar,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    goToRegistation() {
      this.$router.push('/RegisterPage');
    },
    goToLogIn() {
      this.$router.push('/LoginPage');
    },
    selectOption(option) {
      this.selectedOption = option; // Update selected option
    }
  }
};
</script>

<style scoped>
.app-layout {
  grid-template-rows: auto 1fr;
  background-color: #eaeaea;
  height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #293241;
  color: #ffffff;
  padding: 0 20px;
}

.container {
  display: grid;
  grid-template-columns: 0;
  grid-template-areas: 'sidebar main-content';
  flex-grow: 1;
}

.sidebar {
  grid-area: sidebar;
  position: fixed;
  top: env(safe-area-inset-top);
  height: 100%;
  margin-top: 80px;
  background-color: #293241;
}

.main-content {
  width: 105rem;
  grid-area: main-content;
  flex-grow: 1;
  margin-top: 4rem;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-right: auto;
}

.nav {
  display: flex;
}

.nav-item {
  font-size: 18px;
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
}

.nav-item:hover,
.nav-item.active {
  text-decoration: underline;
}

.action .nav-item {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}

.action .nav-item:hover,
.action .nav-item:focus {
  color: white;
  background-color: #333;
  text-decoration: none;
  outline: none;
}

.register-btn,
.login-btn {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}

.register-btn:hover,
.login-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 颜色变换交互效果 */
.action .nav-item:hover,
.action .nav-item:focus {
  color: #ffffff;
  background-color: #007BFF;
}
</style>
