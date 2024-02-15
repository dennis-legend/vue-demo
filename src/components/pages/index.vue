<template>
    <div class="index">
        <div class="header">购物商城</div>
        <!-- 二级路由出口 -->
        <router-view></router-view>

        <div class="footer">
        <!-- 用户操作视图(导航视图) -->
        <router-link to="/index/home" active-class="selection">首页</router-link>
        <router-link to="/index/sort" active-class="selection">分类</router-link>
        <router-link to="/index/cart" active-class="selection">购物车</router-link>
        <router-link to="/index/mine" active-class="selection">用户中心</router-link>
        </div>
    </div>
</template>
<script>
 export default{

 }
</script>
<style scoped>
   .index{
    border: 1px solid blue;
   }
   .footer{
    width: 100%;
    height: 4%;
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    background: #ccc;
    color: blue;
   }

   .selection{
    background-color: gold;
    font-weight: bold;
   }

   .header{
    background-color: hotpink;
    height: 1.5rem;
    color: #333;
   }
</style>