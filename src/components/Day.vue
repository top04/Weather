<template>
  <div class="main__week-item">
    <h2 class="main__week-item-title">{{ getWeekDay }}</h2>
    <p class="main__week-item-date">{{ getDay }} {{ getMonth }}</p>
    <div class="main__week-item-img">
      <img :src="getImg" alt="">
    </div>
    <p class="main__week-item-temp">+{{ Math.round(day.temp.max) }}°</p>
    <p class="main__week-item-info">{{ description }}</p>
  </div>
</template>

<script>
import { weatherName } from '@/icons'

import unix from '@/unix'


  export default {
    props: {
      day: {
        typeof: Object
      }
    },
    computed: {
      description() {
        return this.day.weather[0].description
      },
      getImg() {
        return weatherName[this.description] || weatherName['ясно']
      },
      getDay() {
        return unix(this.day.dt, 'day')
      },
      getMonth() {
        return unix(this.day.dt, 'month')
      },
      getWeekDay() {
        return unix(this.day.dt, 'weekday')
      }
    }
  }
</script>
