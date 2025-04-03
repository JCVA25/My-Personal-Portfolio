#!/bin/bash
# Make script executable
chmod +x ./node_modules/.bin/vite

# Install dependencies
npm ci

# Set environment variables
export NODE_ENV=production

# Run build using full path
node ./node_modules/vite/bin/vite.js build 