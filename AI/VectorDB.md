📚 What is a Vector Database?
A Vector Database stores and indexes high-dimensional vector embeddings for fast similarity search.
💡 How it Works:
Data (text, image, etc.) → Encoder/Model → Vector Embedding
Store the embedding in a vector DB along with metadata
Query with another vector → Return similar vectors using nearest-neighbor search
# 📦 Install dependencies
# pip install faiss-cpu sentence-transformers

from sentence_transformers import SentenceTransformer
import numpy as np
import faiss

# 📝 Sample data
documents = [
    "I love machine learning.",
    "Natural Language Processing is fascinating.",
    "Deep learning is a subset of machine learning.",
    "AI will shape the future.",
    "Cats are great pets.",
    "Dogs are loyal companions."
]

# 🔍 Load pre-trained transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# 🔢 Generate embeddings
embeddings = model.encode(documents)

# 🔧 Create FAISS index (L2 = Euclidean distance)
dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)

# 📥 Add embeddings to FAISS index
index.add(np.array(embeddings))

# 🔎 Query string
query = "Tell me something about AI and machine learning"
query_embedding = model.encode([query])

# 🔍 Perform similarity search
top_k = 3
distances, indices = index.search(np.array(query_embedding), top_k)

# 📤 Show results
print(f"Query: {query}\n")
for i, idx in enumerate(indices[0]):
    print(f"Rank {i+1}: {documents[idx]} (Distance: {distances[0][i]:.4f})")




Questions-
What is feature engineering
How to do the vectorization
Embedding
