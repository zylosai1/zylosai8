#!/bin/bash

echo "🛑 Stopping Zylos AI Full Stack..."

# Kill backend (Uvicorn)
PGREP_UVICORN=$(pgrep -f "uvicorn app.main:app")
if [ -n "$PGREP_UVICORN" ]; then
    echo "🔪 Stopping backend server..."
    pkill -f "uvicorn app.main:app"
fi

# Kill frontend (Vite)
PGREP_VITE=$(pgrep -f "npm run dev")
if [ -n "$PGREP_VITE" ]; then
    echo "🔪 Stopping frontend server..."
    pkill -f "npm run dev"
fi

# Cleanup log files
rm -f backend.log frontend.log

echo "✔ Zylos stopped successfully."
