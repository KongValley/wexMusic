<template>
  <div class="p-ad">
    <div class="p-ad__title">Charaの音乐</div>
    <c-shici :inner-text="innerText" :footer-text="footerText" color="#fff"></c-shici>
    <div class="p-ad__button-group">
      <div class="p-ad__button">登录😀</div>
      <div class="p-ad__button">注册🚀</div>
    </div>
    
  </div>
</template>

<script>
import CShici from '@/components/shici/index'
import { getShiCiAPI } from '@/api/other'
export default {
  name: 'ad_page',
  components: {
    CShici
  },
  data() {
    return {
      innerText: '',
      footerText: ''
    }
  },
  methods: {
    fetchShici() {
      getShiCiAPI().load(res => {
        const data = res.data
        this.innerText = data.content
        this.footerText = '—— ' + data.origin.dynasty + ' ' + data.origin.author
        // + ' 《' + data.origin.title + '》'
      })
    }
  },
  mounted() {
    this.fetchShici()
  }
}
</script>

<style lang="scss">
.p-ad {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f03752;

  &__title {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 30px;
    color: #fff;
    font-size: 25px;
    text-align: center;
    // font-weight: bold;
  }

  &__button-group {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }

  &__button {
    font-size: 18px;
    width: 40%;
    height: 50px;
    line-height: 50px;
    font-weight: 700;
    // font-family: 'fzss';
    text-align: center;
    color: #f03752;
    background-color:#fff;
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    transition: all 0.5s;
    &:active {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
      outline: none;
    }
  }
}
</style>
