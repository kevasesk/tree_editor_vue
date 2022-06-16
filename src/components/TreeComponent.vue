<template>
    <ul>
      <ListItem
          v-for="item in this.$store.state.tree"
          :label="item.label"
          :id="item.id"
          :key="item.id"
          :children="item.children"
          :shadow="item.shadow"
      />
      <FlyItem/>
      <ReplaceItem/>
    </ul>
</template>

<script>
import ListItem from "@/components/ListItem";
import FlyItem from "@/components/FlyItem";
import ReplaceItem from "@/components/ReplaceItem";

export default {
  components:{
    FlyItem,
    ListItem,
    ReplaceItem
  }
}
</script>
