<template>
  {{ msg }}
    <button class="custom-button">
      Button-<slot/>
    </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
    }
  },
  mounted() {
    const self = this;
    console.log(self);
    console.log(this.$root);
  }
})
</script>
<style scoped>
 .custom-button{
     background: blue;
     color: white;
     border: none;
     outline: none;
 }
</style>
