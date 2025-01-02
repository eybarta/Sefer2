#!/bin/bash

# Function to cleanup background processes on exit
cleanup() {
    echo "Cleaning up..."
    tmux kill-session -t sefer2 2>/dev/null
    exit 0
}

# Function to activate virtual environment based on OS
activate_venv() {
    if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        source venv/Scripts/activate
    else
        source venv/bin/activate
    fi
}

# Set up cleanup trap
trap cleanup EXIT INT TERM

# Ensure virtual environment exists
if [ ! -d "ai_service/venv" ]; then
    echo "Python virtual environment not found. Running setup..."
    ./scripts/setup.sh
fi

# Create a new tmux session detached
tmux new-session -d -s sefer2

# Split the window horizontally for server and AI service
tmux split-window -h

# Select first pane and start server
tmux select-pane -t 0
tmux send-keys 'cd server && pnpm dev' C-m

# Select second pane and start AI service
tmux select-pane -t 1
tmux send-keys 'cd ai_service && source venv/bin/activate && python -m uvicorn main:app --reload' C-m

# Create new window for client (minimized)
tmux new-window -d 'cd client && pnpm dev'

# Create new window for database (minimized)
tmux new-window -d 'docker-compose up db redis'

# Attach to the session
tmux attach-session -t sefer2