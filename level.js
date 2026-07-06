// 汉字拆字大师 - 关卡数据文件（基于真实汉字部件拆解，难度递增）
// 扩展说明：直接在数组中添加新对象即可，格式如下：
// { id: 关卡编号, character: '主汉字', hiddenWords: ['隐藏字1', '隐藏字2', ...], distractors: ['干扰项1', ...], difficulty: 1~5 }
const levelData = [
    // ========== 难度1：入门（hiddenWords 2-4个，distractors 4-6个） ==========
    { id: 1, character: '口', hiddenWords: ['口', '一', '二'], distractors: ['日', '田', '十', '大', '人'], difficulty: 1 },
    { id: 2, character: '十', hiddenWords: ['十', '一', '二'], distractors: ['三', '口', '大', '土', '干'], difficulty: 1 },
    { id: 3, character: '日', hiddenWords: ['日', '口', '一', '二'], distractors: ['目', '田', '十', '大', '白'], difficulty: 1 },
    { id: 4, character: '田', hiddenWords: ['口', '十', '一', '二'], distractors: ['日', '三', '大', '天', '土', '干', '工'], difficulty: 1 },
    { id: 5, character: '好', hiddenWords: ['女', '子', '一', '二', '了'], distractors: ['好', '三', '十', '大', '孑', '孓'], difficulty: 1 },
    { id: 6, character: '明', hiddenWords: ['日', '月', '口', '一', '二'], distractors: ['明', '目', '田', '十', '大', '白', '三'], difficulty: 1 },

    // ========== 难度2：基础（hiddenWords 4-6个，distractors 6-8个） ==========
    { id: 7, character: '林', hiddenWords: ['木', '十', '八', '一', '二'], distractors: ['林', '森', '本', '未', '大', '三', '口'], difficulty: 2 },
    { id: 8, character: '相', hiddenWords: ['木', '目', '十', '八', '一', '二'], distractors: ['相', '想', '田', '口', '日', '大', '三', '本'], difficulty: 2 },
    { id: 9, character: '昌', hiddenWords: ['日', '口', '一', '二', '十'], distractors: ['昌', '晶', '目', '白', '大', '三', '田'], difficulty: 2 },
    { id: 10, character: '古', hiddenWords: ['十', '口', '一', '二'], distractors: ['古', '舌', '大', '日', '田', '三', '干'], difficulty: 2 },
    { id: 11, character: '胡', hiddenWords: ['古', '月', '十', '口', '一', '二'], distractors: ['胡', '湖', '明', '大', '三', '干', '天'], difficulty: 2 },
    { id: 12, character: '萌', hiddenWords: ['明', '日', '月', '口', '一', '二'], distractors: ['萌', '胡', '田', '十', '大', '三', '木', '古'], difficulty: 2 },

    // ========== 难度3：进阶（hiddenWords 6-8个，distractors 8-10个） ==========
    { id: 13, character: '品', hiddenWords: ['口', '一', '二', '三', '日'], distractors: ['品', '晶', '田', '十', '大', '人', '白', '目', '唱'], difficulty: 3 },
    { id: 14, character: '晶', hiddenWords: ['日', '口', '一', '二', '十', '三'], distractors: ['晶', '品', '田', '目', '白', '大', '天', '唱', '明'], difficulty: 3 },
    { id: 15, character: '想', hiddenWords: ['木', '目', '心', '相', '十', '八', '一', '二'], distractors: ['想', '思', '田', '口', '日', '大', '三', '本', '未', '明'], difficulty: 3 },
    { id: 16, character: '赢', hiddenWords: ['亡', '口', '月', '贝', '凡', '一', '二', '三'], distractors: ['赢', '嬴', '大', '天', '日', '十', '木', '人', '干'], difficulty: 3 },
    { id: 17, character: '雷', hiddenWords: ['雨', '田', '口', '十', '一', '二', '三'], distractors: ['雷', '雪', '霜', '大', '天', '日', '目', '白', '干'], difficulty: 3 },
    { id: 18, character: '碧', hiddenWords: ['王', '白', '石', '口', '一', '二', '三'], distractors: ['碧', '璧', '壁', '大', '天', '日', '十', '木', '田'], difficulty: 3 },

    // ========== 难度4：挑战（hiddenWords 8-10个，distractors 10-12个） ==========
    { id: 19, character: '森', hiddenWords: ['木', '林', '十', '八', '一', '二', '三'], distractors: ['森', '林', '本', '未', '大', '天', '口', '日', '田', '目', '白'], difficulty: 4 },
    { id: 20, character: '累', hiddenWords: ['田', '幺', '小', '十', '日', '口', '一', '二', '糸'], distractors: ['累', '系', '大', '天', '木', '本', '川', '工', '人', '干', '三'], difficulty: 4 },
    { id: 21, character: '章', hiddenWords: ['立', '早', '日', '十', '口', '一', '二', '三'], distractors: ['章', '音', '童', '大', '天', '木', '目', '田', '白', '干'], difficulty: 4 },
    { id: 22, character: '童', hiddenWords: ['立', '里', '田', '土', '日', '十', '口', '一', '二', '三'], distractors: ['童', '章', '音', '大', '天', '木', '目', '白', '干', '王'], difficulty: 4 },
    { id: 23, character: '湖', hiddenWords: ['古', '月', '十', '口', '一', '二', '三'], distractors: ['湖', '胡', '明', '大', '天', '日', '田', '目', '白', '干', '土'], difficulty: 4 },
    { id: 24, character: '说', hiddenWords: ['兑', '口', '儿', '八', '一', '二'], distractors: ['说', '悦', '脱', '大', '天', '日', '十', '木', '田', '三'], difficulty: 4 },

    // ========== 难度5：高手（hiddenWords 10-15个，distractors 12-15个） ==========
    { id: 25, character: '攀', hiddenWords: ['大', '手', '一', '二', '三', '十'], distractors: ['攀', '樊', '大', '天', '日', '口', '木', '目', '田', '人', '干', '土'], difficulty: 5 },
    { id: 26, character: '鹰', hiddenWords: ['广', '亻', '隹', '鸟', '一', '二', '口', '十'], distractors: ['鹰', '雁', '雀', '大', '天', '日', '木', '目', '田', '白', '人', '干'], difficulty: 5 },
    { id: 27, character: '露', hiddenWords: ['雨', '路', '足', '各', '口', '一', '二', '三', '十', '夂'], distractors: ['露', '霜', '雪', '大', '天', '日', '木', '目', '田', '人', '干', '王'], difficulty: 5 },
    { id: 28, character: '罐', hiddenWords: ['缶', '雚', '口', '十', '一', '二', '三', '日', '大', '土'], distractors: ['罐', '灌', '鹳', '天', '木', '目', '田', '人', '干', '王', '白', '工'], difficulty: 5 },
    { id: 29, character: '懿', hiddenWords: ['壹', '恣', '心', '一', '二', '三', '口', '十', '大', '日'], distractors: ['懿', '壹', '恣', '天', '木', '目', '田', '人', '干', '王', '白', '工', '土'], difficulty: 5 },
    { id: 30, character: '曦', hiddenWords: ['日', '羲', '禾', '戈', '一', '二', '三', '十', '口', '大', '人'], distractors: ['曦', '羲', '曦', '天', '木', '目', '田', '王', '干', '白', '工', '土', '川'], difficulty: 5 }
];

// 后续可继续添加，例如：
// { id: 31, character: '...', hiddenWords: [...], distractors: [...], difficulty: 5 },