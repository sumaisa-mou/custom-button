<template>
  {{ msg }}
<!--    <button class="custom-button">-->
<!--      Btn<slot/>-->
<!--    </button>-->
  <iframe
      ref="customizerIframe"
      :src="iframeSource"
  ></iframe>
</template>
<script>

import {createApp} from "vue";
import Iframe from "../js/Iframe";

export default{
  props: {
    msg: {
      type: String,
    },
    iframeSource: String,
  },
  methods: {
    handleMount() {
      alert('HI');
      console.log(this.contentWindow.document.getElementById(
          "wemail-customizer"
      ));
      // iframeInstance.mount(
      //     this.getElementById(
      //         "wemail-customizer"
      //     )
      // );
    }
  },
  mounted() {
    const vm = this;
    const iframeInstance = createApp(Iframe(vm));
    const iframe = this.$refs.customizerIframe;
    //
    // iframe.addEventListener("load", vm.handleMount);
    iframe.addEventListener("load", () => {
      console.log(iframe.contentWindow.document.getElementById(
          "wemail-customizer"
      ));
      iframeInstance.mount(
          iframe.contentWindow.document.getElementById(
              "wemail-customizer"
          )
      );
    });
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
