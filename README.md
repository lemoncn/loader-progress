# 图片预加载进度反馈库

在图片资源较多的页面可进行图片预加载，并给出相关的加载信息。

# 使用

`npm i @fe/loader-progress`


    var Loader = require('@fe/loader-progress');
    var loader = new Loader({
        list: [
            'http://mail.163.com/help/desktop/200507/netease-bobo8-summer-800.jpg',
            'http://mail.163.com/help/desktop/200507/netease-bobo15-summer-no102.jpg',
            'http://mail.163.com/help/desktop/200505/netease-1024-lovehouse.jpg'
        ],
        onProcess: function(pect){
            //  返回 0 ~ 100 之间的数
            console.log(pect);
        },
        onSuccess: function(){
            console.log('加载成功');
        },
        onFaild: function(){
            //  90s 所有图片没加载完为加载失败
            alert('加载失败');
        }
    });

    //  启动图片加载
    loader.start();


# 开发
npm run dev  
发布 npm run build
