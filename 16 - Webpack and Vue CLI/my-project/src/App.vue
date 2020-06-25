<template>
  <div class="container">
    <message title="Hello World">This is content.</message>
  </div>
</template>

<script>
  import Message from './components/Message.vue';

  export default {
    components: { Message },
    name: 'app',
    data () {
      return {

      }
    }
  }
</script>

<style>
</style>
