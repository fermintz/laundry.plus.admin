<template>
  <Base>
    <div class="eqList">
      <div class="page-head">
        <v-row>
          <v-col  cols="12" md="8">
            <h2>장비관리</h2>
          </v-col>
          <v-col cols="12"  md="4">
            <v-autocomplete
            v-model="values"
            :items="items"
            hide-details
            outlined
            dense
            chips
            small-chips
            multiple
            />
          </v-col>
        </v-row>
       </div>

      <v-row>
        <v-col lg="4" md="6" v-for="item in 10" :key="item">
          <div class="card">
            <div class="card-head">
              <h4>{{item}}번세탁기</h4>
              <div class="state">
                <h5>동작중</h5>
              </div>
            </div>

            <div class="card-cont">
              <dl>
                <dt>장비위치</dt>
                <dd>A대 기숙사</dd>
              </dl>
              <dl>
                <dt>장비이름</dt>
                <dd>A대 세탁기</dd>
              </dl>
            </div>

            <div class="card-bottom">
              <v-btn text @click="$refs.eqControl.handle(true)">원격제어</v-btn>
              <v-btn text @click="$refs.message.handle(true)">사용</v-btn>
              <v-btn text>중지</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

      <EqControl  ref="eqControl" />
      <Message 
        ref="message"  
        title="장비사용"
        text="장비를 사용으로 변경하시겠습니까?"
      />
  </Base>
</template>

<script>
import Base from "@/components/layout/base.vue";
import EqControl from '@/components/modal/eqControl.vue';
import Message from '@/components/modal/message.vue';


export default {
  name: "Home",
  components: {
    Base, EqControl, Message
  },
  data() {
    return {
      switch1: false,
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: ['foo', 'bar'],
      value: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.eqList {

  .page-head {
    margin-bottom: 20px;
    h2 {
      font-weight: 500;
    }

    .search {
      position: relative;
      display: flex;
      align-items: center;
    }
  }

  .card {
    border: 1px solid #d2d2d2;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);

    .card-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #e2e2e2;
      padding: 0 15px;

      .state {
        color: #1100ff;
      }
    }

    .card-cont {
      padding: 20px;

      dl {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
      dl:last-child {
        margin-bottom: 0px;
      }
    }

    .card-bottom {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10px;
      background: #f8f8f8;

      .v-btn {
        border: 1px solid #e2e2e2;
        background: #fff;
        padding: 0 15px;
        border-radius: 15px;
        height: 30px;
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
