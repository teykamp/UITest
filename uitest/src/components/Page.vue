<template>
    <div>
        <div class="title">
            <TextHover text="{welcome to my website}" />
        </div>
        <body>

        </body>
    </div>
</template>

<script>
import TextHover from "./TextHover"
export default {
    components: {
        TextHover
    }
    
}
</script>

<style scoped>
h1 {
    color: #525252;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    text-align: center;
}

.title {
    padding-top: -10px;
    margin: auto;
    text-align: center;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 0px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 0px rgba(0,0,0,0);
    background: #414141;
}
</style>