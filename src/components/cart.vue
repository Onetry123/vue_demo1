<template>
  <div>
    <input type="checkbox" @change="chen()" v-model="all" />
    <ul>
      <li v-for="(item,key) in list" :key="key">
        <input type="checkbox" v-model="flag" />
        <dl>
          <dt>
            <img :src="'../../static/img/'+item.productImage" alt />
          </dt>
          <dd>
            <p>{{item.productName}}</p>
            <p>
              <button @click="dyzadd(key)">+</button>
              {{item.productUrl}}
              <button @click="dyzsub(key)">-</button>
            </p>
          </dd>
        </dl>
        小计：{{item.salePrice*item.productUrl}}
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      str: 1,
      flag: false,
      all: false
    };
  },
  mounted() {
    this.list = this.$store.state.cart;
    this.list.map(v => {
      v.productUrl = this.str;
    });
  },
  methods: {
    dyzadd(k) {
      this.list[k].productUrl++;
    },
    dyzsub(k) {
      this.list[k].productUrl--;
    },
    chen() {
      this.all = !this.all;
      this.all = this.flag;
    }
  },
};
</script>
<style lang="scss">
li{
display: flex;
}
dl{
display: flex;
img{
width: 20%;
height: 20%;
}
}
</style>
