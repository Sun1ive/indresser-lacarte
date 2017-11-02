<template>
<v-container class="borderContainer">
  <div class="bordered"></div>
</v-container>
</template>

<style scoped lang="stylus">
.borderContainer
  min-height 100px
  display flex
  align-items center
  justify-content center

.bordered
  width 100%
  height 2px
  background-color red
  box-shadow  0px 0px 5px 1px red
</style>