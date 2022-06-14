<template>
  <TreeComponent/>
</template>

<script>
import TreeComponent from './components/TreeComponent.vue'

export default {
  name: 'App',
  components: {
    TreeComponent
  },
  mounted() {
    document.addEventListener('mousemove', this.mouseMoveTrigger)
  },
  methods:{
    mouseMoveTrigger(event){
      var element = document.getElementById(this.$store.state.movingElement);
      if(this.$store.state.moving && element){
        element.classList.add('moving');
        this.$store.state.clientX = event.clientX;
        this.$store.state.clientY = event.clientY;
        element.style.left = event.clientX - 50 + 'px';
        element.style.top = event.clientY - 20 + 'px';
      }
    }
  }
}
</script>