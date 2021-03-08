<template>
    <div>

        <v-container class=hold>
            <div data-aos="fade-down">
                <v-container fluid>
                    <v-row>
                        <!-- <v-col> -->
                            <v-card flat width="50px">
                                <!-- logo and stuff -->
                                <img src="../assets/logo.png" width="50px" height="50px">
                            </v-card>
                        <!-- </v-col> -->
                        <!-- <v-col> -->
                            <v-card flat class="link" width="120px">
                            <body><p><a href="" v-scroll-to="'#about'">About</a></p></body>
                            </v-card>
                        <!-- </v-col> -->
                        <!-- <v-col> -->
                            <v-card flat class="link" width="120px">
                            <body><p><a href="" v-scroll-to="'#element'">Work</a></p></body>
                            </v-card>
                        <!-- </v-col> -->
                        <!-- <v-col> -->
                            <v-card flat class="link" width="120px">
                            <body><p><a href="" v-scroll-to="'#element'">Contact</a></p></body>
                            </v-card>
                        <!-- </v-col> -->
                    </v-row>
                </v-container>
            </div>
            <hr>
        </v-container>
        <div class="buffer"></div>


        <!-- end header -->
        <v-container class="title">
        <div>
            <h4>Hi There!</h4>
        </div>
        <hr class="line">
        </v-container>
        
        <div id="about">
            <About />
        </div>
    </div>
</template>

<script>
import About from "./About"

export default {
  name: 'Page1',
  components: {
    About,
  },
  data() {
    return {

    }
  },
};
</script>

<style scoped>
.buffer {
    height: 140px;
}
.hold {
    position: fixed;
    overflow: auto;
    z-index: 999;
    background: white;
    width: 100%;
}

.link {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}

body{
  background: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .1em
}

p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}

a{
  display: block;
  color: black;
  text-decoration: none;
  position: relative;
}

a::after{
    content: "";
    background: rgba(0, 0, 0, 0.267);
	mix-blend-mode: exclusion;
    width: calc(100% + 20px);
    height: 0;
    position: absolute;
    bottom: -4px;
    left: -10px;
    transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

a:hover::after{
	height: calc(100% + 8px)
}
#about {
    padding-top:50px;
}
.title {
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: .1em;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    /* Need this for formatting! */
    margin-bottom: -60px; 

}
.line {
    width: 10%;
    margin: auto;
}
</style>