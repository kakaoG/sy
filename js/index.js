require(['jquery','swiper','underscore'], function ($,Swiper,_) {
  var swiper = new Swiper("#banner",{
    speed: 1000,
    autoplay: 5000
  });
  var data = [
    {
      name: 'mike',
      age: 18,
      sex: '男'
    },
  {
    name: 'nina',
      age: 20,
    sex: '女'
  },
  {
    name: 'elle',
      age: 26,
    sex: '女'
  }
  ];
  $('.app').append(_.template($('#tpl').html())({data: data}));
});