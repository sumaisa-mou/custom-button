<template>
  {{ msg }}
    <button class="custom-button">
        <slot/>
    </button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
    }
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
