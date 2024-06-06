<template>
  <div class="content-section">
    <div class="content-container">
      <div class="left-box">
        <div class="content" style="color: #333;">
          <h2 class="title" style="color: #0D47A1; font-weight: bold;">联系我们</h2>
          <p>网站制作不易，如果觉得好用帮忙宣传一下，感谢使用</p>
          <p>如果使用过程遇到任何问题，欢迎联系该QQ号进行反馈哦</p>
          <p>Thanks you very much</p>
          </div>
        <div>
          <table class="table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>status</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fixedItem in fixedItems" :key="fixedItem.id">
                <td>{{ fixedItem.id }}</td>
                <td>{{ fixedItem.name }}</td>
                <td v-if="emailMap[fixedItem.id]">{{ emailMap[fixedItem.id] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      fixedItems: [
        { id: 1, name: 'li' },
        { id: 2, name: 'wang' },
      ],
      emailMap: {},
    };
  },
}
</script>


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
  margin-left: 1rem;
  width: 1600px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #0D47A1;
  font-size: 24px;
  font-weight: bold;
}

.left-box .content img {
  max-width: 100%;
  height: auto;
}

.table-bordered {
  border-collapse: collapse;
  width: 100%;
}

.table-bordered td,
.table-bordered th {
  border: 1px black;
}
</style>