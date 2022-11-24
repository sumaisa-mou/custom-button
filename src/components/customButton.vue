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
    const proxy1 = new Proxy(this)
    console.log(self);
    console.log(this.$root);
    console.log(proxy1);
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
