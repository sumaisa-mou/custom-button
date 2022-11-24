<template>
  {{ msg }}
    <button class="custom-button">
      Button-<slot/>
    </button>
</template>
<script>

export default{
  props: {
    msg: {
      type: String,
    }
  },
  mounted() {
    const self = this;
    const proxy1 = new Proxy(self, {})
    console.log(this);
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
