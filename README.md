[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# docsify-github-edit-link

A Docsify plugin for adding an "Edit on Github" link to pages.

## Usage

```html
<script>
  window.$docsify = {
    // ... (your existing Docsify config)
    githubEditLink: {
      repo: "https://github.com/zolk/docsify-github-edit-link",
    },
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify-github-edit-link@1/dist/github-edit-link.min.js"></script>
```

## Options

### githubEditLink.repo

- Type: `String`
- Default: `""`

**Required.** The link to your GitHub repo.

### githubEditLink.branch

- Type: `String`
- Default: `"main"`

The branch for creating commits or PRs.

### githubEditLink.docsDir

- Type: `String`
- Default: `"/docs"`

The directory containing your Docsify installation.

### githubEditLink.title

- Type: `String`
- Default: `"Edit on GitHub"`

The title of the link.

### githubEditLink.newWindow

- Type: `Boolean`
- Default: `true`

Specifies if the link should open in a new window.

## Live Example

You can see this plugin in use as part of **DS Starter Kit** ([Live example](https://ds-starter-kit.vercel.app), [GitHub project](https://github.com/zolk/ds-starter-kit)).

## Local Demo

You can test this project locally in a demo Docsify installation.

First, clone this repo:

```
git clone https://github.com/zolk/docsify-github-edit-link.git
```

Then install dependencies (you'll need [Node](https://nodejs.org/en/download/package-manager/) installed):

```
npm install
```

Finally, boot the local dev server:

```
npm start
```

By default, the server will boot at http://localhost:3000.

## License

This project was created by [Kevin Zolkiewicz](http://zolk.com) and is licensed
under an [MIT License](./LICENSE.md).

<br><br><br>

<p align="center"><a href="https://8thlight.com"><img src="./8l.png" height="75" alt="" /></a><br><i>This project is supported by <a href="https://8thlight.com">8th Light</a>.</i></p>
