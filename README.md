# Text Branch 📖

A minimalist text-based branching narrative game engine.

## Play

🎮 **[Play Demo](https://frolicking-tulumba-d320c1.netlify.app/)**

## About

Dark, satirical interactive fiction exploring structural inequality in the age of AI. No good endings — just honest ones.

- Typewriter text effect
- Branching story tree with scene tracking
- Save/load system via localStorage
- Bilingual support (中文/English)
- Zero dependencies — single HTML file

## Structure

```
games/demo/     # Playable demo (bilingual)
template/       # Reusable engine for new stories
```

## Create Your Own Story

1. Copy `template/index.html` and `template/story.example.js` to a new folder
2. Rename `story.example.js` → `story.js`
3. Edit the story data — scenes, choices, endings
4. Open in browser. Done.

See [`template/README.md`](template/README.md) for details.

## License

MIT
