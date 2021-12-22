<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <FeaturePage></FeaturePage>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FeaturePage from "@/components/FeaturePage";

export default {
  name: 'Home',
  components: {
    FeaturePage,
    HelloWorld
  }
}
</script>
