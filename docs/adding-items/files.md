# Repository Structure & Files

Since we have multiple people contributing to this resource pack, it's important we keep things well organized. This document lays out where files are stored in the project, and the patterns we use for naming files.

## Project Structure

```
.
├── .github/ (these files control our automatic build and release process)
├── bin/ (utility scripts used in testing and deployment)
├── docs/ (documentation for the project. you are here.)
├── pack/ (the actual resource pack source code)
│    ├── assets/minecraft/
│    │    ├── models/item/
│    │    │    ├── player/ (custom player item models)
│    │    │    ├── server/ (custom server item models)
│    │    │    └── *.json (vanilla item parent models)
│    │    └── textures/item/
│    │         ├── players/ (custom player item textures)
│    │         ├── server/ (custom server item textures)
│    │         ├── golfball/ (legacy golfball server item textures)
│    │         ├── trophy/ (legacy trophy server item textures)
│    │         └── *.png (legacy custom item textures)
│    ├── pack.mcmeta
│    └── pack.png
├── .gitignore
└──
```

## File Names

Files should use all lower case characters, with underscores in the place of spaces. No special characters are allowed.

### Player Items

All player items should be stored in the following directories.
- Models: `./pack/assets/minecraft/models/item/player`
- Textures: `./pack/assets/minecraft/textures/item/players`

Player files should be named following the `{playername}_{item_name}` format, with the appropriate extension.

### Server Items

All server items should be stored in the following directories.
- Models: `./pack/assets/minecraft/models/item/server`
- Textures: `./pack/assets/minecraft/textures/item/server`

Server files should be named following the `{item_name}` format, with the appropriate extension.

### Multiple Texture Items

If a model has more than one texture, you can create a folder for those textures in the appropriate directory. For example, Minette's Lich Hat has multiple textures. You can find the relevant files in these locations
- Model: `./pack/assets/minecraft/models/item/player/minette_lich_crown.json`
- Textures: `./pack/assets/minecraft/textures/item/players/minette_lichhat/`

## Next: [Adding Items](adding-items.md)
