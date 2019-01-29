interface config {

    /** 图片列表 */
    list: string[];

    /** 加载中回调 */
    onProcess?: (pect: number) => void;

    /** 加载成功回调 */
    onSuccess?: () => {};

    /** 加载失败 */
    onTimeout?: () => {}
}

class Loader {
    private config: config;
    private isFailed: boolean = false;

    constructor(config: config) {
        this.config = config;
    }

    /**
     * 启动预加载
     */
    start() {
        var that = this;
        var imgList = that.config.list;

        // 开始加载
        that.config.onProcess&&that.config.onProcess(0);

        // 如果没有列表，直接表示完成
        if (imgList && imgList.length === 0) {
            that.config.onProcess&&that.config.onProcess(100);
            that.config.onSuccess&&that.config.onSuccess();
            return;
        }

        // 图片加载数量
        var loadNum = 0;

        // 加载失败逻辑
        setTimeout(() => {
            if (loadNum < imgList.length) {

                that.isFailed = true;

                // 少于图片数量
                that.config.onTimeout&&that.config.onTimeout()
            }
        }, 90000);


        // 创建图片加载
        for (let i = 0; i < imgList.length; i++) {
            let oImg = document.createElement('img');
            oImg.src = imgList[i];
            oImg.onload = function () {
                if (that.isFailed) {
                    return;
                }
                loadNum += 1;
                that.updatePect(loadNum);
            }
        }
    }


    /** 
     * 更新百分比
     */
    updatePect(num: number) {
        this.config.onProcess&&this.config.onProcess(Math.floor(num / this.config.list.length * 100));
        if (num === this.config.list.length) {
            this.config.onSuccess&&this.config.onSuccess();
        }
    }

}




module.exports = Loader;
