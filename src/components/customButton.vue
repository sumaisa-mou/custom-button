<template>
  {{ msg }}
    <button class="custom-button">
      Btn<slot/>
    </button>
</template>
<script>

import {getCurrentInstance} from "vue";

export default{
  props: {
    msg: {
      type: String,
    }
  },
  mounted() {
    const proxy1 = new Proxy(self, {})
    console.log(getCurrentInstance());
    console.log(this.msg);
    console.log({...proxy1});
  }
}
</script>
<style scoped>
 .custom-button{
     background: blue;
     color: white;
     border: none;
     outline: none;
 }
</style>
