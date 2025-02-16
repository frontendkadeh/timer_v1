import { createApp } from "vue";
import App from "./App.vue";
import './style.css'
import CountdownPlugin from "./plugins/useCountdown";

const app = createApp(App);
app.use(CountdownPlugin);
app.mount("#app");
