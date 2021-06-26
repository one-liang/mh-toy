import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/images/loading.svg',
  error: '/images/error.svg',
  attempt: 1,
})
