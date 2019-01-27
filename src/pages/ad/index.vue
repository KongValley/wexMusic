<template>
  <div class="p-ad">
    <c-shici :inner-text="innerText" :footer-text="footerText" color="#fff"></c-shici>
  </div>
</template>

<script>
import CShici from '@/components/shici/index'
import { getShiCiAPI } from '@/api/other'
export default {
  name: '',
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
  justify-content: center;
  align-items: center;
  background: #f03752;
}
</style>
