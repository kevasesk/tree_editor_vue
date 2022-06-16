<template>
  <li
      class="item replace"
      v-if="!this.$store.state.replace.hidden"
  >
  </li>
</template>

<script>
export default {

}
</script>

<style>
.replace{
  background-color: dodgerblue;
}
</style>