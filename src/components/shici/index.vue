<template>
  <div class="c-shici">
    <div class="c-shici__text" :style="{color: color,fontSize: innerSize + 'px'}">{{innerText}}</div>
    <div class="c-shici__footer" :style="{color: color,fontSize: footerSize + 'px'}">{{footerText}}</div>
  </div>
</template>

<script>
export default {
  name: 'shici_component',
  data() {
    return {

    }
  },
  props: {
    color: {
      type: String,
      default: '#000'
    },
    innerSize: {
      type: Number,
      default: 24
    },
    footerSize: {
      type: Number,
      default: 18
    },
    innerText: {
      type: String,
      required: true,
      default: ''
    },
    footerText: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "fzss";
  src: url('https://chara-static-source.oss-cn-shanghai.aliyuncs.com/font/FZSSJW.TTF') format('truetype');
}
.c-shici {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: transparent;
  font-family: 'fzss';
  justify-content: center;

  &__text {
    display: flex;
    justify-content: center;
    padding-right: 30px;
    padding-left: 30px;
    text-align: justify; // 使用两端对齐，避免文本过长产生的换行空白
  }

  &__footer {
    padding-top: 10px;
    padding-right: 30px;
    text-align: right;
  }
}
</style>
