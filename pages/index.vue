<template>
  <article class="pt-[80px] pb-20">
    <div class="relative w-[47%] mx-auto">
      <img class="blue-star absolute right-[-25%] top-[30%] w-[9%]" src="/blue-star@2x.png">
      <img class="logo-top-right absolute right-[-40%] top-[-10%] w-[42%]" src="/logo-right@2x.png" alt="">
      <img class="left-top-star absolute left-[-50%] top-[-15%] w-[52%]" src="/star@2x.png" alt="">
      <img class="diamond absolute left-[-50%] top-[60%] w-[26%]" src="/diamond@2x.png" alt="">
      <img class="right-down-star absolute left-[-20%] top-[45%] w-[10%]" src="/right-down-star@2x.png" alt="">
      <img class="logo-1 w-full" src="/title.png" alt="">
      <img class="logo-2 absolute left-1/2 -translate-x-1/2 top-[27%] w-[136%] max-w-none z-10" src="/logo@2x.png" alt="">
      <img class="party absolute right-[-41%] bottom-[20%] w-[33%]" src="/party@2x.png" alt="">
    </div>
    <div class="relative w-[74%] mx-auto mt-10">

      <img class="content-image w-full" src="/content.png" alt="">
      <h2 class="absolute top-0 left-1/2 -translate-x-1/2 text-nowrap top-[3%]">{{ value }}</h2>
      <img class="content-blue-star absolute left-[-15%] top-[20%] w-[7%]" src="/blue-star@2x.png">
      <img class="content-leaf absolute left-[-5%] top-[-5%] w-[20%]" src="/leaf@2x.png" alt="">
      <img class="content-cake absolute right-[-5%] top-[-5%] w-[17%]" src="/cake@2x.png" alt="">
      <img class="content-right-down-heart-pink absolute right-[-3%] bottom-[-3%] w-[16%]" src="/right-down-heart-pink@2x.png" alt="">
      <img class="content-right-down-heart-blue absolute right-[-5%] bottom-[8%] w-[9%]" src="/right-down-heart-blue@2x.png" alt="">
      <img class="content-right-down-star absolute right-[-12%] bottom-[0%] w-[6%]" src="/right-down-star@2x.png" alt="">
      <img class="content-left-logo w-[7%] absolute bottom-0 left-[-12%]" src="/left-logo.svg" alt="">
      <img class="copyright absolute left-1/2 -translate-x-1/2 bottom-[-4%] w-[45%]" src="/copyright@2x.png" alt="">
      <img>
    </div>
  </article>
</template>

<script setup>
const { $supabase } = useNuxtApp()
import { gsap } from 'gsap';

const loading = ref(true)
const errorMessage = ref('')
const value = ref(null)

const fetchValue = async () => {
  loading.value = true
  errorMessage.value = ''

  const { data, error } = await $supabase
    .from('sanrio')
    .select('queue_text')
    .eq('id', 1)
    .single()

  console.log(data)

  if (error) {
    errorMessage.value = error.message
  } else {
    value.value = data?.queue_text || null
  }

  loading.value = false
}

onMounted(async () => {
  let tl = gsap.timeline({ delay: .2, onComplete: () => {
    gsap.to('.diamond', {
      rotation: 15,
      duration: 1.5,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
    gsap.to('.blue-star', {
      y: -10,
      duration: 2,
      rotation: 360,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
    gsap.to('.right-down-star', {
      y: -10,
      duration: 2,
      rotation: 360,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 1
    })
    gsap.to('.party',
      {
        scale: 1.2,
        duration: 0.6,
        ease: 'bounce',
        yoyo: true,
        repeat: -1
      }
    )
  }});
  tl.from(
    '.logo-2',
    { opacity: 0, scale: 0, duration: .4, ease: 'back.out(1.7)' }
  ).from(
    '.logo-1',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.logo-top-right',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.left-top-star',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.diamond',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.right-down-star',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.party',
    { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from('.blue-star',
  { opacity: 0, scale: 0, duration: .4, ease: 'power2.inOut' }, '-=.2')

  let tl2 = gsap.timeline({ delay: 1, onComplete: () => {
    gsap.to('.content-blue-star', {
      y: -10,
      duration: 2,
      rotation: 360,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
    gsap.to('.content-right-down-star', {
      y: -10,
      duration: 2,
      rotation: 360,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 1
    })
    gsap.to('.content-right-down-heart-pink', {
      scale: 1.2,
      duration: 0.6,
      ease: 'bounce',
      yoyo: true,
      repeat: -1,
      delay: 1,
    })
    gsap.to('.content-right-down-heart-blue',
      {
        scale: 1.2,
        duration: 0.6,
        ease: 'bounce',
        yoyo: true,
        repeat: -1
      }
    )

    gsap.to('.content-leaf', {
      rotation: 15,
      duration: 1,
      ease: 'power2.out',
      yoyo: true,
      repeat: -1,
      repeatDelay: 1
    })
    gsap.to('.content-cake', {

      rotation: -15,
      duration: 1,
      origin: 'center center',
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      delay: .5
    })
  }});

  tl2.from(
    '.content-image',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' }
  ).from(
    '.content-left-logo',
    { opacity: 0, x: -10, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.copyright',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '-=.2'
  ).from(
    '.content-right-down-star',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.4'
  ).from(
    '.content-right-down-heart-pink',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.4'
  ).from(
    '.content-right-down-heart-blue',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.5'
  ).from(
    '.content-blue-star',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.4'
  )
  .from(
    '.content-leaf',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.6'
  ).from(
    '.content-cake',
    { opacity: 0, y: 10, duration: .4, ease: 'power2.inOut' },
    '.6'
  )

  await fetchValue();
})


</script>

<style lang="scss" scoped>
article {
  @apply max-w-[475px] mx-auto;
}

h2 {
  @apply text-[50px] font-bold text-[#e72427]
}
</style>
