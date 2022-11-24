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
  created() {
    console.log(this);
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
