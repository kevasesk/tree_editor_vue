<template>
    <ul>
      <ListItem label="1" :children="[1,2]"/>
      <ListItem label="2" :children="[3,4]"/>
      <ListItem label="3" :children="[5,6]"/>
    </ul>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  components:{
    ListItem

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

li{
  list-style: none;
}
.item{
  border: 1px solid black;
  padding: 5px;
}
.child.closed{
  display:none;
}
.item.moving{
  background-color: green;
  position: absolute;
  width:200px;
}

</style>
