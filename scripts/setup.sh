#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up Sefer2 development environment...${NC}\n"

# Setup Python virtual environment and install dependencies
echo -e "\n${BLUE}Setting up Python environment...${NC}"
cd ai_service
python -m venv venv
source venv/bin/activate || source venv/Scripts/activate
pip install -r requirements.txt
deactivate
cd ..

# Docker setup
echo -e "\n${BLUE}Setting up Docker services...${NC}"
docker-compose pull

echo -e "\n${GREEN}Setup complete! You can now run 'pnpm dev' or 'pnpm dev:2' to start the development environment.${NC}"