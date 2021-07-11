<template>
  <div
    :class="[$style.Skeleton, $style[variant], $style[animation]]"
    :style="{'width': width + 'px !important', 'height': height + 'px !important'}"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      validators: (value) => ['text', 'rect', 'circle'].includes(value),
    },
    animation: {
      type: String,
      validators: (value) => ['pulse', 'wave'].includes(value),
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
}
</script>

<style module>
.text {
  width: 100px;
  height: 20px;
  border-radius: 10px;
}
.rect {
  width: 100px;
  height: 50px;
  border-radius: 10px;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.wave {
  background: linear-gradient(-90deg, #ecebeb 0%, #fcfcfc 50%, #ecebeb 100%);
  background-size: 400% 400%;
  animation: wave 1.2s ease-in-out infinite;
}
@keyframes wave {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}

.pulse {
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
