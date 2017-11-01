<template>
  <main>
    <!-- banner -->
    <section class="banner">
      <app-banner></app-banner>
    </section>
    <!-- pains -->
    <section class="pains">
      <app-pains></app-pains>
    </section>
    <!-- slider -->
    <section class="slider">
      <app-slider></app-slider>
    </section>
    <!-- confidence -->
    <section class="confidence">
      <app-confidence></app-confidence>
    </section>
    <!-- catalog -->
    <section class="catalog">
      <app-catalog></app-catalog>
    </section>
    <!-- delivery -->
    <section class="deliver">
      <app-delivery></app-delivery>
    </section>
    <!-- what ull get -->
    <section class="whatullget">
      <app-whatullget></app-whatullget>
    </section>
    <!-- video -->
    <section class="video">
      <app-video></app-video>
    </section>
    <!-- request -->
    <section class="request">
      <app-request></app-request>
    </section>
    <!-- collection -->
    <section class="collection">
      <app-collection></app-collection>
    </section>
    <!-- comments -->
    <!-- <section class="comments"> -->
      <!-- <app-comments></app-comments> -->
    <!-- </section> -->
    <!-- special offer -->
    <section class="special">
      <app-special></app-special>
    </section>
  </main>
</template>

<script>
import banner from './banner'
import pains from './pains'
import slider from './slider'
import confidence from './confidence'
import catalog from './catalog'
import delivery from './delivery'
import whatullget from './whatullget'
import video from './video'
import request from './request'
import comments from './comments'
import collection from './collection'
import special from './special'


  export default {
    components: {
      'app-banner': banner,
      'app-pains': pains,
      'app-slider': slider,
      'app-confidence': confidence,
      'app-catalog': catalog,
      'app-delivery': delivery,
      'app-whatullget': whatullget,
      'app-video': video,
      'app-request': request,
      'app-comments': comments,
      'app-collection': collection,
      'app-special': special
    }
  }
</script>

<style scoped></style>