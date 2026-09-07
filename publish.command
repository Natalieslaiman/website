#!/bin/bash
# Double-click in Finder, or run ./publish.command "Describe your update"
set -euo pipefail
cd "$(dirname "$0")"
trap 'code=$?; if [ "$code" -ne 0 ]; then printf "\nPublishing stopped. Review the message above.\n"; fi; if [ -t 0 ]; then read -r -p "Press Return to close…" _; fi' EXIT
if [ ! -d .git ]; then
  printf 'This folder is not a Git repository. See README.md for setup.\n'; exit 1
fi
if ! git remote get-url origin >/dev/null 2>&1; then
  printf 'Create the empty GitHub repository first, then connect it as described in README.md.\n'; exit 1
fi
branch=$(git symbolic-ref --quiet --short HEAD) || { printf 'Switch to the main branch first.\n'; exit 1; }
if [ "$branch" != main ]; then printf 'Publishing expects the main branch. Current branch: %s\n' "$branch"; exit 1; fi
if ! git var GIT_AUTHOR_IDENT >/dev/null 2>&1; then printf 'Set your Git name and email using README.md, then run again.\n'; exit 1; fi
# Only explicitly maintained website files are staged. No force pushes or automatic merges.
git add -A -- index.html styles.css site.js content.js assets CNAME .nojekyll .gitignore README.md PRODUCT.md DESIGN.md docs publish.command preview.command
if ! git diff --cached --quiet; then
  git diff --cached --stat
  message="${1:-Update Natalie Slaiman website}"
  git commit -m "$message"
fi
git push -u origin main
printf '\nPushed successfully. GitHub Pages can take a few minutes to update.\nhttps://natalieslaiman.com\n'
