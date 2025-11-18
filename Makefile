.PHONY: help build run stop logs clean prod prod-stop prod-logs restart rebuild

# Default target
help:
	@echo "Available commands:"
	@echo "  make build       - Build Docker image"
	@echo "  make run         - Run containers in development mode"
	@echo "  make stop        - Stop all containers"
	@echo "  make logs        - View container logs"
	@echo "  make restart     - Restart containers"
	@echo "  make rebuild     - Rebuild and restart containers"
	@echo "  make clean       - Remove containers, images, and volumes"
	@echo "  make prod        - Run containers in production mode"
	@echo "  make prod-stop   - Stop production containers"
	@echo "  make prod-logs   - View production logs"
	@echo "  make shell       - Open shell in running container"
	@echo "  make health      - Check container health"

# Build Docker image
build:
	@echo "🐳 Building Docker image..."
	docker build -t nurul-portfolio:latest .

# Run in development mode
run:
	@echo "🚀 Starting containers in development mode..."
	docker-compose up -d
	@echo "✅ Application running at http://localhost:3000"

# Stop containers
stop:
	@echo "🛑 Stopping containers..."
	docker-compose down

# View logs
logs:
	docker-compose logs -f

# Restart containers
restart: stop run

# Rebuild and restart
rebuild:
	@echo "🔄 Rebuilding and restarting..."
	docker-compose up -d --build

# Clean up everything
clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down -v
	docker rmi nurul-portfolio:latest || true
	@echo "✅ Cleanup complete"

# Production mode
prod:
	@echo "🚀 Starting containers in production mode..."
	docker-compose -f docker-compose.prod.yml up -d
	@echo "✅ Application running at http://localhost"

# Stop production
prod-stop:
	@echo "🛑 Stopping production containers..."
	docker-compose -f docker-compose.prod.yml down

# Production logs
prod-logs:
	docker-compose -f docker-compose.prod.yml logs -f

# Open shell in container
shell:
	docker exec -it nurul-portfolio sh

# Check health
health:
	@echo "🏥 Checking container health..."
	@curl -f http://localhost:3000/api/health || echo "❌ Health check failed"
	@docker ps --filter name=nurul-portfolio --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Install dependencies locally
install:
	npm install

# Run development server locally
dev:
	npm run dev

# Build locally
build-local:
	npm run build

# Format code
format:
	npm run format

# Lint code
lint:
	npm run lint
