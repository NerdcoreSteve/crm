#!/bin/bash
mkdir tempjs;
cp -r public/js/* tempjs;
babel front-end/js -d tempjs;
browserify tempjs/main.js -o public/js/main.js;
rm -rf tempjs;
