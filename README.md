# mju-II

Film photography by Mitchell Parker, shot on an Olympus mju-II [Deluxe].

Live: https://mju-ii-portfolio.vercel.app

## Stack

Astro, deployed on Vercel. Photographs live in `public/images/` and each gallery
page globs its own folder, so adding a photo is a matter of dropping the file in.

| Folder                 | Page      |
| ---------------------- | --------- |
| `public/images/main`   | `/`       |
| `public/images/events` | `/events` |
| `public/images/b&w`    | `/bandw`  |

## Local development

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # production build into dist/
pnpm preview  # preview the production build
```

## Contact

mitchelljamesparker99@gmail.com

## Credits

Built on the **Multiverse** template by [HTML5 UP](https://html5up.net), used
under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/)
licence — see `LICENSE`. The template's own attribution notices in
`src/styles/main.css` and `public/scripts/main.js` are retained as the licence
requires.

All photographs are © Mitchell Parker and are **not** covered by that licence.
