<template>
  <Base>
    <div class="monthSales">
      <div class="page-head">
        <h2>월별매출내역</h2>
      </div>

      <div class="page-cont">
        <div class="control">
          <v-btn icon @click="monthPrev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <h3>
            {{year}}.{{month}}
          </h3>
          <v-btn icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <div class="test">
          <h4>테스트 달력</h4>
          <div>{{today}}</div>
          <div>{{year}}</div>
          <div>{{month}}</div>
          <div>{{day}}</div>
          <div>{{firstDay}}</div>
          <div>{{lastDay}}</div>
          <div></div>
        </div>
        
        <div class="calendar">
          <div class="col" v-for="(day, index) in 31" :key="index">
            <div class="day">
              <strong>{{index + 1}}</strong>
              <span>일요일</span> 
            </div>
            <div class="day-cont">
              <dl>
                <dt>카드</dt>
                <dd>134,000원</dd>
              </dl>
              <dl>
                <dt>현금</dt>
                <dd>34,800원</dd>
              </dl>
              <dl class="total">
                <dt>총합계</dt>
                <dd>168,800원</dd>
              </dl>
            </div>
          </div> <!-- col -->
        </div>
      </div>
    </div>  
  </Base>
</template>

<script>
import Base from '@/components/layout/base.vue'
import 'moment';

export default {
  components:{Base},
  data(){
    return{
      today:new Date(), //오늘날짜
      firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      lastDay: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      year: new Date().getFullYear(),
      month: new Date().getMonth()+1,
      day: new Date().getDate(),
    } 
  },
  methods:{
    monthPrev(){
      if(this.month == 0){
        this.month = this.month.setMonth(12);
      }else if(this.month == 13){
        console.log('다음해 1월')
      }else{
        this.month = this.month - 1
      }
    }
  }
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
    .control{
      display:flex;
      justify-content: space-between;
      align-items: center;
      background:#fff;
      border:1px solid #e2e2e2;
      height:60px;
      margin-bottom:15px;
      padding:0 15px;

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

.calendar{
  display:inline-grid;
  grid-template-columns:repeat(7, 1fr);
  border-top:1px solid #e2e2e2;
  border-left:1px solid #e2e2e2;
  width:100%;

  .col{
    width:100%;
    padding:15px;
    background:#fff;
    border-right:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .day{
      strong{font-size:18px;}
      span{font-size:12px;margin-left:5px;color:#888}
    }

    .day-cont{
      margin-top:10px;
      dl{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:12px;
        margin-bottom:5px;

        dt{
          font-size:11;
          font-weight:normal;
          color:#888;
        }
      }
      dl.total{
        margin-top:15px;
        padding-top:15px;
        border-top:1px solid #e2e2e2;

        dd{
          font-weight:bold;
        }
      }
      dl:last-child{
        margin-bottom:0px;
      }
    }
  }

  .col:nth-child(7n){
    strong{color:#008BE8}
    background:#F1F5F8;
  }
  .col:nth-child(7n+1){
    strong{color:#E13D7A}
    background:#F9F2F5;
  }
}

@media screen and (max-width:1280px) {
  .calendar{
    grid-template-columns:repeat(4, 1fr);
  }
}

@media screen and (max-width:960px) {
  .calendar{
    grid-template-columns:repeat(3, 1fr);
  }
}

@media screen and (max-width:720px) {
  .calendar{
    grid-template-columns:repeat(2, 1fr);
  }
}

@media screen and (max-width:480px) {
  .calendar{
    grid-template-columns:repeat(1, 1fr);
  }
}
</style>