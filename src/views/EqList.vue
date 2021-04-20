<template>
  <Base>
    <div class="eqList">
      <div class="page-head">
        <h2>장비관리</h2>
        <div class="search-box">
          
        </div>
      </div>

      <v-row>
        <v-col lg="4" md="6" v-for="item in 10" :key="item">
          <div class="card">
            <div class="card-head">
              <h4>1번세탁기</h4>
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
              <v-btn text>원격제어</v-btn>
              <v-btn text>사용</v-btn>
              <v-btn text>중지</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </Base>
</template>

<script>
import Base from "@/components/layout/base.vue";

export default {
  name: "Home",
  components: {
    Base,
  },
  data() {
    return {
      switch1: false,
      select: ["Vuetify", "Programming"],
      items: ["Programming", "Design", "Vue", "Vuetify"],
    };
  },
};
</script>

<style lang="scss" scoped>
.eqList {
  .page-head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

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
