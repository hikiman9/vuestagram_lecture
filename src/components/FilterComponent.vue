<template>
    <div class="filter-item" :class = filter @click = 'sendFilter' :style="{ backgroundImage: `url(${imageURL})` }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'FilterComponent',
    methods: {
        sendFilter(){
            this.emitter.emit('filterSent',this.filter)
        }
    },
    props : {
        imageURL : String,
        filter : String,
    }
}
</script>

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color: white;
        background-size: cover;
        background-position: center;
    }
</style>