#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
printf 'Preview: http://localhost:8765\nPress Control-C to stop.\n'
open 'http://localhost:8765'
python3 -m http.server 8765 --bind 127.0.0.1
