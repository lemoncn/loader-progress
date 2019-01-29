var Loader = /** @class */ (function () {
    function Loader(config) {
        this.isFailed = false;
        this.config = config;
    }
    /**
     * 启动预加载
     */
    Loader.prototype.start = function () {
        var that = this;
        var imgList = that.config.list;
        // 开始加载
        that.config.onProcess && that.config.onProcess(0);
        // 如果没有列表，直接表示完成
        if (imgList && imgList.length === 0) {
            that.config.onProcess && that.config.onProcess(100);
            that.config.onSuccess && that.config.onSuccess();
            return;
        }
        // 图片加载数量
        var loadNum = 0;
        // 加载失败逻辑
        setTimeout(function () {
            if (loadNum < imgList.length) {
                that.isFailed = true;
                // 少于图片数量
                that.config.onTimeout && that.config.onTimeout();
            }
        }, 90000);
        // 创建图片加载
        for (var i = 0; i < imgList.length; i++) {
            var oImg = document.createElement('img');
            oImg.src = imgList[i];
            oImg.onload = function () {
                if (that.isFailed) {
                    return;
                }
                loadNum += 1;
                that.updatePect(loadNum);
            };
        }
    };
    /**
     * 更新百分比
     */
    Loader.prototype.updatePect = function (num) {
        this.config.onProcess && this.config.onProcess(Math.floor(num / this.config.list.length * 100));
        if (num === this.config.list.length) {
            this.config.onSuccess && this.config.onSuccess();
        }
    };
    return Loader;
}());
module.exports = Loader;
//# sourceMappingURL=loader.js.map