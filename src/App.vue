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
    document.getElementById('app').addEventListener('mousemove', this.mouseMoveTrigger)
    document.getElementById('app').addEventListener('mousedown', this.mouseDownTrigger)
    document.addEventListener('mouseup', this.mouseUpTrigger)
  },
  methods:{
    mouseMoveTrigger(){
      //console.log(event.target.id);//eugenesm
      // var item = this.$store.getter.getById(event.target.id);
      // if(this.$store.state.moving && item){
      //   element.classList.add('moving');
      //   this.$store.state.clientX = event.clientX;
      //   this.$store.state.clientY = event.clientY;
      //   element.style.left = event.clientX - 50 + 'px';
      //   element.style.top = event.clientY - 20 + 'px';
      // }
    },
    mouseDownTrigger(event){
      this.$store.commit('setItem', {
        id: event.target.id,
        item:{ shadow: true }
      });
      this.$store.state.fly = {
        hidden: false,
        id: event.target.id,
        label: event.target.id // TODO get label from elementt
      }
      this.$store.state.replace = {
        hidden: false
      }

    },
    mouseUpTrigger(){
      this.$store.commit('setItem', {
        id: this.$store.state.fly.id,
        item:{ shadow: false }
      });
      this.$store.state.fly = {
        hidden: true,
        id: null,
        label: null
      }
      this.$store.state.replace = {
        hidden: true
      }
    }
  }
}
</script>
<style>
li{
  list-style: none;
}
.item{
  border: 1px solid black;
  padding: 5px;
  height: 20px;
}
.child.closed{
  display: none;
}
.label{
  margin-left: 10px;
}
.item.moving{
  background-color: green;
  position: absolute;
  width:200px;
}
.item.shadow{
  border:1px solid grey;
}
</style>