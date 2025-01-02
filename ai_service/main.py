from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.models import setup_models
from src.scripture_processor import ScriptureProcessor

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize models and processor
models = setup_models()
processor = ScriptureProcessor(models)

@app.get("/process/{reference}")
async def process_scripture(reference: str):
    return await processor.process(reference)

@app.get("/analyze/{word}")
async def analyze_word(word: str):
    return await processor.analyze_word(word)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
