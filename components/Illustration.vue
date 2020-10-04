<template>
  <div class="illustration illustration-floating" :style="style">
    <div class="illustration__circle-container">
      <div class="illustration__circle"></div>
    </div>
    <div>
      <div class="illustration__square"></div>
      <div class="illustration__line"></div>
      <div class="illustration__line"></div>
      <div class="illustration__line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    style() {
      return {
        animationDelay: `${this.delay}s`
      }
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/mixins';

.illustration {
  display: flex;
  flex-direction: row;
}

.illustration__circle-container {
  margin-right: 3rem;
}
.illustration__circle {
  background-color: var(--accent-global);
  height: 15px;
  width: 15px;
  border-radius: 100%;
}
.illustration__square {
  position: relative;
  display: block;
  width: 60px;
  height: 45px;
  background-color: #d0cde1;
}

.illustration__square::before {
  content: '';
  border: 2px solid #a3a3a3;
  width: 60px;
  height: 45px;
  right: 8px;
  bottom: 8px;
  position: absolute;
}

.illustration__line {
  background-color: #a3a3a3;
  width: 200px;
  height: 2px;
  margin: 1rem 0;
}

.illustration-floating {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}
</style>
