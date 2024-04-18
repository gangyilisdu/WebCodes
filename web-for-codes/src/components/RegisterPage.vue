<template>
  <div class="register-page">
    <h1 class="page-title">
      <router-link to="/MainLayout" :style="{ color: 'white', textDecoration: 'none' }">Start UP!</router-link>
    </h1>
    <div class="form-box">
      <form @submit.prevent="submitRegistration" class="form">
        <div class="register-group">
          <span class="register-label">注册</span>
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

        <div class="form-group">
          <label for="confirmPassword" class="label">确认密码</label>
          <input
              type="password"
              id="confirmPassword"
              class="input-field"
              placeholder="请再次输入密码"
              v-model="confirmPassword"
              required
          />
        </div>

        <button type="submit" class="submit-button">注册</button>
        <router-link :to="'/LoginPage'" class="login-link-button">
          <button class="link-button"> >>>已有账号？登录启动！ </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async submitRegistration() {
      if (this.password !== this.confirmPassword) {
        alert('两次输入的密码不一致，请重新输入!');
        return;
      }

      try {
        const response = await axios.post('http://47.102.116.125:8080/register', {
          username: this.username,
          password: this.password,
        });

        // 根据后端实际返回的状态码和响应体进行处理
        switch (response.status) {
          case 201: // 用户注册成功
            alert('注册成功啦，请登录哦');
            this.$router.push('/LoginPage');
            break;
          case 400: // 请求参数错误
          case 409: // 用户名已存在
            alert('注册失败啦，呜呜呜，提示信息：' + response.data.error);
            break;
          default: // 其他服务器错误
            alert('注册过程中发生错误，请稍后再试试');
        }
      } catch (error) {
        console.error('注册失败', error);
        alert("注册过程中发生网络或其他未知错误，请稍后再试试");
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
  background-color: #34495e; /* Darker background color */
  min-height: 100vh; /* Ensure the background color fills the entire page */
}

.page-title {
  margin-bottom: 3rem; /* Increased margin bottom */
  font-size: 3rem; /* Larger font size */
  font-weight: bold;
  color: #fff; /* Title color */
}

.form-box {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  height: 30em;
}

.form-group {
  margin-bottom: 15px; /* 几个输入框之间的间距 */
}


.register-group {
  margin-bottom: 20px;
  text-align: center;
}


.register-label {
  font-size: 1.7rem; /* Larger font size */
  font-weight: bold;
  color: #007bff; /* Registration label color */
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
