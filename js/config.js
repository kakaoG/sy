require.config({
  baseUrl: 'js/lib',
  paths: {
    'jquery': 'jquery/dist/jquery.min',
    'underscore': 'underscore/underscore-min',
    'swiper': 'swiper/dist/js/swiper.min'
  },
  map: {
    '*': {
      'css': 'require-css/css.min'
    }
  },
  shim: {
    'swiper': {
      deps: ['css!swiper/../../css/swiper.min']
    }
  }
});
requirejs.onError = function(err){
  if (err.requireType === 'timeout') {
    alert('网络不太好，请尝试刷新页面！')//console.log('modules: ' + err.requireModules);
  }
  throw err;
};