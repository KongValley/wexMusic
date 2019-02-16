<template>
  <div class="p-ad">
    <div class="p-ad__button-group">
      <c-button icon="face" position="right" bold>
        登录
      </c-button>
      <c-button icon="plus_one" position="right" bold>
        注册
      </c-button>
    </div>

  </div>
</template>

<script>
import CButton from '@/components/button'
export default {
  name: 'ad_page',
  components: {
    CButton
  },
  data() {
    return {
      innerText: '',
      footerText: ''
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/common/var";
.p-ad {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $--color-info;

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
