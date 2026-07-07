// config.js
const CONFIG = {
    // 广告环境：'mock'（模拟）| 'crazygames' | 'wechat'
    adType: 'mock',

    // 游戏参数
    totalTime: 90,
    bonusTime: 30,
    maxHints: 2,
    maxLives: 3,
    recoveryInterval: 5 * 60 * 1000, // 5分钟自动恢复
    scorePerFound: 10,
    scorePerHint: 5,
    scoreBonusWin: 100,
    scorePenaltyWrong: 5,
    timePenaltyWrong: 3,
    adCountdown: 5, // 广告倒计时秒数
};