#!/bin/bash

echo "🚀 Starting Zylos AI Full Stack (Backend + Frontend)"
echo "────────────────────────────────────────────"

BACKEND_DIR="./ZylosBackend"
FRONTEND_DIR="./ZylosWeb"

# BACKEND
echo "📌 Checking backend environment..."
cd "$BACKEND_DIR" || exit

if [ ! -d "venv" ]; then
    echo "🔧 Creating Python virtual env..."
    python3 -m venv venv
fi

source venv/bin/activate

echo "📦 Installing backend dependencies..."
pip install -r requirements.txt > /dev/null 2>&1

echo "🗄  Initializing database (if required)..."
python3 ./ZylosBackend/scripts/init_db.py

echo "🔥 Starting Backend FastAPI server..."
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload > ../backend.log 2>&1 &
BACK_PID=$!
echo "💠 Backend running (PID: $BACK_PID)"

cd ..

# FRONTEND
echo "📌 Checking frontend dependencies..."
cd "$FRONTEND_DIR" || exit

if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend node dependencies..."
    npm install --silent
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
