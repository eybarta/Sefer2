# Sefer2

A modern Hebrew Scripture reader with AI-enhanced features for deeper textual understanding.

## Features

- Hebrew text rendering with niqqud support
- AI-powered cross-references and insights
- Integration with Sefaria API
- Real-time commentary and annotations
- Multi-platform support via React Native

## Development

### Prerequisites

- Node.js (v18 or later)
- PNPM (v8 or later)
- Python 3.8+
- Docker and Docker Compose
- tmux

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/eybarta/Sefer2.git
cd Sefer2
```

2. Install dependencies:
```bash
pnpm install
```

3. Start all services:
```bash
# Option 1: Start all services in separate windows
pnpm dev

# Option 2: Start with tmux layout (server & AI side by side, others minimized)
pnpm dev:2
```

### Development Layout

The `dev:2` command sets up a tmux session with:
- Server and AI service terminals side by side
- Client and database services in minimized windows
- Automatic cleanup on exit

### Available Commands

- `pnpm dev`: Start all services individually
- `pnpm dev:2`: Start services with tmux layout
- `pnpm build`: Build all packages
- `pnpm test`: Run tests
- `pnpm lint`: Run linting

## Project Structure

```
.
├── client/          # React Native Expo application
├── server/          # NestJS backend service
├── ai_service/      # FastAPI AI processing service
├── scripts/         # Development and utility scripts
└── docker-compose.yml
```

## Architecture

The application follows a microservices architecture:
- React Native client for cross-platform support
- NestJS backend for API gateway and business logic
- FastAPI service for AI processing
- PostgreSQL for persistent storage
- Redis for caching

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details