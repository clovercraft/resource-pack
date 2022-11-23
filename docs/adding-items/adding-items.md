# Contributing Updates

Adding custom items is relatively straight forward. Changes **cannot** be committed directly to the `production` branch, so all changes must be done within feature, patch, or bugfix branches.

If you're familiar with git-cli, you can do this using commands. The directions below assume you are using the tools listed in [the overview](../custom-items.md).

## Branch naming convention & Creating Branches

This project uses a specific branch naming convention to help keep development organized. When working on the project, please follow the guide below.

| Branch Name   | Use          |
| ----------    | ------------ | 
| `production`  | The officially approved release version of our code. This branch is protected. |
| `feat/{name}` | Feature branches are used for new development. The `{name}` used here should be short and specific. |
| `patch/{name}`| Patch branches are used for updating existing features / items. The `{name}` used here should be specific to the update you're making. |
| `fix/{name}`  | Bugfix branches are used for fixing issues with existing code. The `{name}` used here should be specific to the issue you're fixing. |

## Adding Items

### Setting up your Feature Branch

1. Open GitHub Desktop and make sure the `resource-pack` repository is selected.
2. Make sure that "Current Branch" reads "production." If it doesn't, click the "Current Branch" dropdown and select "production."
3. Click the "Fetch origin" button to pull the latest code.
4. Click the "Current branch" button, then "New branch."
5. Enter the name for your branch, using the format guide above. This should default to `heads/production` as the origin, you can leave that.
6. Click "Create branch."
7. The "Current branch" button should now display the name of the branch you just created.

### Exporting the Model
1. Open the model file in BlockBench.
2. In the `Textures` pannel, save each individual texture in an appropriate location within the resource pack, following the [guidelines for file names](files.md).
3. Once you've saved the textures, go to `File > Export > Export Block/Item Model` in the application menu.
4. Save the model `.json` file in an appropriate location within the resource pack, following the [guidelines for file names](files.md).

### Mapping the Base Item
1. In GitHub Desktop, click the "Open in Visual Studio Code" button. This will launch the project in VS Code, our default editor.
2. Find an appropriate base item to override for the custom item and open the vanilla model file.
    > Vanilla models are located at `./pack/assets/minecraft/models/item/`
    > 
    > Most items will be overriding the `iron_nugget` model, with exception to tools and weapons. 
    > 
    > If you are making a custom tool to replace one in your standard kit (e.g. sword, pickaxe, axe, shovel, or hoe) this will need to override the `netherite_{item}` model in order to work correctly.
3. Add a custom model data override for the item you're adding to the resource pack.
    - For most vanilla items we override, there will already be overrides present that you can copy. If you're not sure, refer to the example override below.
    - Please use the next highest available number for the `custom_model_data` value.
    - For the `model` value, specify the path and name of the custom model file, without the extension.
4. Save the vanilla item model file.

```
## Example custom model data override
{
    "predicate": {
        "custom_model_data": 1
    },
    "model": "item/player/zenfrii_item"
},
```

### Verifying Texture Paths
1. Find the custom model file you exported from BlockBench in VS Code and open it.
2. Check to make sure that the textures referenced in the model file are pointing to the right location.
    > Example
    >
    > For an item with a single texture located at `./pack/assets/minecraft/models/item/player/zenfrii_axe`, the texture values should reference `item/player/zenfrii_axe`.

3. If these are correct, you're good to go. If not...
    1. Check to make sure the textures you saved from BlockBench have been saved to the correct location within the resource pack.
    2. Update the values for the texture entries on the model to match the appropriate path.

## Next: [Submitting Changes for Review](../pull-requests.md)