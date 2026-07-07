// ads.js
(function() {
    // 广告模块内部变量
    let adCallback = null;
    let adCountdownTimer = null;

    // 获取 DOM 元素（与 index.html 中 id 一致）
    const adOverlay = document.getElementById('adOverlay');
    const adTitle = document.getElementById('adTitle');
    const adSubtitle = document.getElementById('adSubtitle');
    const adCountdown = document.getElementById('adCountdown');
    const adProgressFill = document.getElementById('adProgressFill');
    const btnCloseAd = document.getElementById('btnCloseAd');

    // 初始化关闭按钮事件（只需绑定一次）
    btnCloseAd.addEventListener('click', () => {
        if (btnCloseAd.classList.contains('visible')) {
            closeAd();
        }
    });

    function closeAd() {
        if (adCountdownTimer) {
            clearInterval(adCountdownTimer);
            adCountdownTimer = null;
        }
        adOverlay.style.display = 'none';
        // 恢复游戏（全局暂停标志）
        window.isPaused = false;
        if (adCallback) {
            const cb = adCallback;
            adCallback = null;
            cb();
        }
    }

    // 暴露给外部的广告管理器
    window.AdManager = {
        /**
         * 显示激励广告
         * @param {string} title - 广告标题
         * @param {string} subtitle - 广告副标题
         * @param {function} callback - 广告完成后执行的回调
         */
        showRewardedAd(title, subtitle, callback) {
            switch (CONFIG.adType) {
                case 'mock':
                    _showMockAd(title, subtitle, callback);
                    break;
                case 'crazygames':
                    // TODO: 接入 CrazyGames SDK
                    _showCrazyGamesAd(callback);
                    break;
                case 'wechat':
                    // TODO: 接入微信小游戏 SDK
                    _showWeChatAd(callback);
                    break;
                default:
                    // 默认模拟
                    _showMockAd(title, subtitle, callback);
            }
        }
    };

    // ---------- 模拟广告实现 ----------
    function _showMockAd(title, subtitle, callback) {
        if (adCountdownTimer) clearInterval(adCountdownTimer);

        adCallback = callback;
        adTitle.textContent = title || '广告播放中...';
        adSubtitle.textContent = subtitle || '请观看广告以获取奖励';
        adCountdown.textContent = CONFIG.adCountdown;
        adProgressFill.style.width = '0%';
        btnCloseAd.classList.remove('visible');
        adOverlay.style.display = 'flex';

        // 暂停游戏
        window.isPaused = true;

        let count = CONFIG.adCountdown;
        adCountdownTimer = setInterval(() => {
            count--;
            adCountdown.textContent = count;
            adProgressFill.style.width = ((CONFIG.adCountdown - count) / CONFIG.adCountdown * 100) + '%';
            if (count <= 0) {
                clearInterval(adCountdownTimer);
                adCountdownTimer = null;
                adCountdown.textContent = '0';
                adProgressFill.style.width = '100%';
                btnCloseAd.classList.add('visible');
                adTitle.textContent = '广告即将结束';
                adSubtitle.textContent = '点击下方按钮关闭广告并领取奖励';
            }
        }, 1000);
    }

    // ---------- 真实广告 SDK 占位 ----------
    function _showCrazyGamesAd(callback) {
        // CrazyGames SDK 示例：
        // window.CrazyGames.SDK.ad.requestAd('midgame', {
        //     onAdFinished: callback,
        //     onAdError: () => { /* 错误处理 */ }
        // });
        // 模拟
        _showMockAd('CrazyGames 广告', '接入后将调用真实广告', callback);
    }

    function _showWeChatAd(callback) {
        // 微信小游戏广告示例：
        // const rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxx' });
        // rewardedVideoAd.onClose(res => { if (res.isEnded) callback(); });
        // rewardedVideoAd.show();
        // 模拟
        _showMockAd('微信广告', '接入后将调用真实广告', callback);
    }
})();