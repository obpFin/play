#!/usr/bin/env bash

## Bundle Express and React files

# Remove existing production folder
rm -rf ./build/

# Transpile .ts files to temp/
tsc

# Bundle back-end code
webpack --config ./utils/webpack-back.config.js

# Remove temp/
rm -rf ./temp/

# Create the directory for React
mkdir -p ./build/public/react/

# Navigate to the react directory
cd ./src/public/react/play-react

# Build React code
npm run build

# Rename the folder
mv build play-react

# Move the contains to the build/ dir
mv play-react ../../../../build/public/react/