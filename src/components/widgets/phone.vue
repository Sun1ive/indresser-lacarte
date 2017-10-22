<template>
  <div id="phone">
    <div class="icon" @click.stop="offerCall"></div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      offerCall () {
        alert('u have offered call')
        // this.$store.commit('showCatalog')
        // this.$store.commit('closePhoneWidget')
      }
    }
  }
</script>

<style scoped lang='stylus'>
@import url('./../animations/animate.css')

#phone
  position: fixed;
  bottom: 10px;
  right: 30px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 15px;
  z-index: 16;
  background-color: #40bc6b;
  border: 1px solid #333;
  cursor: pointer;
  animation: bounceIn 3s infinite linear both;

.icon
  background-image: url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/phone1-48.png');
  height: 64px;
  width: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -23px;
  margin-left: -23px;

</style>