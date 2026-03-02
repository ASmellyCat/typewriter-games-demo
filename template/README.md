# 打字机游戏模板

## 做一个新游戏只需要3步：

1. 新建文件夹（比如 `my-game/`）
2. 复制 `index.html` 到文件夹
3. 复制 `story.example.js` → 改名 `story.js` → 改里面的内容

## 文件结构
```
my-game/
├── index.html    ← 引擎（不用改）
└── story.js      ← 你的故事（只改这个）
```

## story.js 里要改什么

- `GAME_CONFIG` → 标题、存档ID、结局列表
- `GAME_STORY` → 所有场景的文字和选项
- `GAME_EPILOGUE` → 通关对话（不需要就设null）

看 story.example.js 里的注释。
