require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    'bootstrap-datepicker' : 'vendor/bootstrap/bootstrap-datepicker'
  }
});
 
require(['mysherpa'], function(app) {
  // use app here
  console.log(app);
});