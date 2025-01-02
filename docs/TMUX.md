# Tmux Guide for Sefer2 Development

## What is tmux?

Tmux (Terminal Multiplexer) is a powerful tool that allows you to:
- Run multiple terminal sessions within a single window
- Keep processes running even after disconnecting
- Split your terminal into multiple panes
- Switch between different window layouts

## Basic Concepts

1. **Sessions**: Container for windows that can be detached/reattached
2. **Windows**: Like tabs in your terminal
3. **Panes**: Split sections within a window

## Common Commands

### Session Management
```bash
tmux ls                     # List sessions
tmux attach -t sefer2       # Attach to our session
tmux kill-session -t sefer2  # Kill the session
Ctrl-B + d                  # Detach from session
```

### Window Management
```bash
Ctrl-B + c    # Create window
Ctrl-B + n    # Next window
Ctrl-B + p    # Previous window
Ctrl-B + 0-9  # Switch to window number
Ctrl-B + &    # Kill window
```

### Pane Management
```bash
Ctrl-B + %          # Split vertical
Ctrl-B + "          # Split horizontal
Ctrl-B + arrows     # Navigate panes
Ctrl-B + z          # Zoom pane
Ctrl-B + x          # Close pane
Ctrl-B + space      # Cycle layouts
```

## Sefer2 Development Layout

Our `dev:2` command creates:

1. **Main Window (0)**:
   - Left: NestJS server
   - Right: FastAPI service

2. **Hidden Windows**:
   - Window 1: React Native client
   - Window 2: Database services

## Tips

1. **Session Recovery**
   If you disconnect, reattach with:
   ```bash
   tmux attach -t sefer2
   ```

2. **Monitoring Services**
   - Use `Ctrl-B + z` to zoom into logs
   - Use `Ctrl-B + arrows` to check different services

3. **Layout Customization**
   - Modify `scripts/dev.sh` to change default layout
   - Use `Ctrl-B + space` for different arrangements

## Troubleshooting

1. **Session Won't Start**
   ```bash
   # Kill existing session
   tmux kill-session -t sefer2
   # Start fresh
   pnpm dev:2
   ```

2. **Lost Session**
   ```bash
   # List sessions
   tmux ls
   # Reattach
   tmux attach -t sefer2
   ```

3. **Pane Frozen**
   ```bash
   # Enter copy mode
   Ctrl-B + [
   # Exit copy mode
   q
   ```