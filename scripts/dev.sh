#!/bin/bash

# Function to cleanup background processes on exit
cleanup() {
    echo "Cleaning up..."
    kill $(jobs -p) 2>/dev/null
    exit 0
}

# Set up cleanup trap
trap cleanup EXIT INT TERM

# Create a new tmux session detached
tmux new-session -d -s sefer2

# Split the window horizontally for server and AI service
tmux split-window -h

# Select first pane and start server
tmux select-pane -t 0
tmux send-keys 'cd server && pnpm dev' C-m

# Select second pane and start AI service
tmux select-pane -t 1
tmux send-keys 'cd ai_service && uvicorn main:app --reload' C-m

# Create new window for client (minimized)
tmux new-window -d 'cd client && pnpm dev'

# Create new window for database (minimized)
tmux new-window -d 'docker-compose up db redis'

# Attach to the session
tmux attach-session -t sefer2
