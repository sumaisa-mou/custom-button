<template>
  {{ msg }}
    <button class="custom-button">
      Button-<slot/>
    </button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
    }
  },
  created() {
    console.log(this);
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
