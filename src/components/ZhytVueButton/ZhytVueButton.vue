<template>
  <div class="my-button">
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.my-button {
  color: blue;
  background-color: red;
  font-size: 20px;
}
</style>
