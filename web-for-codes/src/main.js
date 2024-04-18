import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index.js'; // 引入store
import 'materialize-css/dist/css/materialize.min.css';
import { VAceEditor } from 'vue3-ace-editor';

// 引入 Ace Editor 核心库
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
// （可选）引入主题文件，例如 Tomorrow Night Bright 主题
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';

// 创建一个Vue应用实例，并关联store
const app = createApp(App);
app.use(router);
app.use(store);
app.component('VAceEditor', VAceEditor);

// 将应用挂载到ID为'app'的DOM元素上
app.mount('#app');