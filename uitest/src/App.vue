<template>
  <div>
    <div class="all">
      <body>
        <div class="pad">
          <div class="hamburger">
            <SideBar />
          </div>
        </div>
        <div class="page">
          <Page />
        </div>
      </body>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar"
import Page from "./components/Page"

export default {
  name: 'App',
  components: {
    SideBar,
    Page
  },
  data() {
    return {

    }
  },
};
</script>

<style scoped>
body {
  background-image: url("./assets/tile.svg");
  background-repeat: repeat;
  height: 1800px;

}
.pad {  
  padding: 10px;
}
.hamburger {
  background: #ca3e47;
  width: 35px;
  height: 36px;
  border-radius: 30px;
  margin: auto;
  transition-duration: 100ms;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 0px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 5px 0px rgba(0,0,0,0);
}

.hamburger:hover {
  background: tomato;
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 0px;
}

</style>
