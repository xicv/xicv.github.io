# xicv.github.io

The VitePress source for [xicv.github.io](https://xicv.github.io/).

## Local development

```sh
pnpm install
pnpm dev
```

Run the full local validation set with `pnpm check`.

## Project data

The Projects page loads public repository metadata at build time. A repository
is included when it is owned by `xicv`, public, non-fork, non-archived,
non-disabled, and non-empty. Personal configuration and release/support
repositories are excluded in
[`docs/.vitepress/data/project-catalog.ts`](docs/.vitepress/data/project-catalog.ts).

The build uses the tracked snapshot if GitHub is temporarily unavailable. The
Pages workflow also runs weekly so the order stays aligned with the latest code
pushes without calling GitHub from a visitor's browser.

## Typography

The site self-hosts Regular and SemiBold subsets of
[Maple Mono NF 7.9](https://github.com/subframe7536/maple-font/releases/tag/v7.9).
Only Latin, punctuation, and arrow glyphs are included, keeping the two WOFF2
files to about 80 KB combined instead of shipping the 19.6 MB Nerd Font archive.
The font remains available under the
[SIL Open Font License 1.1](docs/public/fonts/OFL.txt).
