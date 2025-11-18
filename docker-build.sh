#!/bin/bash

# Docker build script for production

set -e

echo "🐳 Building Docker image for production..."

# Build the Docker image
docker build -t nurul-portfolio:latest .

echo "✅ Docker image built successfully!"
echo ""
echo "To run the container, use one of the following commands:"
echo ""
echo "  Development:"
echo "  docker-compose up -d"
echo ""
echo "  Production:"
echo "  docker-compose -f docker-compose.prod.yml up -d"
echo ""
echo "To view logs:"
echo "  docker-compose logs -f"
echo ""
echo "To stop:"
echo "  docker-compose down"
