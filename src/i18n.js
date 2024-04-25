import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        fortune: {
            title: "Your Fortune Today",
            button: "Tell My Fortune",
            great: "Great luck",
            good: "Good luck",
            average: "Average luck",
            little: "Little luck",
            bad: "Bad luck"
        }
    },
    ja: {
        fortune: {
            title: "今日の運勢",
            button: "運勢を見る",
            great: "大吉",
            good: "吉",
            average: "中吉",
            little: "小吉",
            bad: "凶"
        }
    }
};

const i18n = createI18n({
    locale: 'en', // 初期言語
    fallbackLocale: 'en', // バックアップ言語
    messages
});

export default i18n;
