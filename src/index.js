var list = [
    '//mail.163.com/help/desktop/200507/netease-bobo6-summer-1024.jpg',
    'http://mail.163.com/help/desktop/200507/netease-bobo8-summer-1024.jpg',
    'http://mail.163.com/help/desktop/200507/netease-bobo10-summer-1024.jpg',
    'http://mail.163.com/help/desktop/200507/netease-vo-summer-1024.jpg',
    'http://mail.163.com/help/desktop/200507/neteas-boboo14-wind-1024.jpg',
    'http://mail.163.com/help/desktop/200507/netease-bobo8-summer-800.jpg',
    'http://mail.163.com/help/desktop/200507/netease-bobo15-summer-no102.jpg',
    'http://mail.163.com/help/desktop/200505/netease-1024-lovehouse.jpg'
];

var Loader = require('./loader');

var loader = new Loader({
    list,
    // onProcess: function(pect){
    //     console.log(pect);
    // },
    // onSuccess: function(){
    //     console.log('加载成功');
    // },
    // onTimeout: function(){
    //     alert('加载超时');
    // }
});


loader.start();