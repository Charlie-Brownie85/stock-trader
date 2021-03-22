<template>
  <div class="dropdown" @blur="close">
    <span
      @click="open"
      class="dropdown__text">{{ text }}</span>
    <ul v-if="opened" class="dropdown__list">
      <li
        v-for="item in items"
        :key="item.id"
        @click="onItemClicked(item)"
        class="dropdown__list-item">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Dropdown'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      opened: false,
    }
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    toggle() {
      this.opened = !this.opened;
    },
    onItemClicked(item){
      this.$emit('dropdown-item-clicked', item);
      this.close();
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 10px;
    margin-right: 15px;

    &__list {
      position: absolute;
      width: 100%;
      top: 100%;
      box-shadow: $navbar-shadow;
      background-color: $navbar-bgc;
      padding: 10px 5px;

      &-item {
        padding: 10px;
      }
    }
  }
</style>