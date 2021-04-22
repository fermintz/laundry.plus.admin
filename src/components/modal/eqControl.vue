<template>
  <v-dialog v-model="visible" max-width="420">
    <div class="modal">
      <div class="head">
        <h4>장비원격제어</h4>
      </div>
      <div class="cont">
        <dl class="price">
          <dt>금액입력</dt>
          <dd>
            <v-text-field
              hide-details
              placeholder="투입하실 금액을 입력해주세요"
            />
          </dd>
        </dl>
        <dl class="why">
          <dt>사유입력</dt>
          <dd>
            <v-select hide-details outlined dense 
              placeholder="사유선택"
              :items="['내가 잘못해서', '니가 잘못해서']"
            />
          </dd>
          <dd>
            <v-textarea counter outlined dense placeholder="사유 직접입력"/>
          </dd>
        </dl>
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
};
</script>

<style lang="scss" scoped>
.modal {
  .cont {
    dl {
      margin-bottom: 30px;
      dt {
        margin-bottom: 10px;
        font-size: 13px;
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    dl.why {
      dd {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
