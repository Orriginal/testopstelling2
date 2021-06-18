<template>
  <section>
    <h1>My Vue Web Components</h1>
    <div>dit is: {{ msg }}</div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyWebComponent extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="sass">
  @import "./MyWebComponent.sass"
</style>
