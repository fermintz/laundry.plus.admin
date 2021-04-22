<template>
  <Base>
    <div class="eqUseList">
      <div class="page-head">
        <h2>장비 사용내역</h2>
      </div>

      <div class="search-box box">
        <div class="options">
          <dl class="date-opt">
            <dt>날짜검색</dt>
            <dd>
              <span>
                <v-icon>mdi-calendar-outline</v-icon>
                <v-menu
                  v-model="dateInput1"
                  :close-on-content-click="false"
                  :nudge-top="-10"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      type="text"
                      v-model="date1"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="date1"
                    @input="dateInput1 = false"
                  ></v-date-picker>
                </v-menu>
              </span>
              <label>~</label>
              <span>
                <v-icon>mdi-calendar-outline</v-icon>
                <v-menu
                  v-model="dateInput2"
                  :close-on-content-click="false"
                  :nudge-top="-10"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      type="text"
                      v-model="date2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="date2"
                    @input="dateInput2 = false"
                  ></v-date-picker>
                </v-menu>
              </span>
            </dd>
          </dl>
          <dl class="type-opt">
            <dt>사용구분</dt>
            <dd>
              <v-radio-group
                v-model="radioGroup2"
                row
                hide-details
                style="margin-top: 0px"
              >
                <v-radio
                  v-for="item in ['일반', '원격']"
                  :key="item"
                  :label="item"
                  :value="item"
                  :ripple="false"
                  active-class="radio"
                ></v-radio>
              </v-radio-group>
            </dd>
          </dl>
          <dl class="type-opt">
            <dt>결제타입</dt>
            <dd>
              <v-radio-group
                v-model="radioGroup"
                row
                hide-details
                style="margin-top: 0px"
              >
                <v-radio
                  v-for="item in ['전체', '신용카드', '현금']"
                  :key="item"
                  :label="item"
                  :value="item"
                  :ripple="false"
                  active-class="radio"
                ></v-radio>
              </v-radio-group>
            </dd>
          </dl>
          

        </div>

        <div class="btns">
          <v-btn text> 검색 </v-btn>
        </div>
      </div>

      <div class="page-cont">
        <div class="data-table box">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
          ></v-data-table>
        </div>
      </div>
    </div>

  
  </Base>
</template>

<script>
import Base from "@/components/layout/base.vue";


export default {
  components: { Base },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      dateInput1: false,
      dateInput2: false,
      radioGroup: 1,
      radioGroup2: 1,
      headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name',
        // },
        { text: "사용구분", value:"cate"},
        { text: "사용일시", value: "date" },
        { text: "장소", value: "place" },
        { text: "장비명", value: "eqName" },
        { text: "사용한 회원", value: "member" },
        { text: "결제방법", value: "credit" },
        { text: "사용한 금액", value: "price" },
      ],
      desserts: [
        {
          cate: "원격",
          date: "2021-04-20 12:34:55",
          place: "동아대 남자기숙사 1번",
          eqName: "세탁기 1번",
          member: "-",
          credit: '-',
          price: 5000,
        },
        {
          cate: "일반",
          date: "2021-04-19 11:48:23",
          place: "동아대 남자기숙사 1번",
          eqName: "세탁기 1번",
          member: "010-8525-4561",
          credit: '카드',
          price: 8000,
        },
        {
          cate: "일반",
          date: "2021-04-19 11:48:23",
          place: "동아대 남자기숙사 1번",
          eqName: "세탁기 1번",
          member: "010-8525-4561",
          credit: '현금',
          price: 8000,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.eqUseList {
  .page-head {
    margin-bottom: 20px;

    h2 {
      font-weight: 500;
    }
  }

  .page-cont {
    .data-table {
      padding: 0px;
      background: #fff;
    }
  }
}

.search-box {
  padding: 0px;
  margin-bottom: 15px;

  .options {
    padding: 20px;

    dl {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      dt {
        width: 120px;
        font-size: 13px;
      }

      dd {
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
    dl:last-child {
      margin-bottom: 0px;
    }
  }

  .btns {
    height: 60px;
    padding: 0 20px;
    border-top: 1px solid #e2e2e2;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .v-btn {
      background: #292929;
      color: #fff;
      padding: 0px;
      height: 30px;
    }
  }

  .date-opt {
    dd {
      label {
        margin: 0 10px;
      }

      span {
        position: relative;
        display: flex;
        align-items: center;

        .v-icon {
          position: absolute;
          font-size: 20px;
          left: 5px;
        }

        input {
          border-bottom: 1px solid #e2e2e2;
          outline: none;
          height: 34px;
          padding-left: 35px;
        }

        input:focus {
          border-color: #007cdb;
        }
      }

      .quick {
        margin-left: 20px;
        .v-btn {
          max-height: 28px;
          margin-right: 5px;
          border: 1px solid #d2d2d2;
        }
      }
    }
  }

  .type-opt{
    .v-label{
      font-size:12px !important;
    }
  }
}

@media screen and(max-width:960px) {
  .search-box {
    .options {
      dl {
        flex-direction: column;
        align-items: flex-start;

        dt{
          margin-bottom:10px;
        }
      }

      .date-opt{

        dt{
          margin-bottom:10px;
        }

        dd{
          width:100%;
          flex-direction: column;
          align-items: flex-start;

          span{
            width:100%;
            margin-bottom:10px;


            input{
              width:100%;
              text-align:right;
            }
          }
          label{
            display:none;
          }
        }
      }
    }
  }
}
</style>
