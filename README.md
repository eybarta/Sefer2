# Sefer2

A modern Hebrew Scripture reader with AI-enhanced features for deeper textual understanding.

## Features

- Hebrew text rendering with niqqud support
- AI-powered cross-references and insights
- Integration with Sefaria API
- Real-time commentary and annotations
- Multi-platform support via React Native

## Project Structure

- `client/`: React Native Expo application
- `server/`: NestJS backend service
- `ai_service/`: FastAPI AI processing service
- `db/`: Database migrations and schemas
- `tests/`: Comprehensive test suite

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- Python 3.8+
- PostgreSQL
- Redis

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eybarta/Sefer2.git
cd Sefer2
```

2. Follow setup instructions in each service directory:
- `client/README.md` for React Native setup
- `server/README.md` for NestJS backend
- `ai_service/README.md` for AI service

## Architecture

The application follows a microservices architecture:
- React Native client for cross-platform support
- NestJS backend for API gateway and business logic
- FastAPI service for AI processing
- PostgreSQL for persistent storage
- Redis for caching

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details