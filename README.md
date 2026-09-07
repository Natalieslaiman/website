# Natalie Slaiman — website

A lightweight, responsive static portfolio for GitHub Pages. No package installation or build step required.

## Preview
Double-click `preview.command`, or open `index.html` in your browser. The preview script uses the Python 3 already installed on this Mac.

## Connect GitHub once
The local repository is connected to **https://github.com/Natalieslaiman/website.git**.

Run the first publish from Terminal:

```bash
cd /Users/natalieslaiman/WEBSITE
./publish.command "Create personal portfolio"
```

If Git asks for your identity, set your chosen Git name and verified or private GitHub commit email with `git config user.name` and `git config user.email`. HTTPS authentication requires a credential manager or personal access token, not your GitHub account password. Never store a token in these files.

4. In repository **Settings → Pages**, choose **Deploy from a branch → main → / (root)** and save.
5. Set the custom domain to **natalieslaiman.com**. `CNAME` in this folder already contains that domain.
6. At your DNS provider, point the apex (`@`) A records to GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Set `www` as a CNAME to `natalieslaiman.github.io`. Preserve mail/MX/TXT records. Remove only conflicting web hosting A/AAAA records after checking their purpose. Verify the domain in GitHub account Settings → Pages using GitHub's supplied TXT record. Enable **Enforce HTTPS** when GitHub makes it available. DNS changes can take up to 24 hours.

## Every later update
Double-click `publish.command` in Finder, or run:

```bash
./publish.command "Add First Chances trailer"
```

This commits the maintained site files and assets and pushes main to GitHub. The first push publishes the current draft, including any “coming soon” content. It never force-pushes or silently merges. If GitHub has newer changes, it stops: reconcile those changes before rerunning. Files outside this folder are not included. Add newly created site directories to the script's explicit file list if needed. Keep raw movies outside the repository; use Vimeo or YouTube embeds. GitHub rejects files larger than 100 MiB.

## Add your work
Edit `content.js` to update the bio, email, résumé, reel and project list. Put optimized images and the résumé PDF in `assets/`. Project fields:

- `title`, `category`, `role`, `year`: accurate credits, as applicable.
- `image`, `alt`: local image path and useful visual description.
- `description`: concise synopsis; add verified festival selections/awards only.
- `url`: watch link or project page.

Use a YouTube privacy-enhanced or Vimeo player URL in `reelEmbed` (examples in the file). The hero watch link appears automatically when a valid embed is added. Empty résumé links remain hidden. The opening graphic is original typography, not a production still. Replace it with a still from First Chances when available. The short bio and creative headlines are draft copy for Natalie's review.

## Research
See `docs/research.md`. This first version is a foundation; actual footage, production stills, exact credits and a résumé will provide the professional evidence.
