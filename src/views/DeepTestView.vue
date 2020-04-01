<template>
  <div class="view">
    <deep-test></deep-test>
  </div>
</template>

<script>
import DeepTest from '@/components/DeepTest'

export default {
  name: 'DeepTestView',
  components: {
    DeepTest
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
}
</script>


<style scoped>


/* .ex_deep{
    background:red;
} */

.ex_deep /deep/ p{
    color:purple;
}
</style>
