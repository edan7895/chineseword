const levelData = [
  {
    id: 1, character: '口',
    hiddenWords: [
      { word: '口', zone: { x: 0.1, y: 0.1, w: 0.8, h: 0.8 } },
      { word: '一', zone: { x: 0.2, y: 0.42, w: 0.6, h: 0.12 } },
      { word: '二', zone: { x: 0.15, y: 0.25, w: 0.7, h: 0.35 } }
    ], difficulty: 1
  },
  {
    id: 2, character: '十',
    hiddenWords: [
      { word: '十', zone: { x: 0.1, y: 0.1, w: 0.8, h: 0.8 } },
      { word: '一', zone: { x: 0.25, y: 0.45, w: 0.5, h: 0.1 } }
    ], difficulty: 1
  },
  {
    id: 3, character: '日',
    hiddenWords: [
      { word: '日', zone: { x: 0.08, y: 0.08, w: 0.84, h: 0.84 } },
      { word: '口', zone: { x: 0.15, y: 0.15, w: 0.7, h: 0.7 } },
      { word: '一', zone: { x: 0.25, y: 0.4, w: 0.5, h: 0.12 } },
      { word: '二', zone: { x: 0.2, y: 0.2, w: 0.6, h: 0.35 } }
    ], difficulty: 1
  },
  // 后续关卡按此格式，确保 zone 覆盖对应部件
];