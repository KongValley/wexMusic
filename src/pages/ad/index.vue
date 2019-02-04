<template>
  <div class="p-ad">
    <div class="p-ad__title">Chara音乐台</div>
    <c-shici :inner-text="innerText" :footer-text="footerText" color="#fff"></c-shici>
    <div class="p-ad__button-group">
      <c-button icon="face" text="登录" bold position="right"></c-button>
      <c-button icon="plus_one" text="注册" bold></c-button>
    </div>

  </div>
</template>

<script>
import CShici from '@/components/shici/index'
import { getShiCiAPI } from '@/api/other'
import CButton from '@/components/button'
export default {
  name: 'ad_page',
  components: {
    CShici,
    CButton
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
      })
    }
  },
  mounted() {
    this.fetchShici()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/common/var";
.p-ad {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $--color-info;

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
}


</style>
