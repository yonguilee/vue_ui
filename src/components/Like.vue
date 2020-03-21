<template>
  <div class="ex ex_like">
    <div class="user_info">
      <div class="user_thumb" v-for="user in userList.slice(0,`${maxIndex}`)" :key="user.index">
        <img :src="user.photo" :alt="`${user.name} 프로필 사진`">
      </div>
      <span v-show="userList.length>maxIndex">외 {{totalLikeNum-maxIndex}}명</span>
    </div>

    <div class="count_info">
        <button type="button" class="btn like_off" v-show="!likeStatus" @click="changeStatus()">좋아요</button>
        <button type="button" class="btn like_on" v-show="likeStatus" @click="changeStatus()">좋아요 취소</button>
        <span class="num">{{totalLikeNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Like',
  data() {
    return {
      likeStatus: false,
      maxIndex: 3,
      totalLikeNum: 4,
      userList: [
        {
          name: '브라운',
          photo: require('@/assets/img_user1.png')
        },
        {
          name: '피자',
          photo: require('@/assets/img_user2.png')
        },
        {
          name: '천혜향',
          photo: require('@/assets/img_user3.png')
        },
        {
          name: '퐁듀',
          photo: require('@/assets/img_user1.png')
        }
      ]
    };
  },
  methods: {
    changeStatus() {
      this.likeStatus=!this.likeStatus;

      if(this.likeStatus){
        this.totalLikeNum = this.totalLikeNum+1;
      }else{
        this.totalLikeNum = this.totalLikeNum-1;
      }
    }
  }
}
</script>


<style scoped>
.ex_like{
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
  padding: 10px 30px;
  background: #fff;
  border: 1px solid #e5e5e5;

}

.user_info{
  display: flex;
  align-items:center;
}

.user_thumb{
  overflow: hidden;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: -8px;
  background: #eee;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
}

.user_thumb:first-child{
  margin-left:0;
}

.user_thumb img{
  width: 100%; 
  height: auto;
}

.user_info span{
  padding-left: 4px;
  font-size: 12px;
  color: #666;
}
.btn{
  overflow: hidden;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border: 0;
  text-indent: -999px;
}

.btn.like_on{
  background:url('../assets/ico_like_on.png');
  background-size: cover;
}

.btn.like_off{
  background:url('../assets/ico_like_off.png');
  background-size: cover;
}

.num{
  padding-left: 5px;
  font-size: 16px;
  color:#000;
  /* color: #00397c; */
}
</style>
