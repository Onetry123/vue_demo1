<template>
    <div class="dyzshop">
      <img :src="'../../static/img/'+obj.productImage" alt="">
      <p>{{obj.productName}}</p>
      <a href="#">￥{{obj.salePrice}}</a><br/>
      <button @click="dyzaddcart(obj.productId)">加入购物车</button>
    </div>
</template>
<script>
export default {
    data(){
      return{
        list:JSON.parse(localStorage.getItem('dl'))||[]
      }
      },
    props:{
      obj:{
        type:Object,
      }
  },
  methods:{
    dyzaddcart(id){
      if(this.list.length>0){
        let index=this.$store.state.list.findIndex((v)=>{
          return v.productId==id
      })
      this.$store.dispatch('dyzcart',this.$store.state.list[index])
      console.log(this.$store.state.cart)
      }else if(this.list.length<=0){
      alert('请登录')
  }

}
}

}
</script>
<style lang="scss" scoped>
  .dyzshop{
    width: 25%;
    height: 30%;
    img{
      width: 100%;
      height: 40%;
    }
    }
</style>
