import Vue from 'vue';

Vue.filter('mcc', (value) => {
  if (value === 32) {
    return '日本';
  }
  return '英国';
});
