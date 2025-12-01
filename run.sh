#!/bin/bash

echo "🚀 Starting Zylos AI Full Stack (Backend + Frontend)"
echo "────────────────────────────────────────────"

BACKEND_DIR="./ZylosBackend"
FRONTEND_DIR="./ZylosWeb"
INIT_DB_SCRIPT="ZylosBackend/scripts/init_db.py"

# BACKEND
echo "📌 Checking backend environment..."
if [ ! -d "$BACKEND_DIR" ]; then
    echo "❌ Error: Backend directory '$BACKEND_DIR' not found."
    exit 1
fi
cd "$BACKEND_DIR" || exit

if [ ! -d "venv" ]; then
    echo "🔧 Creating Python virtual env..."
    python3 -m venv venv
fi

source venv/bin/activate

if [ -f "requirements.txt" ]; then
    echo "📦 Installing backend dependencies..."
    pip install -r requirements.txt > /dev/null 2>&1
else
    echo "⚠️ Warning: 'requirements.txt' not found. Skipping dependency installation."
fi

if [ -f "$INIT_DB_SCRIPT" ]; then
    echo "🗄  Initializing database (if required)..."
    python3 "$INIT_DB_SCRIPT"
else
    echo "⚠️ Warning: Database init script '$INIT_DB_SCRIPT' not found. Skipping."
fi

echo "🔥 Starting Backend FastAPI server..."
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload > ../backend.log 2>&1 &
BACK_PID=$!
echo "💠 Backend running (PID: $BACK_PID)"

cd ..

# FRONTEND
echo "📌 Checking frontend dependencies..."
if [ ! -d "$FRONTEND_DIR" ]; then
    echo "❌ Error: Frontend directory '$FRONTEND_DIR' not found."
    exit 1
fi
cd "$FRONTEND_DIR" || exit

if [ ! -d "node_modules" ]; then
    if [ -f "package.json" ]; then
        echo "📦 Installing frontend node dependencies..."
        npm install --silent
    else
        echo "⚠️ Warning: 'package.json' not found. Skipping npm install."
    fi
fi

echo "🌐 Starting React (Vite) frontend..."
npm run dev > ../frontend.log 2>&1 &
FRONT_PID=$!
echo "💠 Frontend running (PID: $FRONT_PID)"

cd ..

echo ""
echo "────────────────────────────────────────────"
echo "🚀 Zylos AI Full System Running"
echo "Frontend → http://localhost:5173"
echo "Backend  → http://localhost:8000"
echo "Swagger  → http://localhost:8000/docs"
echo "────────────────────────────────────────────"
echo "💡 To stop everything, run: ./stop.sh"
