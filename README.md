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

### Development with tmux

The `dev:2` command creates a development environment using tmux:

```
┌─────────────────┬─────────────────┐
│                 │                 │
│    NestJS       │   FastAPI       │
│    Server       │   AI Service    │
│                 │                 │
└─────────────────┴─────────────────┘
+ Minimized windows for client and database
```

#### Essential tmux Commands
- `Ctrl-B + d`: Detach from session (keeps services running)
- `Ctrl-B + arrow keys`: Navigate between panes
- `Ctrl-B + 0-9`: Switch to window number
- `Ctrl-B + x`: Close current pane
- `Ctrl-B + z`: Zoom in/out of current pane

For detailed tmux documentation, see [docs/TMUX.md](docs/TMUX.md)

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
├── docs/            # Documentation and guides
└── docker-compose.yml
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details