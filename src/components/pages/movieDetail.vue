<template>
    <div>
        <!-- <div>
            <button @click="$router.go(-1)">返回</button>
        </div> -->
 
         <!-- main.js中已经封装了全局组件 -->
        <go-back></go-back>

        <h2>电影详情页面</h2>
        <p>{{ $route.query.name }}</p>
    </div>
</template>
<script>
 export default{

    mounted(){
        //挂载,调取相关的详情接口

    }

 }
</script>
<style scoped>
  div{
    text-align: center;
    margin: 10px;
  }
  div p{
    margin-top: 20px;
  }
</style>