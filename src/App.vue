<template>
  <div id="app">
    <h1>{{ $t("fortune.title") }}</h1>    
    <button @click="toggleLanguage">🌍</button>
    <p>
    <button @click="tellFortune">{{ $t("fortune.button") }}</button>
    </p>
    
    <p>{{ fortuneToday }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fortunes: ['great', 'good', 'average', 'little', 'bad'],
      fortuneToday: ''
    };
  },
  methods: {
    tellFortune() {
      const idx = Math.floor(Math.random() * this.fortunes.length);
      this.fortuneToday = this.$t(`fortune.${this.fortunes[idx]}`);
    },
    toggleLanguage() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'ja'; // 日本語に切り替え
      } else {
        this.$i18n.locale = 'en'; // 英語に切り替え
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
