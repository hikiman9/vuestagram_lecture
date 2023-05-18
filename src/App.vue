<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click='step = 0'>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0" @click='step = 3'>Follower</li>
      <li v-if="step == 1" @click='step++'>Next</li>
      <li v-if="step == 2" @click='publish'>발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕 {{ $store.state.age }}</h4>
  <button @click = "$store.commit('changeAge', 10)">바꾸기</button> -->

  <ContainterComponent :userFilter = 'userFilter' :InstaPostingData='InstaPostingData' :step='step' :imageURL='imageURL' 
  @userText = "postingContent = $event" />

  <button v-if="step == 0 & more < 2" @click='moreContent'>더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change='upload' type="file" id="file" class="inputfile" />
      <label v-if="step == 0" for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>

import ContainterComponent from './components/ContainterComponent.vue';
import InstaPostingData from './assets/InstaPostingData.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ContainterComponent,
  },
  mounted() {
    this.emitter.on('filterSent', (a)=>{
      this.userFilter = a;
    })
  },
  data() {
    return {
      InstaPostingData: InstaPostingData,
      more: 0,
      step: 0,
      imageURL: '',
      postingContent: '',
      userFilter: '',
    }
  },
  methods: {
    moreContent() {
      axios.get(`https://codingapple1.github.io/vue/more${this.more}.json`).then((result) => {
        this.InstaPostingData.push(result.data)
        this.more++;
      })
    },
    upload(e) {
      let uploadFile = e.target.files;
      let url = URL.createObjectURL(uploadFile[0]);
      this.imageURL = this.imageURL + url;
      this.step++
    },
    publish() {
      var newData = {
        name: "Lee Cap",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageURL,
        likes: 0,
        date: "May 10",
        liked: false,
        content: this.postingContent,
        filter: this.userFilter
      }
      this.InstaPostingData.unshift(newData)
      this.step = 0;

    }
  },
}
</script>

<style>
  body {
    margin: 0;
  }

  ul {
    padding: 5px;
    list-style-type: none;
  }

  .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }

  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }

  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }

  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }

  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
  }

  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }

  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }

  .inputfile {
    display: none;
  }

  .input-plus {
    cursor: pointer;
  }

  #app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
</style>
