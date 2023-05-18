<template>
    <div>
        <div v-if="step == 0">
            <PostComponent :InstaPosting='InstaPostingData[i]' :i='i' v-for="(a, i) in InstaPostingData" :key="i" />
        </div>

        <div v-if="step == 1">
            <div :class=userFilter class="upload-image" :style="{ backgroundImage: `url(${imageURL})` }"></div>
            <div class="filters">
                <FilterComponent :filter='filter' :imageURL='imageURL' v-for="(filter, i) in filters" :key='i'>
                    <span>{{ filter }}</span>
                </FilterComponent>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div :class=userFilter class="upload-image" :style="{ backgroundImage: `url(${imageURL})` }"></div>
            <div class="write">
                <textarea @input="$emit('userText', $event.target.value)" class="write-box">write!</textarea>
            </div>
        </div>

        <div v-if="step == 3">
            <MyPageComponent/>
        </div>
    </div>
</template>

<script>

import PostComponent from './PostComponent.vue';
import FilterComponent from './FilterComponent.vue'
import MyPageComponent from './MyPageComponent.vue';

export default {
    name: "ContainerComponent",
    components: {
        PostComponent,
        FilterComponent,
        MyPageComponent,
    },
    props: {
        InstaPostingData: Array,
        step: Number,
        imageURL: String,
        userFilter: String,
    },
    data() {
        return {
            filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>