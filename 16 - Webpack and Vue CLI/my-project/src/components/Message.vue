<template>
  <article class="message">
    <div class="message-header">
      <p>{{title}}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
    export default {
      props: ['title']
    }
</script>

<style scoped>

</style>
