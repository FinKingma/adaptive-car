<template>
  <div>
    <h1>{{ msg }}</h1>
    <div id="car1" v-bind:style="{left: car1Pos+'px'}">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)"><path fill="#8680D8" d="M44,19h-9l-4.44721-8.89443C30.214,9.42801,29.52148,9,28.76393,9H13.3541 c-0.81782,0-1.55325,0.49792-1.85697,1.25726L8.00024,19H4c-1.65685,0-3,1.34315-3,3v7h46v-7C47,20.34315,45.65685,19,44,19z"></path> <path fill="#5757B2" d="M3,33h42c1.10457,0,2-0.89543,2-2v-2H1v2C1,32.10457,1.89543,33,3,33z"></path> <path fill="#444444" d="M10,39c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S13.30859,39,10,39z"></path> <path fill="#444444" d="M37,39c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S40.30859,39,37,39z"></path> <path fill="#E6E6E6" d="M10,36c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3s3,1.3457,3,3S11.6543,36,10,36z"></path> <path fill="#E6E6E6" d="M37,36c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3s3,1.3457,3,3S38.6543,36,37,36z"></path> <polygon fill="#E6E6E6" points="32.76367,19 28.76367,11 13.35449,11 10.15448,19 "></polygon> <rect x="20" y="11" fill="#8680D8" width="2" height="8"></rect> <path fill="#EFD358" d="M46,26h1v-4h-1c-0.55228,0-1,0.44772-1,1v2C45,25.55228,45.44772,26,46,26z"></path></g></svg>
    </div>
    <div id="car2" v-bind:style="{left: car2Pos+'px'}">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)"><path fill="#E86C60" d="M45.92871,20.06104C45.35742,19.38672,44.52246,19,43.63867,19H32.52051l-6.40275-9.14691 C25.74351,9.31843,25.13192,9,24.47929,9h-12.4481c-1.63565,0-3.1065,0.99584-3.71394,2.51452L5.32324,19H4 c-1.65685,0-3,1.34315-3,3v7h44.51416l1.08447-6.50684C46.74414,21.62158,46.5,20.73535,45.92871,20.06104z"></path> <path fill="#C94F49" d="M1,30c0,1.65686,1.34314,3,3,3h39.15332c0.98047,0,1.80957-0.70215,1.97266-1.6709L45.51416,29H1V30z"></path> <path fill="#E6E6E6" d="M30.07947,19l-5.59998-8H12.03125c-0.82227,0-1.55176,0.49365-1.85645,1.25732L7.47772,19H30.07947z"></path> <path fill="#444444" d="M10,39c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S13.30859,39,10,39z"></path> <path fill="#444444" d="M37,39c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S40.30859,39,37,39z"></path> <path fill="#E6E6E6" d="M10,36c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3s3,1.3457,3,3S11.6543,36,10,36z"></path> <path fill="#E6E6E6" d="M37,36c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3s3,1.3457,3,3S38.6543,36,37,36z"></path> <path fill="#C94F49" d="M43,24h-6c-0.55273,0-1-0.44775-1-1s0.44727-1,1-1h6c0.55273,0,1,0.44775,1,1S43.55273,24,43,24z"></path> <rect x="14" y="11" fill="#E86C60" width="2" height="8"></rect></g></svg>
    </div>
    <div id="carStats">
      <div id="car2Stats">
        <p>Adaptive car</p>
        <input v-model="car2Speed" id="car1speed" v-on:keyup.enter="updateCar2" placeholder="set car 2 speed">
        <div class='button' id="car1update" v-on:click="updateCar2">Update car!</div>
      </div>
      <div id="car1Stats">
        <p>Random car</p>
        <input v-model="car1Speed" id="car2speed" v-on:keyup.enter="updateCar1" placeholder="set car 1 speed">
        <div class='button' id="car2update" v-on:click="updateCar1">Update car!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Race from '@/modules/race'
export default {
  name: 'Cruiser',
  data () {
    return {
      msg: 'Adaptive Cruise Control Tester',
      race: new Race(),
      car1Pos: 0,
      car1Speed: 0,
      car2Pos: 0,
      car2Speed: 0,
      interval: undefined
    }
  },
  mounted () {
    this.todo()
  },
  methods: {
    todo () {
      this.interval = setInterval(() => {
        this.car1Pos = this.race.car1.pos
        this.car2Pos = this.race.car2.pos
      }, 25)
    },
    updateCar1 () {
      this.race.car1.setSpeed(this.car1Speed)
    },
    updateCar2 () {
      this.race.car2.setSpeed(this.car2Speed)
    }
  }
}
</script>

<style src="../assets/style.css">
