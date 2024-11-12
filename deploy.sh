#!/usr/bin/env sh
set -e

env PUBLIC_URL=https://alexsavino.github.io npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/alexsavino/alexsavino.github.io.git main:gh-pages