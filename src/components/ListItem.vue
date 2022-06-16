<template>
  <li
      class="item"
      :class="getClasses()"
      :id="this.id"
  >
    <i
        @click="switchTrigger"
        v-if="this.children && this.children.length > 0 && !this.shadow"
        class="arrow"
        :class="this.open ? 'down' : 'right'"
    ></i>
    <span v-if="!this.shadow" class="label">
       {{this.label}}
    </span>
  </li>
  <ul class="child" :class="this.open ? '' : 'closed'">
    <template v-if="children">
      <ListItem
          v-for="child in this.children"
          :key="child"
          :label="child.label"
          :children="child.children"
      />
    </template>
  </ul>
</template>

<script>
export default {
  props:['label', 'children', 'id', 'shadow'],
  data(){
    return {
      open: false,
      down: false,
    }
  },
  methods:{
    getClasses(){
      var classes = [];
      if(this.down){
        classes.push('moving');
      }
      if(this.shadow){
        classes.push('shadow');
      }
      return classes.join(' ');
    },
    switchTrigger(){
      if(this.children){
        this.open = !this.open;
      }
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
<style>
/* arrow styles */
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
/* arrow styles end */



</style>