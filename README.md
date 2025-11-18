# Nurul Islam Portfolio

A modern, production-ready Next.js portfolio website with PWA support and Docker deployment.

## Features

- ⚡ Next.js 14 with React 18
- 🎨 Modern and responsive UI
- 📱 Progressive Web App (PWA) support
- 🐳 Production-grade Docker setup
- 📧 Contact form with email integration
- 🎯 SEO optimized with sitemap generation
- 🚀 Optimized performance
- 🔒 Security best practices

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Docker Deployment

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

### Quick Deploy

```bash
# Build and run with Docker Compose
npm run docker:run

# Or use the build script
chmod +x docker-build.sh
./docker-build.sh
```

### Docker Commands

```bash
# Build image
npm run docker:build

# Run container (development)
npm run docker:run

# Run container (production)
npm run docker:prod

# View logs
npm run docker:logs

# Stop containers
npm run docker:stop
```

For detailed Docker documentation, see [DOCKER.md](./DOCKER.md)

## Environment Variables

Create a `.env` file in the root directory:

```env
SITE_URL=http://localhost:3000
NODE_ENV=production
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic UI components
│   │   ├── molecules/      # Composite components
│   │   └── layouts/        # Layout components
│   ├── pages/              # Next.js pages
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose config
└── nginx.conf              # Nginx configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run with Docker Compose
- `npm run docker:prod` - Run production Docker setup

## Technologies

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: CSS Modules
- **PWA**: @ducanh2912/next-pwa
- **Email**: Nodemailer
- **Deployment**: Docker + Nginx

## Production Features

### Docker Setup

- Multi-stage builds for optimized image size
- Non-root user for security
- Health checks
- Resource limits
- Log rotation
- Nginx reverse proxy with SSL support

### Performance

- Image optimization
- Static asset caching
- Gzip compression
- Code splitting
- Lazy loading

### Security

- Security headers
- Rate limiting
- HTTPS/SSL support
- Content Security Policy
- Non-root container user

## License

Private

## Author

Nurul Islam
