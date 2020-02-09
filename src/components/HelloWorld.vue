<template>
  <div class="hello">
    <div class="dyzleft">
      <ul>
        <li><a href="#" @click="dyzall()"> all</a></li>
        <li > <a href="#" @click="qyx()"> 100-1000</a></li>
        <li @click='dyzwyx()'>1000-10000</li>
      </ul>
</div>
    <div class="dyzright">
        <router-link to='/cart'>购物车</router-link>
        <button @click="dyzdl()">登录</button>
        <button @click="sort()"> 排序</button>
        <ul>
          <li v-for="(item,key) in tlist" :key="key">
            <shop :obj=item></shop>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import shop from './shop'
export default{
  name: 'HelloWorld',
  data () {
    return {
      list:[],
      tlist:[],
      flag:false,
    }
  },
  components:{shop},
  mounted(){
    axios.get('static/data.json').then((res)=>{
      res.data.result.list.map((v)=>{
          this.list.push(v)
      })
    })
    axios.get('static/data2.json').then((res)=>{
     res.data.result.list.map((v)=>{
          this.list.push(v)
      })
    })
    axios.get('static/data3.json').then((res)=>{
      res.data.result.list.map((v)=>{
          this.list.push(v)
      })
    })
    this.$store.dispatch('dyzlist',this.list)
    this.tlist=this.$store.state.list
    console.log(this.tlist)
  },
  methods:{
    //登录方法
    dyzdl(){
        let obj={name:'douyuezhang',password:1232456765432}
        let li=[]
        li.push(obj)
        localStorage.setItem('dl',JSON.stringify(li))
    },
    dyzall(){
        this.$store.state.list.map((v)=>{
            this.tlist.push(v)
        })
    },
    qyx(){
        this.tlist=[]
        this.$store.state.list.map((v)=>{
             if(v.salePrice>100&&v.salePrice<1000){
                this.tlist.push(v)
              }
        })

   },
    sort(){
        if(this.flag){
          this.tlist.sort((a,b)=>{
              return a.salePrice-b.salePrice
          })
      }else if(this.flag==false){
          this.tlist.sort((a,b)=>{
              return b.salePrice-a.salePrice
          })
      }
      this.flag=!this.flag
    },
    dyzwyx(){
 this.tlist=[]
        this.$store.state.list.map((v)=>{
             if(v.salePrice>1000&&v.salePrice<10000){
                this.tlist.push(v)
              }
        })
},
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello{
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
.dyzleft{
width: 20%;
height: 100%;
background: #ddd;

}
.dyzright{
  width: 80%;
  height: 100%;
  background: blue;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li{
    width: 30%;
    height: 50%;
    &:hover{
      background: pink;
      color: #ddd
    }
  }
}
}
</style>
