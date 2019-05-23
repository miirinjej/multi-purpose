import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 769,
    md: 1024,
    lg: 1216,
    xl: 1408,
    xxl: Infinity,
  },
  defaultBreakpoint: 'xs',
});
