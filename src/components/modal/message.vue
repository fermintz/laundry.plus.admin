<template>
  <v-dialog v-model="visible" max-width="420">
    <div class="modal">
      <div class="head">
        <h4>{{title}}</h4>
      </div>
      <div class="cont">
        <span>
          {{text}}
        </span>
      </div>
      <div class="bottom">
        <v-btn text> 취소</v-btn>
        <v-btn text> 확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import MixinModal from "@/mixins/modal.vue";

export default {
  mixins: [MixinModal],
  props:['title', 'text'],
};
</script>

<style lang="scss" scoped>
.modal {
  .cont{
    
  }
}
</style>
