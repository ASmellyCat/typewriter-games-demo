/*
 * ============================================
 *   故事数据文件 - 只需要改这个文件！
 * ============================================
 *
 * 使用方法：
 * 1. 复制这个文件，改名为 story.js
 * 2. 修改 GAME_CONFIG（标题、结局列表、场景树）
 * 3. 修改 GAME_STORY（所有场景的文字和选项）
 * 4. 修改 GAME_EPILOGUE（可选，通关后的对话）
 * 5. 把 story.js 和 index.html 放同一个文件夹
 * 6. 完成！
 */

// ===== 游戏配置 =====
window.GAME_CONFIG = {
  title: '切',                    // 游戏标题（大字显示）
  id: 'qie',                     // 存档用的ID（每个游戏不同）
  homeUrl: '../',                 // 返回首页的链接
  typeSpeed: 50,                  // 打字速度（毫秒/字，越小越快）

  // 哪些场景是结局（choices为空的场景）
  endings: ['just_sleep', 'learn_coding', 'ask_parents', 'frugal'],

  // 场景树（用于章节选择的树形图）
  // 格式：{ 父场景: [子场景1, 子场景2] }
  sceneTree: {
    start: ['keep_working', 'quit'],
    keep_working: ['just_sleep', 'learn_coding'],
    quit: ['ask_parents', 'frugal']
  },

  // 场景显示名称（用于章节选择）
  sceneNames: {
    start: '开始',
    keep_working: '继续打工',
    quit: '辞职',
    just_sleep: '钝刀',
    learn_coding: '丰饶的荒漠',
    ask_parents: '笼',
    frugal: '饿殍'
  }
};

// ===== 故事内容 =====
// 每个场景有 text（文字数组）和 choices（选项数组）
// choices为空 = 结局
window.GAME_STORY = {
  start: {
    text: [
      "这是第一个场景。",
      "玩家会看到这些文字，一行一行打出来。",
      "然后出现选项。"
    ],
    choices: [
      { text: "选择A", next: "scene_a" },
      { text: "选择B", next: "scene_b" }
    ]
  },
  scene_a: {
    text: [
      "你选了A。",
      "故事继续...",
      "",
      "\u3010结局：A结局\u3011"     // 【】 会自动变成金色
    ],
    choices: []                     // 空 = 这是结局
  },
  scene_b: {
    text: [
      "你选了B。",
      "",
      "\u3010结局：B结局\u3011"
    ],
    choices: []
  }
};

// ===== 通关对话（可选） =====
// 所有结局都看完后出现的对话
// 不需要的话设为 null
window.GAME_EPILOGUE = {
  lines: [
    "\u201c第一句对话\u201d",       // \u201c\u201d = ""（中文引号）
    "",                              // 空行 = 停顿
    "\u201c第二句对话\u201d",
  ],
  nextUrl: '../ch1/',               // 通关后跳转的链接
  nextLabel: '第一章'               // 跳转按钮文字
};
