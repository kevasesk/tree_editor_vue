<template>
  <li
      class="item"
      :class="this.down ? 'moving' : ''"
      :id="this.id"
      @mousedown="mouseDownTrigger"
      @mouseup="mouseUpTrigger"
  >
    <i @click="switchTrigger" v-if="this.children" class="arrow" :class="this.open ? 'down' : 'right'"></i>  {{this.label}}
  </li>
  <ul class="child" :class="this.open ? '' : 'closed'">
    <template v-if="children">
      <ListItem v-for="child in this.children" :key="child" :label="child.label"/>
    </template>
  </ul>
</template>

<script>
export default {
  props:['label', 'children', 'id'],
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
      this.$store.state.moving = true;
      this.$store.state.movingElement = this.label;
    },
    mouseUpTrigger(){
      var self = this;
      this.$store.state.moving = false;
      this.$store.state.movingElement = null;

      var items = document.querySelectorAll('.item');
      var insertAfter = null;
      items.forEach(function(value){
        if(value.getBoundingClientRect().top){//for visible only
          if(self.$store.state.clientY > value.getBoundingClientRect().top){
            insertAfter = value.id;
          }
        }
      });
      console.log(insertAfter);//eugenesm
      //this.$store.state.tree.push(insertAfter);//TODO insret after this id
      //TODO remove old position
    },
  }

}
</script>