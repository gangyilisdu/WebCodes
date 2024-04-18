<template>
  <div class="register-page">
    <h1 class="page-title">
      <router-link to="/MainLayout" :style="{ color: 'white', textDecoration: 'none' }">Start UP!</router-link>
    </h1>
    <div class="form-box">
      <form @submit.prevent="submitLoginIn" class="form">
        <div class="register-group">
          <span class="register-label">登录</span>
        </div>

        <div class="form-group">
          <label for="username" class="label">用户名或邮箱</label>
          <input
              type="text"
              id="username"
              class="input-field"
              placeholder="请输入用户名或邮箱"
              v-model="username"
              required
          />
        </div>

        <div class="form-group">
          <label for="password" class="label">密码</label>
          <input
              type="password"
              id="password"
              class="input-field"
              placeholder="请输入密码"
              v-model="password"
              required
          />
        </div>

        <button type="submit" class="submit-button">登录</button>
        <router-link :to="'/RegisterPage'" class="login-link-button">
          <button class="link-button"> >>>还没账号？注册启动！ </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitLoginIn() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };

        const loginSuccess = await this.$store.dispatch('login', credentials);
        if (loginSuccess && this.$store.getters.isLoggedIn) {
          this.$router.push('/MainLayout');
        } else {
          alert('登录失败，请检查用户名和密码');
        }
      } catch (error) {
        console.error('登录请求过程中发生错误', error);
        alert('登录过程中发生网络或其他未知错误，请稍后再试试');
      }
    }
  }
};
</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #34495e;
  min-height: 100vh;
}

.page-title {
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
}

.form-box {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  height: 23em;
}

.form-group {
  margin-bottom: 15px; /* 几个输入框之间的间距 */
}


.register-group {
  margin-bottom: 20px;
  text-align: center;
}


.register-label {
  font-size: 1.7rem;
  font-weight: bold;
  color: #007bff;
}

.label {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.2rem;
}

.submit-button {
  width: 40%;
  padding: 1rem;
  background-color: #007bff; /* Blue button color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #0056b3;
}

.link-button {
  width: 40%;
  color: #f11919;
  white-space: nowrap;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  margin-left: 8px;
}
</style>
