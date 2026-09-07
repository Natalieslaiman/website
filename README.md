# Natalie Slaiman — website

A lightweight, responsive static portfolio for GitHub Pages. No package installation or build step required.

## Preview
Double-click `preview.command`, or open `index.html` in your browser. The preview script uses the Python 3 already installed on this Mac.

## Connected setup
The website is connected to https://github.com/Natalieslaiman/website.git and publishes from `main` / root. GitHub has verified ownership of `natalieslaiman.com`. Namecheap has the four GitHub Pages A records and a `www` CNAME to `natalieslaiman.github.io`. Keep the GitHub verification TXT record in place.

Git authentication is configured for this repository through the official GitHub CLI stored at `/Users/natalieslaiman/Documents/Codex/Tools/github-cli`. Keep that support folder: the publishing script uses it through Git's local credential helper. Authentication is stored in owner-readable local configuration because macOS Keychain was unavailable to this session; it is outside the website and is never pushed. To revoke access, remove GitHub CLI from GitHub Settings → Applications.

Commits use your GitHub no-reply email. No account password or token belongs in website files. HTTPS is enabled and verified. Both HTTP and www redirect to https://natalieslaiman.com/.

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
