// 汉字拆字大师 - 关卡数据文件
// 扩展说明：直接在数组中添加新的关卡对象即可，格式如下：
// { id: 关卡编号, character: '主汉字', hiddenWords: ['隐藏字1', '隐藏字2', ...], distractors: ['干扰项1', ...], difficulty: 难度1-5 }
const levelData = [
    { id: 1, character: '口', hiddenWords: ['口', '一', '二'], distractors: ['日', '田', '十', '大', '人'], difficulty: 1 },
    { id: 2, character: '十', hiddenWords: ['十', '一', '二'], distractors: ['三', '口', '大', '土', '干'], difficulty: 1 },
    { id: 3, character: '田', hiddenWords: ['口', '十', '一', '二'], distractors: ['日', '三', '大', '天', '土', '干', '工', '王'], difficulty: 2 },
    { id: 4, character: '好', hiddenWords: ['女', '子', '一', '二', '了'], distractors: ['好', '三', '十', '大', '孑', '孓'], difficulty: 2 },
    { id: 5, character: '明', hiddenWords: ['日', '月', '口', '一', '二'], distractors: ['明', '目', '田', '十', '大', '白', '三'], difficulty: 2 },
    { id: 6, character: '林', hiddenWords: ['木', '十', '八', '一', '二'], distractors: ['林', '森', '本', '未', '大', '三', '口'], difficulty: 3 },
    { id: 7, character: '想', hiddenWords: ['木', '目', '心', '十', '八', '一', '二', '相'], distractors: ['想', '思', '田', '口', '日', '大', '三'], difficulty: 3 },
    { id: 8, character: '晶', hiddenWords: ['日', '口', '一', '二', '十'], distractors: ['晶', '品', '田', '目', '白', '大', '三'], difficulty: 3 },
    { id: 9, character: '森', hiddenWords: ['木', '林', '十', '八', '一', '二'], distractors: ['森', '本', '未', '大', '天', '口', '三'], difficulty: 4 },
    { id: 10, character: '累', hiddenWords: ['田', '幺', '小', '十', '日', '口', '一', '二', '糸'], distractors: ['累', '大', '天', '木', '本', '川', '三', '工'], difficulty: 5 }
];

// 如果想继续添加关卡，按同样格式追加即可，例如：
// { id: 11, character: '...', hiddenWords: [...], distractors: [...], difficulty: 3 },