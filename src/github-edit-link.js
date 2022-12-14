/* docsify-github-edit-link
 * A Docsify plugin for adding an "Edit on Github" link to pages.
 *
 * Copyright (c) 2022 Kevin Zolkiewicz.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function githubEditLink(hook, vm) {
  const options = {
    title: "Edit on Github",
    docsDir: "/docs",
    branch: "main",
    repo: "",
    newWindow: true,
  };

  hook.init(function () {
    if (vm.config.githubEditLink) {
      Object.keys(options).forEach((key) => {
        const override = vm.config.githubEditLink[key];

        if (typeof override === "string" || typeof override === "boolean") {
          options[key] = override;
        }
      });
    } else {
      return;
    }
  });

  hook.afterEach(function (html, next) {
    const { title, docsDir, branch, repo, newWindow } = options;
    const page = vm.route.file.replace(/^\//, "");

    if (!repo) {
      next(html);
      return;
    }

    const url = `${repo}/edit/${branch}${docsDir}/${page}`;
    const target = `${newWindow ? 'target="_blank"' : ""}`;
    const editLink = `<a href="${url}" class="edit-on-github" rel="noopener" ${target}>${title}</a>`;

    html = html + editLink;

    next(html);
  });
}

if (window) {
  window.$docsify.plugins = [].concat(
    window.$docsify.plugins || [],
    githubEditLink
  );
}
