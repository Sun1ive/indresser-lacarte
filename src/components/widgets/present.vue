<template>
  <div v-if="isVisible" class="present">
    <div class="icon" @click.stop="subscribe"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      subscribe () {
        this.$store.commit('showPresent');
      }
    },
    computed: {
      isVisible () {
        return this.$store.state.present
      }
    },
    mounted () {
      setTimeout (() => {
        this.$store.commit('showPresentIcon');
      }, 10000)
    }
  }
</script>

<style scoped lang='stylus'>
@import url('./../animations/animate.css')

.present
  position: fixed;
  width: 90px;
  height: 90px;
  bottom: 15%;
  left: 8px;
  border-radius: 50%;
  cursor: pointer;
  animation: fadeOut 5s infinite linear both
  &:hover
    animation none

.icon
  position: absolute;
  width: 64px;
  height: 64px;
  background-image: url('/static/gift.svg')
  background-size cover
  top 50%
  left 50%
  transform translate(-50%,-50%)

</style>