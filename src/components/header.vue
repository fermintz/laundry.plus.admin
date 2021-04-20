<template>
  <div class="header">
    <div class="left">
      <div class="m-logo">
        세탁기플러스
      </div>
    </div>
    <div class="right">
      <div class="btns">
        <v-btn icon class="menu"
          @click="drawerHandle"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    drawerHandle(){
      this.$emit('update')
    }
  },
}
</script>

<style lang="scss" scoped>

.header{
  position:sticky;
  top:0px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  border-bottom:1px solid #e2e2e2;
  background:#fff;

  .left{
    padding-left:10px;
     .m-logo{
       display:none;

    }
  }

  .right{
    padding-right:10px;

    .btns{
      .v-btn.logout{
        font-size:12px;
        border-radius:100px;
        background:#e2e2e2;
        margin-left:10px;
      }
      .v-btn.menu{
        margin-left:20px;
      }
    }
  }
}

</style>