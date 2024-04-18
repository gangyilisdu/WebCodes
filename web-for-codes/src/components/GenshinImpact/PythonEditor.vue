<template>
  <div class='content'>
    <v-ace-editor v-model:value="dataForm.textareaShow" @init="initPythonEditor" lang="python"
                  :readonly="aceConfig.readOnly" style="height:330px;margin-top: 20px;" class="ace-editor" />
  </div>
</template>

<script>
import { VAceEditor } from 'vue3-ace-editor';

export default {
  name: 'PythonEditor',
  components: {
    VAceEditor,
  },
  props: {
    defaultCode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      watchedValue: null,
      aceConfig: {
        lang: 'python', // 使用Python语言模式
        readOnly: false, // 是否只读
      },
      dataForm: {
        textareaShow: '# Start writing your Python code here...\nprint("Hello, World!")', // 初始示例Python代码
      },
    };
  },
  watch: {
    'dataForm.textareaShow': {
      handler(newVal) {
        this.watchedValue = newVal;
        console.log(`Count: ${newVal}`);
        this.$emit('textarea-updated', this.watchedValue);
      },
      immediate: true,
    },
    defaultCode(code) {
      if (code) {
        this.dataForm.textareaShow = code;
      }
    }
  },
  methods: {
    initPythonEditor(editor) {
      editor.setTheme('ace/theme/tomorrow_night_bright');
      editor.setFontSize(14);
    },
  },
};
</script>