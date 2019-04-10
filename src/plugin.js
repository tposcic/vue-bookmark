import VueBookmark from './VueBookmark.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-bookmark', VueBookmark);
  }
};
