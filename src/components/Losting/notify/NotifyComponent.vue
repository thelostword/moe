<template>
  <ul class="Notify-list">
    <li
      class="Notify-item"
      v-for="(item, index) in NotifyList"
      :key="index"
      :class="setClass(item.type)"
    >
      <div v-if="item.type=='error'" v-html="notifyIconError"></div>
      <div v-else-if="item.type=='info'" v-html="notifyIconInfo"></div>
      <div v-else-if="item.type=='wraning'" v-html="notifyIconWraning"></div>
      <div v-else-if="item.type=='success'" v-html="notifyIconSuccess"></div>
      <div class="Notify-item__text">
        <strong>{{ item.title }}</strong>
        <span v-if="item.content">{{ item.content }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
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
    const notifyIconError = `
      <svg t="1610795647730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3169" width="24" height="24">
        <path d="M512 0.512c282.112 0 511.488 229.376 511.488 511.488s-229.376 511.488-511.488 511.488c-76.8 0-152.064-16.896-221.184-50.176-12.8-6.144-18.432-22.016-12.288-34.816 6.144-12.8 22.016-18.432 34.816-12.288 61.952 29.696 130.048 45.056 198.656 45.056 253.44 0 459.264-206.336 459.264-459.264S764.928 52.736 512 52.736 52.736 259.072 52.736 512c0 61.952 12.288 123.392 36.864 180.224 5.632 13.312-0.512 28.672-13.824 34.304-13.312 5.632-28.672-0.512-34.304-13.824-27.136-63.488-40.96-131.584-40.96-200.704C0.512 229.888 229.888 0.512 512 0.512z" fill="#ff5252" p-id="3170"></path>
        <path d="M632.32 698.368l-307.2-307.2 67.072-67.072 307.2 307.2c0.512 0-67.072 67.072-67.072 67.072z" fill="#ff5252" p-id="3171"></path>
        <path d="M324.608 631.296l307.2-307.2 67.072 67.072-307.2 307.2c0 0.512-67.072-67.072-67.072-67.072z" fill="#ff5252" p-id="3172"></path>
      </svg>`;
    const notifyIconInfo = `
      <svg t="1610803329976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7763" width="24" height="24">
        <path d="M512 985.6C250.88 985.6 38.4 773.12 38.4 512S250.88 38.4 512 38.4 985.6 250.88 985.6 512 773.12 985.6 512 985.6z m0-880.64c-224.256 0-407.04 182.784-407.04 407.04s182.784 407.04 407.04 407.04 407.04-182.784 407.04-407.04-182.784-407.04-407.04-407.04z" fill="#1867c0" p-id="7764"></path>
        <path d="M537.6 409.6c-24.064 1.024-44.032-17.92-45.056-41.472s17.92-44.032 41.472-45.056h3.072c24.064 1.024 42.496 20.992 41.472 45.056 0 22.528-18.432 40.96-40.96 41.472z m-147.968 128C368.64 555.008 447.488 455.68 476.16 438.272c28.16-17.408 78.336-4.096 71.68 36.352-7.168 40.448-50.688 189.44-60.928 224.768-10.24 35.328 61.44-32.768 75.776-41.472 14.336-8.704-54.272 80.384-86.528 98.816-32.256 18.432-80.896-6.656-71.168-40.448 9.728-33.792 45.056-160.256 59.904-210.432 14.336-50.176-54.272 14.336-75.264 31.744z" fill="#1867c0" p-id="7765"></path>
      </svg>`;
    const notifyIconSuccess = `
      <svg t="1610800128037" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6776" width="24" height="24">
        <path d="M512 36.571429C249.417143 36.571429 36.571429 249.417143 36.571429 512s212.845714 475.428571 475.428571 475.428571 475.428571-212.845714 475.428571-475.428571S774.582857 36.571429 512 36.571429z m0 73.142857a402.285714 402.285714 0 1 1 0 804.571428 402.285714 402.285714 0 0 1 0-804.571428z" fill="#4caf50" p-id="6777"></path>
        <path d="M268.970667 511.707429a36.571429 36.571429 0 0 0-3.267048 47.932952l3.267048 3.754667L443.245714 737.767619l302.372572-322.950095a36.571429 36.571429 0 0 0-49.737143-53.394286l-3.657143 3.413333-250.684952 267.702858-120.880762-120.783239a36.571429 36.571429 0 0 0-47.981715-3.315809l-3.705904 3.315809z" fill="#4caf50" p-id="6778"></path>
      </svg>`;
    const notifyIconWraning = `
      <svg t="1610799606890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5644" width="24" height="24">
        <path d="M884.4 907.5H139.6c-26.4 0-50-13.6-63.2-36.5-13.2-22.9-13.2-50.1 0-73l372.4-645c13.2-22.9 36.8-36.5 63.2-36.5 26.4 0 50 13.6 63.2 36.5l372.4 645c13.2 22.9 13.2 50.1 0 73s-36.8 36.5-63.2 36.5zM124.9 826c-4.4 7.7-1.5 14.4 0 17s5.9 8.5 14.7 8.5h744.8c8.9 0 13.2-5.9 14.7-8.5s4.4-9.3 0-17L526.7 181c-4.4-7.7-11.8-8.5-14.7-8.5s-10.3 0.8-14.7 8.5L124.9 826z" fill="#fb8c00" p-id="5645"></path>
        <path d="M484 342h56v340h-56zM484 731.9h56v56h-56z" fill="#fb8c00" p-id="5646"></path>
      </svg>`;
    return {
      setClass,
      notifyIconError,
      notifyIconInfo,
      notifyIconSuccess,
      notifyIconWraning,
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
