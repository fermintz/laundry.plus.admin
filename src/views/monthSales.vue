<template>
  <Base>
    <div class="monthSales">
      <div class="page-head">
        <h2>월별매출내역</h2>
      </div>

      <div class="page-cont">
        <div class="monthControl">
          <v-btn icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <h3>
            2021
          </h3>
          <v-btn icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <v-row>
          <v-col cols="12" md="4" v-for="item in 12" :key="item">
            <div class="salesCard box">
              <h4>{{item}}월</h4>
              <dl>
                <dt>현금결제</dt>
                <dd>766,000 원</dd>
              </dl>
              <dl>
                <dt>카드결제</dt>
                <dd>1,560,000 원</dd>
              </dl>
              <dl class="total">
                <dt>총결제금액</dt>
                <dd>
                  2,500,000 원
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>  
  </Base>
</template>

<script>
import Base from '@/components/layout/base.vue'

export default {
  components:{Base},
}
</script>

<style lang="scss" scoped>

.monthSales{
  .page-head {
    margin-bottom: 20px;
    h2 {
      font-weight: 500;
    }
  }

  .page-cont{
    .monthControl{
      display:flex;
      justify-content: center;
      align-items: center;
      background:#f2f2f2;
      height:60px;
      margin-bottom:30px;
      border-radius:4px;

      h3{
        margin:0 30px;
      }

      .v-btn{
        .v-icon{
          font-size:32px;
        }
      }
    }

    .salesCard{
      h4{
        margin-bottom:15px;
      }
      dl{
        display:flex;
        align-items:center;
        justify-content: space-between;
        margin-bottom:5px;
        dt{
          font-size:14px;
        }
        dd{
          font-size:14px;
        }
      }

      dl.total{
        padding-top:15px;
        margin-top:15px;
        border-top:1px solid #e2e2e2;
        dd{
          font-size:16px;
          font-weight:bold;
          color:#E13D7A
        }
      }

      dl:last-child{
        margin-bottom:0px;
      }
    }
  }
}

</style>