<template>
  <v-dialog v-model="visible" max-width="900">
    <div class="modal">
      <div class="head">
        <h4>4561님 사용내역</h4>
      </div>
      <div class="cont">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
        >
        </v-data-table>
      </div>
      <div class="bottom">
        <v-btn text @click="handle(false)">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import MixinModal from "@/mixins/modal.vue";

export default {
  mixins: [MixinModal],
  data(){
    return{
      headers: [
        { text: "사용일시", value: "date" },
        { text: "사용장소", value: "place" },
        { text: "사용금액", value: "price"},

      ],
      desserts: [
        {
          date: "2021-04-20 12:34:55",
          place:"동아대 남자기숙사",
          price:5000,
        },
        {
          date: "2021-04-19 11:37:20",
          place:"동아대 남자기숙사",
          price:5000,
        },
        {
          date: "2021-04-20 18:24:23",
          place:"동아대 남자기숙사",
          price:5000,
        },
      ],
    }
  }
  
};
</script>

<style lang="scss" scoped>
.modal {
  .cont{
    
  }
}
</style>
