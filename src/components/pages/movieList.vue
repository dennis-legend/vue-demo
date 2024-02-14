
<template>
    <div>
        <go-back></go-back>
        <h4>MovieList 电影列表页面</h4>
        <ul>
            <li @click="goDetail(item)" v-for="item in movieList" :key="item.id">
               <p class="movieName">电影名称:{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
 export default{

    data(){
        return {
            movieList:[
                {
                    id:1,
                    name:'我表示药神'
                },
                {
                    id:2,
                    name:'武状元苏乞儿'
                },
                {
                    id:3,
                    name:'王多鱼'
                },
                {
                    id:4,
                    name:'太平洋战争'
                }
            ]
        }
    },
    methods:{
        goDetail(item){
            this.$router.push({
                path:'movieDetail',
                query:{
                    id:item.id,
                    name:item.name
                }
            })
        }
    }

 }
</script>
<style scoped>
  .movieName{
    background: #ccc;
    margin: 10px ;
    height: 1.5rem;
  }
</style>