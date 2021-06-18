<template>
  <section>
    <button>Klik hier</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
  @import './Button.sass';
</style>
