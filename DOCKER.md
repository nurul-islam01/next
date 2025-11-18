# Docker Setup Guide

This guide explains how to build and run the Next.js application using Docker.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

## Quick Start

### 1. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration values.

### 2. Build and Run

#### Development Mode

```bash
docker-compose up -d
```

#### Production Mode

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Or use the build script:

```bash
chmod +x docker-build.sh
./docker-build.sh
```

### 3. Access the Application

- Application: http://localhost:3000
- With Nginx (production): http://localhost

## Docker Commands

### Build Image

```bash
docker build -t nurul-portfolio:latest .
```

### Run Container

```bash
docker run -p 3000:3000 --env-file .env nurul-portfolio:latest
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f nextjs
```

### Stop Services

```bash
docker-compose down
```

### Remove Everything (including volumes)

```bash
docker-compose down -v
```

### Rebuild After Changes

```bash
docker-compose up -d --build
```

## Architecture

### Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **deps**: Installs production dependencies
2. **builder**: Builds the Next.js application
3. **runner**: Creates minimal production image

### Security Features

- ✅ Non-root user (nextjs:nodejs)
- ✅ Minimal Alpine Linux base
- ✅ Security headers via Nginx
- ✅ Rate limiting
- ✅ Health checks

### Performance Optimizations

- ✅ Multi-stage builds (smaller image size)
- ✅ Layer caching
- ✅ Standalone output mode
- ✅ Gzip compression (Nginx)
- ✅ Static asset caching

## Production Deployment

### With Nginx Reverse Proxy

The `docker-compose.prod.yml` includes an Nginx reverse proxy with:

- SSL/TLS support (configure in nginx.conf)
- Rate limiting
- Security headers
- Static asset caching
- Health checks

### SSL/TLS Configuration

1. Place your SSL certificates in the `ssl/` directory:

   - `ssl/cert.pem`
   - `ssl/key.pem`

2. Uncomment the HTTPS server block in `nginx.conf`

3. Update the server_name with your domain

### Resource Limits

Adjust resource limits in docker-compose files:

```yaml
deploy:
  resources:
    limits:
      cpus: '2'
      memory: 2G
    reservations:
      cpus: '1'
      memory: 1G
```

## Health Checks

The application includes health check endpoints:

- Application: http://localhost:3000/api/health
- Nginx: http://localhost/health

## Monitoring

View container stats:

```bash
docker stats nurul-portfolio
```

## Troubleshooting

### Container won't start

Check logs:

```bash
docker-compose logs nextjs
```

### Port already in use

Change the port mapping in docker-compose.yml:

```yaml
ports:
  - '3001:3000' # Use 3001 instead of 3000
```

### Build fails

Clear Docker cache and rebuild:

```bash
docker system prune -a
docker-compose build --no-cache
```

### Permission issues

Ensure the nextjs user has proper permissions:

```bash
docker exec -it nurul-portfolio ls -la /app
```

## Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **Image Tags**: Use specific version tags in production
3. **Logs**: Implement log rotation (configured in docker-compose)
4. **Updates**: Regularly update base images
5. **Backups**: Backup volumes if using persistent data

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Docker Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker image
        run: docker build -t nurul-portfolio:${{ github.sha }} .
      - name: Push to registry
        run: |
          echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
          docker push nurul-portfolio:${{ github.sha }}
```

## Additional Resources

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
