#!/bin/bash
set -e

echo "Deployment started..."

git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload npm

echo "Deployment Finished!"