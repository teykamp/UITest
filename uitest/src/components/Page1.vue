<template>
    <div>
        <div data-aos="fade-up">
            <v-container class="grey darken-5">
                <v-row align-content="center">
                    <v-col>
                        <v-card flat>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card flat>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card flat class="link">
                        <body><p><a href="" v-scroll-to="'#element'">About</a></p></body>
                        </v-card>
                        
                    </v-col>
                    <v-col>
                        <v-card flat class="link">
                        <body><p><a href="">Work</a></p></body>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card flat class="link">
                        <body><p><a href="">Contact</a></p></body>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card flat>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card flat>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="test"></div>
        <div id="element"> fhdjsfk
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
    this.$scrollTo('#element', 1000, { easing: 'ease' })
  },  
}
</script>

<style scoped>
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
.test {
    height: 8000px;
}
</style>