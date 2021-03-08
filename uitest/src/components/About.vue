<template>
    <div class="page">
        <div class="padding"></div>
        <div class="box"></div>
        <v-card class="about" max-width="500px" flat data-aos="fade-right">
            <h1>About</h1>
            <p>I dont know</p>
        </v-card>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.page {
    display: flex;
}
.box {
    height: 6000px;
    width: 240px;
    margin-right: 10px;
    background: black;
    z-index: 100;
    margin-top: 50px;

}
.padding {
    padding-right: 20%;
}

.about {
    margin-top: 72px;
}

</style>