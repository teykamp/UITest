<template>
  <div>
    <div class="box">
      <div class="letters" v-for="letter in text" :key="letter">
        <div class="letter-box">
          <p>{{letter}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: String
  },
  data() {
        return {

        };
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

@keyframes fadeInAnimation { 
  0% { 
      opacity: 0; 
  } 
  100% { 
      opacity: 1; 
  }
}

.box {
  /* fade in on page load */
  animation: fadeInAnimation ease 3s; 
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;

  display: inline-flex;
}

P {
  font-size: 95px;
  justify-content: center;
  font-family: 'Franklin Gothic Heavy', 'Arial Narrow', Arial, sans-serif;

}

.letter-box {
  transition-duration: 350ms;
}

.letter-box:hover {
  transform: translateY(-50px);
  text-shadow:  0px 7px 0px #edf2fb, 
                0px 14px 0px #e2eafc, 
                0px 21px 0px #d7e3fc, 
                0px 28px 0px #ccdbfd,
                0px 35px 0px #c1d3fe, 
                0px 42px 0px #b6ccfe,
                0px 49px 0px #abc4ff;
}
</style>