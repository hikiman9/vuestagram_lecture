<template>
    <div style="padding : 10px">
        <h4>Follower</h4>
        <input @input = "search()" v-model="inputName" placeholder="who"/>
            <div class="post-header" v-for="(a, i) in followers" :key="i">
                <div class="profile" style="{background-image: url(${a.image});}"></div>
                <span class="profile-name">{{ a.name }}</span>
            </div>
    </div>
</template>

<!-- 제이슨으로 받아온 데이터를 followersOriginal 에 저장해놓고,,,
followers에 followersOriginal을 그대로 넣어놓는다
v-model로 inputName에 이름을 받는다
followers를 반복문으로 돌려서 inputName을 포함하지 않으면 삭제
inputName이 빈 문자열이면 followers = followersOriginal -->

<script>

import axios from 'axios';

export default {
    mounted() {
        axios.get('/follower.json').then((a)=>{
            this.followersOriginal = [...a.data]
            this.followers = a.data
        })
    },
    data() {
        return {
            followersOriginal : [...[]],
            inputName : '',
            followers : []
        }
    },
    methods: {
        search(){
            this.followers = this.followersOriginal.filter((value) => value.name.includes(this.inputName))
            }
    },
}
</script>

<style>

</style>