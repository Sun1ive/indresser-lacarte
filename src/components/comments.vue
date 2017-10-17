<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 class="test text-xs-center">
        <img src="/static/birka.png" alt="background">
        <div class="content">
          <div class="avatar">
            <img src="http://funkyimg.com/i/2ynJE.png" alt="Oksana">
          </div>
        </div>
        <div class="content2">Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены. Рекомендую и Вам убедиться в этом.</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.test
  position relative
  img
    width 100%
    max-height 700px

.avatar
  height 300px
  width 300px

.content
  position absolute
  top 50%
  left 15%
  transform translate(0%, -50%)

.content2
  position absolute
  right 15%
  top 50%
  transform translate(15%, -50%)
  width 50%
  background-color #F3B020
  padding 1.5rem
  font-size 1.6rem
  color #fff
</style>