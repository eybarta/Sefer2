import torch
from typing import Dict, Any
import numpy as np
from py_hebrew_tokenizer.tokenizer import tokenize

class ScriptureProcessor:
    def __init__(self, models: Dict[str, Any]):
        self.llm = models["llm"]
        self.tokenizer = models["tokenizer"]
        self.embedding_model = models["embedding_model"]
        self.faiss_index = models["faiss_index"]

    async def process(self, text: str) -> Dict[str, Any]:
        # Tokenize Hebrew text
        tokens = tokenize(text)
        
        # Generate embeddings
        embeddings = self.embedding_model.encode([token.text for token in tokens])
        
        # Search for similar passages
        D, I = self.faiss_index.search(embeddings, k=5)
        
        # Generate insights using LLM
        input_ids = self.tokenizer.encode(text, return_tensors="pt")
        with torch.no_grad():
            output = self.llm.generate(
                input_ids,
                max_length=200,
                num_return_sequences=1,
                pad_token_id=self.tokenizer.eos_token_id
            )
        insights = self.tokenizer.decode(output[0])

        return {
            "tokens": [token.text for token in tokens],
            "similar_passages": I.tolist(),
            "insights": insights
        }

    async def analyze_word(self, word: str) -> Dict[str, Any]:
        # Generate word analysis using LLM
        prompt = f"Analyze the Hebrew word: {word}\n"
        input_ids = self.tokenizer.encode(prompt, return_tensors="pt")
        
        with torch.no_grad():
            output = self.llm.generate(
                input_ids,
                max_length=100,
                num_return_sequences=1,
                pad_token_id=self.tokenizer.eos_token_id
            )
        
        analysis = self.tokenizer.decode(output[0])
        
        return {
            "word": word,
            "analysis": analysis,
            "embedding": self.embedding_model.encode(word).tolist()
        }
