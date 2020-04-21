<template>
  <div class="ex ex_write_form">
    <strong>To Do List</strong>
    <button type="button" class="btn btn_add">추가</button>
    <div class="item">
      <span class="num">1</span>
      <input type="text" class="inp_txt">
      <span class="conut_txt">30/30</span>
      <button type="button" class="btn btn_delete">삭제</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteForm',
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>


<style scoped>
.ex_like{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
  padding: 10px 30px;
  background: #fff;
  border: 1px solid #e5e5e5;
}

strong{
  font-size: 20px;
  color:#000;
}

.item {
  margin-top: 20px;
}

.item .num{
  font-size: 16px;
  color: #666;
  padding-right: 10px;
}

.item .inp_txt{
  width: 200px;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #77d3aa;
}

.btn{
  height: 30px;
  margin-left: 10px;
  background-color: #fff;
  border:1px solid #e5e5e5;
}
</style>
