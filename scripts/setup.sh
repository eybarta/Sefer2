#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up Sefer2 development environment...${NC}\n"

# Check for Python installation
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Python 3 is required but not installed.${NC}"
    exit 1

    # Suggest installation command based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Install with: brew install python3"
    elif command -v apt-get &> /dev/null; then
        echo "Install with: sudo apt-get install python3"
    fi
fi

# Setup Python virtual environment and install dependencies
echo -e "\n${BLUE}Setting up Python environment...${NC}"
cd ai_service

# Create venv if it doesn't exist
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi

# Activate venv and install dependencies
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    source venv/Scripts/activate
else
    source venv/bin/activate
fi

# Upgrade pip and install requirements
python -m pip install --upgrade pip
pip install -r requirements.txt
deactivate
cd ..

# Docker setup
echo -e "\n${BLUE}Setting up Docker services...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is required but not installed.${NC}"
    echo "Please install Docker Desktop from https://www.docker.com/products/docker-desktop"
else
    docker-compose pull
fi

echo -e "\n${GREEN}Setup complete! You can now run 'pnpm dev' or 'pnpm dev:2' to start the development environment.${NC}"