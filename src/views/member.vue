<template>
  <Base>
    <div class="eqUseList">
      <div class="page-head">
        <h2>회원관리</h2>
      </div>

      <div class="search-box box">
        <div class="options">
          <dl class="date-opt">
            <dt>이용날짜</dt>
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
          <dl class="keyword-opt">
            <dt>회원번호</dt>
            <dd>
              <input type="text" placeholder="'-'를 제외한 전화번호 입력">
            </dd>
          </dl>
          <dl class="keyword-opt">
            <dt>이름</dt>
            <dd>
              <input type="text" placeholder="고객 이름으로 검색">
            </dd>
          </dl>
        </div>

        <div class="btns">
          <v-btn text>검색</v-btn>
        </div>
      </div>

      <div class="page-cont">
        <div class="data-table box">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="15"
          >
            <template v-slot:item.btns>
              <v-btn text class="detailBtn" @click="$refs.userHistory.handle(true)">
                <v-icon>mdi-file-document-outline</v-icon>
                <label>사용내역보기</label>
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>

    <UserHistory ref="userHistory" />   
  </Base>
</template>

<script>
import Base from "@/components/layout/base.vue";
import UserHistory from '@/components/modal/userHistory.vue';

export default {
  components: { Base, UserHistory },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      dateInput1: false,
      dateInput2: false,
      radioGroup: 1,
      headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name',
        // },
        { text: "회원번호", value: "phone" },
        { text: "이름", value: "name" },
        { text: "최근사용장소", value:"place"},
        { text: "최근사용일시", value: "newUseDate" },
        { text: "사용내역", value: "btns" },
      ],
      desserts: [
        {
          phone: "010-8525-4561",
          name: "박수민",
          place:"동아대 남자기숙사 1번",
          newUseDate: "2021-04-20 12:34:55",
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

    .detailBtn{
      border:1px solid #c2c2c2;
      font-size:12px;

      .v-icon{font-size:18px;margin-right:5px;}
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

  .keyword-opt{
    dd{
      width:100%;
      input{
        height:30px;
        border-bottom:1px solid #e2e2e2;
        width:100%;
        max-width:360px;
        outline: none;
      }
      input:focus{
        border-color:#292929
      }
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

      .keyword-opt{
        input{
          width:100%;
          max-width:unset
        }
      }
    }
  }
}
</style>
