import { ref , computed , onUnmounted, onMounted } from "vue";
export default function() {
  const time = ref({
    hours : 3,
    minutes : 59,
    secondes : 59
  });
  let timer = ref(null);
  const startCountDown = (() => {
    timer = setInterval(() => {
      if(time.value.secondes > 0 ) {
        time.value.secondes -- ;
      } else {
        if(time.value.minutes > 0) {
        time.value.minutes -- ;
        time.value.secondes = 59 ;
      } else if (time.value.hours > 0) {
        time.value.hours--;
        time.value.minutes = 59;
        time.value.secondes = 59;
      } else {
        clearInterval(timer)
      }}
    }, 1000);
  })
  const formattedTime = computed(() => {
    return {
      hours : String(time.value.hours).padStart(2 , '0'),
      minutes : String(time.value.minutes).padStart(2 , '0'),
      secondes : String(time.value.secondes).padStart(2 , '0'),
    }
  })

  onMounted((startCountDown))
  onUnmounted(() => {
    setTimeout(() => {
      clearInterval(startCountDown)
    })
  })

  return {time , timer , formattedTime , startCountDown }
}