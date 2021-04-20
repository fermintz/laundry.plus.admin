<template>
  <v-app>
    <Drawer ref="drawer"/>
    <v-main app>
      <Header @update="drawerOn"/>
      <div class="contents">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/drawer.vue';
import Header from '@/components/header.vue';

export default {
  components:{
    Drawer, Header
  },
  data(){
    return{
     
    }
  },
  methods:{
    drawerOn(){
      this.$refs.drawer.handle()
    }
  }

}
</script>

<style lang="scss" scoped>

.contents{
  background:#f8f8f8;
  height:100%;
  padding:20px;
}

</style>