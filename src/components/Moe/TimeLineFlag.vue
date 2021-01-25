<template>
  <div class="timeline-flag">
    <Icon
      class="timeline-flag-icon"
      color="var(--color-bili-pink)"
      size="17"
    />
    <span class="timeline-flag-time">{{ currentTime }}</span>
    <span>{{ randomText }}</span>
  </div>
</template>

<script>
import Icon from '@/components/Losting/Icon.vue';
import { ref } from 'vue';

export default {
  components: {
    Icon,
  },
  setup() {
    const currentTime = ref(null);
    const randomText = ref(null);

    const randomArr = [
      '这震撼心灵的番是怎么回事！',
      '为什么你会这么熟练啊',
      '今晚早点睡！',
      '超级高校的观众',
      '试问，你可是我的Master？',
      '大脑…大脑在颤抖！',
    ];

    function getCurrentTime() {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minute < 10) {
        minute = `0${minute}`;
      }
      currentTime.value = `${hour}:${minute}`;
    }
    getCurrentTime();

    function getRandomText() {
      randomText.value = randomArr[Math.floor(Math.random() * randomArr.length)];
    }
    getRandomText();

    return {
      currentTime,
      randomText,
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline-flag {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 15px;
  border-left: 1px solid var(--color-bili-pink);
  color: var(--color-bili-pink);
  font-size: 12px;
  &-icon {
    position: absolute;
    left: -8px;
    background-color: var(--color-white);
  }
  &-time {
    margin: 0 10px 0 15px;
  }
}
</style>
