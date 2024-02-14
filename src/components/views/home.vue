<template>
    <div>
        <h2 style="text-align: center;">home页面</h2>
        <div class="iconInfo">
            <!-- <div>电影</div>
            <div>超市</div>
            <div>美食</div> -->

            <!-- 可以使用routerLink，或者编程式导航，来跳转到相应的页面 -->
            <div class="iconList" v-for="item in iconList" :key="item.id" @click="goList(item.id)">
             {{ item.name }}
            </div>

        </div>
    </div>
</template>
<script>
 export default{

    data(){
        return{
            iconList:[
                {
                    id:1,
                    name:'电影'
                },
                {
                    id:2,
                    name:'超市'
                },
                {
                     id:3,
                     name:'美食'
                }
            ]
        }
    },
    methods:{
        //利用编程式导航,来跳转到(子)页面
        goList(id){
            if(id=='1'){
            this.$router.push({
                path:'/movieList',
                query:{
                    id
                }
            })
        }
        else if(id=='2'){
            this.$router.push({
                path:'/superMarketList',
                query:{
                    id
                }
            })
        }
        else{
            this.$router.push({
                path:'/foodList',
                query:{
                    id
                }
            })
        }

        }
    }

 }
</script>
<style scoped>
   .iconInfo{
    width: 100%;
    display: flex;
   }

   .iconInfo .iconList{
    flex:1;
    border-radius: 60%;
    background: gray;
    text-align: center;
    line-height: 3rem;
   }
</style>