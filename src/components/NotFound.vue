<template>
  <div class="error-message-wrapper">
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        'Вика, ну ты что, таких препаратов не бывает :)',
        'Попробуй еще разочек ( •_•)',
        'Я в тебя верю (☞ﾟヮﾟ)☞',
        'Я тебя люблю сильно-сильно (｡♥‿♥｡)',
        'Я тебя люблю ♥‿♥',
        'Вика, у тебя все получится •ᴗ•',
        'Опять ничего нет (ง •̀_•́)ง',
        'Вонючий мед ಥ_ಥ ',
      ]
    }
  },
  computed: {
    errorMessage() {
      return this.messages[Math.floor(Math.random()*this.messages.length)]
    }
  },
}
</script>

<style lsng="scss">
.error-message-wrapper {
  margin-top: 5rem;
}
.error-message{
  font-size: 1.4rem;
  text-align: center;
}
</style>
