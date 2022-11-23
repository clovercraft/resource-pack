# Submitting Changes

Once you're done making changes for your custom item, you can submit them for review and approval using GitHub. To do so, follow these steps.

1. Open GitHub Desktop. This should display a list of your changes, along with a Summary and Description input
2. Enter a short (50 characters or less) summary of the changes you've made in the Summary input
    - This doesn't need to be complicated. For example "Added jim's axe" is sufficient.
    - If you need to include more details, use the Description input to provide context.
3. Click the "Commit to {branchname}" button to save your changes to git.
4. Click the "Publish branch" button to push your changes to the GitHub repository.
5. The "Publish" dialog will be replaced with a "Create Pull Request" dialog. Go ahead and click the "Create Pull Request" button.
6. In the new browser window that opens, enter a descriptive title for your pull request.
7. On the right of the text editor, follow the setup below:
    - select "Reviewers" and assign Martin as a reviewer
    - assign yourself as the assignee
    - click "Labels" and select the appropriate label for your change
8. Once you're satisfied with the above, click "Create Pull Request."

This will send a notification to Zenfrii (Martin) that there are new changes to be reviewed and merged. Zen will review and test your changes, and leave comments with any adjustments that need to be made before approval. If no changes are needed, your code will get merged to production and will be applied to the server on our next reboot.


## Directory

- [Custom Items Overview](../custom-items.md)
    - [Custom Item Rules](./rules.md)
    - [File Structure](./files.md)
    - [Setting up your Development Environment](./setup.md)
    - [Adding Items](./adding-items.md)