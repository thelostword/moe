<template>
  <ul class="Notify-list">
    <li
      class="Notify-item"
      v-for="(item, index) in NotifyList"
      :key="index"
      :class="setClass(item.type)"
    >
      <Icon :icon="item.type" size="30" :color="setColor(item.type)"/>
      <div class="Notify-item__text">
        <strong>{{ item.title }}</strong>
        <span v-if="item.content">{{ item.content }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Losting/Icon.vue';

export default {
  components: {
    Icon,
  },
  props: ['NotifyList'],
  setup() {
    function setClass(type) {
      switch (type) {
        case 'wraning':
          return 'Notify-wraning-item';
        case 'error':
          return 'Notify-error-item';
        case 'success':
          return 'Notify-success-item';
        default:
          return 'Notify-info-item';
      }
    }

    function setColor(type) {
      switch (type) {
        case 'wraning':
          return '#fb8c00';
        case 'error':
          return '#ff5252';
        case 'success':
          return '#4caf50';
        default:
          return '#1867c0';
      }
    }

    return {
      setClass,
      setColor,
    };
  },
};
</script>

<style lang="scss" scoped>
.Notify-list {
  position: fixed;
  top: 60px;
  right: 15px;
  z-index: 1000;
  .Notify-item {
    display: flex;
    width: 250px;
    padding: 12px 15px 12px 10px;
    margin-bottom: 12px;
    font-size: 14px;
    box-shadow: 0 5px 5px 0 hsla(0, 0%, 80.4%, 0.5);
    border-radius: 4px;
    &__text {
      margin-left: 10px;
      >span {
        display: block;
        margin-top: 5px;
        word-break: break-all;
      }
    }
  }
  .Notify-info-item {
    background-color: rgb(229,243,254);
    color: #1867c0;
  }
  .Notify-error-item {
    background-color: #f6e3e3;
    color: #ff5252;
  }
  .Notify-wraning-item {
    background-color: rgb(255,241,225);
    color: #fb8c00;
  }
  .Notify-success-item {
    background-color: rgb(234,246,234);
    color: #4caf50;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
