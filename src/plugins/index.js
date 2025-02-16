import { useCountdown } from "./useCountdown";

export default {
  install(app) {
    app.config.globalProperties.$useCountdown = useCountdown;
  },
};
