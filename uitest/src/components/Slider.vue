<template>
    <body>
        <input type="range" value="50" class="slider" v-model="value"> 
        <p>Value: {{value}}</p>
    </body>  
</template>

<script>
export default {
    data() {
        return {
            value: 50,
        };
    }
}
</script>

<style scoped>
p {
    padding: 50px;
}

body {
    margin: 0;
    display: flex;
    background: rgb(10, 11, 12);
    border-radius: 25px;
}

input[type="range"] { 
    margin-left: 5px;
    margin-top: 10px;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 20px;
    width: 400px;
    cursor: pointer;
    border-radius: 0;
}

::-webkit-slider-runnable-track {
    background: rgb(10, 11, 12);
}

::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px; 
    height: 40px;
    background: rgb(66, 66, 66);
    box-shadow: -100vw 0 0 100vw rgb(220, 33, 245);
    border: 2px solid rgb(33, 34, 34);
}
</style>