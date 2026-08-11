#!/usr/bin/env bash
set -euo pipefail
# Materialize plaintext working copies from the committed encrypted docs
# and install the pre-commit hook. Run once after cloning.
cd "$(dirname "$0")/.."
for f in AGENTS.md DONE.md HANDOFF.md TODO.md; do
  if [ -f "$f.enc" ]; then
    sops -d "$f.enc" > "$f"
    echo "decrypted $f.enc -> $f"
  fi
done
git config core.hooksPath githooks
echo "git config core.hooksPath -> githooks"
