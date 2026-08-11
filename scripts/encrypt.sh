#!/usr/bin/env bash
set -euo pipefail
# Re-encrypt the plaintext working copies of the internal docs.
# Requires: sops with an age key (default ~/.config/sops/age/keys.txt,
# or point SOPS_AGE_KEY_FILE at another keyring).
cd "$(dirname "$0")/.."
for f in AGENTS.md DONE.md HANDOFF.md TODO.md; do
  if [ -f "$f" ]; then
    sops -e --input-type binary "$f" > "$f.enc"
    echo "encrypted $f -> $f.enc"
  else
    echo "skip $f (plaintext not present)"
  fi
done
