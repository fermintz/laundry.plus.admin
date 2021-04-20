<template>
  <v-navigation-drawer
    class="drawer"
    v-model="drawer"
    width="240"
    clipped
    app
  >
    <div class="logo">
      <h2>Laundry Plus</h2>
      <h5>세탁플러스</h5>
    </div>
    <ul class="nav">
      <li v-ripple>
        <h5>월별매출통계</h5>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </li>
      <li v-ripple @click="$router.push('/eqList')">
        <h5>장비관리</h5>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </li>
      <li v-ripple>
        <h5>장비원격내역</h5>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </li>
    </ul>
    <div class="btns">
      <v-btn text class="logout">로그아웃</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      drawer: true,
      absolute: false
    }
  },
  methods:{
    handle(){
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer{

  .logo{
    width:240px;
    height:190px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#393939;

    h2{
      font-weight:600;
      color:#fff;
    }
    h5{
      font-size:15px;
      font-weight:400;
      color:#fff;
    }
  }

  ul{
    padding:0px;
    border-top:1px solid #e2e2e2;

    li{
      display:flex;
      justify-content: space-between;
      align-items: center;
      height:60px;
      border-bottom:1px solid #e2e2e2;
      padding:0 20px;

      h5{
        font-weight:400;
        font-size:14px;
      }

      .v-icon{
        color:#d2d2d2;
      }
    }
    li:hover{
      cursor: pointer;
      background:#f8f8f8;
    }
  }

  .btns{
    position: absolute;
    left:0px;
    bottom:0px;
    padding:20px;
    width:100%;

    .v-btn.logout{
      width:100%;
      background:#e2e2e2;
      height:34px;
      border-radius:100px
    }
  }
}
</style>