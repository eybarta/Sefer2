from transformers import AutoModelForCausalLM, AutoTokenizer
from sentence_transformers import SentenceTransformer
import faiss
import os

def setup_models():
    # Load language model
    model_name = os.getenv("LLM_MODEL", "meta-llama/LLaMA-2-7b")
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)

    # Load embedding model
    embedding_model = SentenceTransformer(
        "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
    )

    # Initialize FAISS index
    embedding_dim = embedding_model.get_sentence_embedding_dimension()
    index = faiss.IndexFlatL2(embedding_dim)

    return {
        "llm": model,
        "tokenizer": tokenizer,
        "embedding_model": embedding_model,
        "faiss_index": index
    }
