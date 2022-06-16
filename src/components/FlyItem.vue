<template>
  <li
      class="item fly"
      v-if="!this.$store.state.fly.hidden"
      :id="this.$store.state.fly.id"
  >
    <span>{{this.$store.state.fly.label}}</span>
  </li>
</template>

<script>
export default {

}
</script>

<style>
.fly{
  background-color: green;
}
</style>