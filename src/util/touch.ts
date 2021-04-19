import { ref } from 'vue';

export function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const touchX = ref(0);
  const touchY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const reset = ()=>{
    startX.value = 0;
    startY.value = 0;
    touchX.value = 0;
    touchY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
  }
  const start = (event: TouchEvent) => {
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };

  const move = (event: TouchEvent) => {
    const touch = event.touches[0];
    touchX.value = touch.clientX - startX.value;
    touchY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(touchX.value);
    offsetY.value = Math.abs(touchY.value);
  };

  return {
    start,
    move,
    reset,
    startX,
    startY,
    touchX,
    touchY,
    offsetX,
    offsetY
  };
}
