<template>
  <div class="content-section">
    <div class="content-container">
      <div class="left-box">
        <div class="content" style="color: #333;">
          <h2 class="title" style="color: #0D47A1; font-weight: bold;">Go程序在线运行</h2>
          <p class="description"></p>
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <!-- Icon from Font Awesome for input section -->
            <i class="fas fa-link" style="margin-right: 10px;"></i>
            <h5 class="sub-title" style="color: #0D47A1; font-weight: bold;">输入：</h5>
          </div>
          <div class="input-field">
            <PythonEditor :default-code="defaultCode" @textarea-updated='handlerTextareaUpdate' />
          </div>
          <!-- Run Button -->
          <button class="run-button" @click="runCode" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 12px;">运行</button>
          <button class="default-code" @click="setDefaultCode" style="background-color: #7355db; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 8px; cursor: pointer; border-radius: 12px;">默认代码</button>
          <div style="margin-top: 20px;">
            <h5 class="sub-title" style="color: #0D47A1; font-weight: bold;">结果：</h5>
            <!-- Output Box -->
            <div id="outputBox" class="output-box" v-html="outputData" style="border: 1px solid #ccc; padding: 10px; width: 100%; min-height: 200px; font-family: 'Courier New', Courier, monospace;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-section {
  padding: 30px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.content-container {
  display: flex;
}

.left-box
{
  background-color: #f8f9fa;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.left-box {
  margin-left: 9.5rem;
  width: 80%;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #0D47A1;
  font-size: 24px;
  font-weight: bold;
}

.sub-title {
  margin-bottom: 10px;
  color: #0D47A1;
  font-size: 18px;
  font-weight: bold;
}

.left-box .content img {
  max-width: 100%;
  height: auto;
}

.input-field {
  overflow-y: auto;
  margin-top: -40px;
}

.run-button:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.default-code:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.output-box {
  white-space: pre-wrap; /* 或者 white-space: pre-line; 根据需要选择 */
}

</style>

<script>
import {defineComponent} from "vue";
import PythonEditor from "@/components/GenshinImpact/PythonEditor.vue";
import axios from "axios";
import {de} from "vuetify/locale";

export default defineComponent({
  computed: {
    de() {
      return de
    }
  },
  components: {PythonEditor},
  data() {
    return {
      pythonCode : "",
      outputData : "",
      defaultCode: ``,
    };
  },
  methods: {
    async runCode() {
      try {
        const response = await axios.post('http://47.102.116.125:8080/python', {pythonCode: this.pythonCode});

        console.log(response.data.output);
        this.outputData = response.data.output;
      } catch (error) {
        console.error("Error:", error);
        this.outputData = "Error occurred. Please try again later.";
      }
    },
    setDefaultCode() {
      this.defaultCode = 'def main():\n\tprint("Hello, World!")\n\nif __name__ == "__main__":\n\tmain()'
    },
    handlerTextareaUpdate(newValue) {
      this.pythonCode = newValue;
    },
  },
})
</script>