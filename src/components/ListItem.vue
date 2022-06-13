<template>
  <li
      class="item"
      :class="this.down ? 'moving' : ''"
      @click="switchTrigger"
      @mousedown="mouseDownTrigger"
      @mouseup="mouseUpTrigger"
      @mousemove="mouseMoveTrigger($event)"
  >
    <i v-if="this.children" class="arrow" :class="this.open ? 'down' : 'right'"></i>  {{this.label}}
  </li>
  <ul class="child" :class="this.open ? '' : 'closed'">
    <template v-if="children">
      <ListItem v-for="child in this.children" :key="child" :label="child"/>
    </template>
  </ul>
</template>

<script>
export default {
  props:['label', 'children'],
  data(){
    return {
      open: false,
      down: false,
    }
  },
  methods:{
    switchTrigger(){
      if(this.children){
        this.open = !this.open;
      }
    },
    mouseDownTrigger(){
      this.down = true;
    },
    mouseUpTrigger(){
      this.down = false;
    },
    mouseMoveTrigger(event){
      if(this.down){
        event.target.style.left = event.clientX - 10 + 'px';
        event.target.style.top = event.clientY - 10 + 'px';
      }


    }
  }

}
</script>