-------------------------------------------
Topics:
Vector DB
Perceptron, Multi Layer Perceptron, Loss function, Activation Function, Gradient Descent, Error, Regularization, Normalization, FNN, backpropogation, tensor
Cross validation, evaluation matrix, RNN, CNN, LSTM, GRU, Seq2Seq, GAN, AE, VAE
Self attention, multi head attention, positional encoding, encoder-decoder, embedding, contextual embedding, tokenization, 
transfer learning, transfer Inference.
Transformer, RAG, Diffusion models
Agentic AI, multi model Agents, MCP server
ML:SVM, Logistic, Naive Bayes, KNN, DT-RF, KMC
LLM, Multi modal LLM
Visualization: HeatMap, Confusion matrix, ROC curve, Loss/Accuracy curve, PCA, LIME, Clustering, word clouds, saliency maps, tensorboard.

---------------------------------------------
🔹 Perceptron
The most basic unit of a neural network.
Takes inputs, multiplies them with weights, adds a bias term, and passes the result through an activation function.
Works as a simple classifier for linearly separable problems (like separating points with a straight line).
Limitation: cannot solve non-linear problems such as XOR.

🔹 Multi-Layer Perceptron (MLP)
A collection of multiple perceptrons arranged in layers: input, hidden, and output.
Each neuron in one layer connects to every neuron in the next (fully connected).
By stacking multiple hidden layers and using non-linear activations, MLPs can learn very complex relationships.
This structure is what we usually mean by a “basic neural network.”

🔹 FeedForward Neural Network (FNN)
A type of network where information moves strictly forward: from input → hidden layers → output.
No cycles or feedback connections.
Used for tasks like regression, classification, and feature extraction.
MLP is a classic example of a feedforward neural network.

🔹 Backpropagation
The main algorithm for training feedforward networks.
Process:
Do a forward pass to compute predictions.
Calculate the loss (how wrong the predictions are).
Propagate the error backward through the network using derivatives.
Adjust the weights slightly to reduce the error.
Repeated many times until the model learns patterns well.

🔹 Loss Function
A mathematical way to measure how far the model’s predictions are from the actual outputs.
Guides the training process.
Different tasks use different loss functions:
Regression → Mean Squared Error, Mean Absolute Error.
Binary classification → Binary Cross-Entropy.
Multi-class classification → Categorical Cross-Entropy.

🔹 Gradient Descent
The optimization technique that updates the weights of the network to reduce the loss.
Works by moving step by step in the direction where the loss decreases.
The size of the step is controlled by the learning rate.
Variants:
Batch Gradient Descent → updates after seeing the whole dataset.
Stochastic Gradient Descent (SGD) → updates after every single example.
Mini-Batch Gradient Descent → updates after small groups of examples (most commonly used).
Advanced optimizers like Adam and RMSProp build on gradient descent for faster and more stable training.

🔹 Activation Functions
Decide whether a neuron should “fire” and how strongly.
Introduce non-linearity, allowing networks to learn complex, non-linear mappings.
Common ones:
Sigmoid → squashes values between 0 and 1; used for probabilities but can suffer from vanishing gradients.
Tanh → outputs between -1 and 1; centered at zero, better than sigmoid in some cases.
ReLU → outputs 0 for negatives and the same value for positives; simple and widely used.
Leaky ReLU → fixes the “dead neuron” problem in ReLU by allowing small negative outputs.
Softmax → converts outputs into probabilities for multi-class classification.

🔹 Vector
A one-dimensional array of numbers that has both magnitude and direction.
Represents data points, features, or weights in machine learning.
For example, a person’s height, weight, and age can form a 3-dimensional vector.
Supports operations like addition, scaling, and dot product, which are fundamental in ML computations.

🔹 Tensor
A generalization of scalars, vectors, and matrices.
Scalars are 0D tensors, vectors are 1D, matrices are 2D, and anything higher (like images or sequences) is a tensor of rank 3 or more.
In deep learning, almost everything (inputs, weights, outputs) is stored and processed as tensors.
Example: A color image is typically a 3D tensor with width, height, and channels (RGB).

🔹 Regularization
Techniques to prevent overfitting (when the model memorizes training data instead of generalizing).
Main approaches:
L1 Regularization (Lasso) → pushes some weights to zero, effectively doing feature selection.
L2 Regularization (Ridge) → discourages large weights, keeping the model simpler and smoother.
Dropout → randomly deactivates neurons during training to reduce dependency.
Early Stopping → halts training when performance stops improving on validation data.
Data Augmentation → increases dataset variety artificially (e.g., rotating images).
Batch Normalization → stabilizes training and reduces overfitting slightly.

🔹 Normalization
The process of scaling data so that features are on a comparable scale.
Speeds up training and prevents features with large ranges from dominating.
Common methods:
Min-Max Scaling → rescales values into a fixed range like [0,1].
Z-score Standardization → shifts data so mean = 0 and standard deviation = 1.
Decimal Scaling / Unit Vector Normalization → less common alternatives.
In deep learning, normalization is also applied inside the network (Batch Normalization, Layer Normalization).

🔹 Standard Scaler
A specific type of normalization also known as Z-score standardization.
It centers data by subtracting the mean and then scales it by dividing by the standard deviation.
After scaling, each feature has mean 0 and standard deviation 1.
Ensures all features contribute equally and makes optimization more stable and faster.

🔹 Cross Validation
Purpose: Test model’s ability to generalize to unseen data.
How it works: Data is divided into folds → model trained on some folds → validated on remaining → repeated multiple times.
Types:
k-fold CV: Common method; averages performance across k runs.
Stratified k-fold: Ensures class balance across folds.
LOOCV (Leave-One-Out): Each sample is once used for validation (high variance, costly).
Time-series CV: Keeps chronological order to avoid look-ahead bias.
Advantages: reduces overfitting risk, gives robust evaluation.
Disadvantage: computationally expensive for large datasets.

🔹 Evaluation Metrics
Classification:
Accuracy → overall correctness.
Precision → reliability of positive predictions.
Recall → ability to capture all actual positives.
F1-score → balance between precision & recall.
ROC-AUC → measures class separability.
Confusion Matrix → breakdown of predictions (TP, TN, FP, FN).
Regression:
MAE → average absolute error.
MSE → penalizes large errors strongly.
RMSE → interpretable scale.
R² → variance explained by model.
Clustering: Silhouette score, Davies–Bouldin index, ARI.
Ranking/IR: Precision@k, Recall@k, MAP, NDCG.
Note: The right metric depends on task and dataset characteristics (e.g., imbalanced data needs F1, not accuracy).

🔹 RNN (Recurrent Neural Network)
Designed for sequential data (text, speech, time-series).
Works by maintaining a hidden state that carries information from past inputs.
Each step depends on current input + previous hidden state.
Problems:
Vanishing gradient (long dependencies lost).
Exploding gradient (instability).
Applications: NLP, speech recognition, stock forecasting, handwriting generation.
Variants: LSTM, GRU, bidirectional RNN, stacked RNNs.

🔹 LSTM (Long Short-Term Memory)
Extension of RNN that solves long-term dependency problems.
Maintains a cell state (memory) that flows across time steps.
Uses gates to regulate information:
Forget gate → what to discard.
Input gate → what new info to add.
Output gate → what to output at this step.
Can retain info for long sequences.
Applications: translation (seq2seq), chatbots, speech recognition, text generation, time-series forecasting.

🔹 GRU (Gated Recurrent Unit)
A simpler, faster alternative to LSTM.
Uses only a hidden state (no separate cell state).
Two gates:
Update gate → decides how much past info to keep.
Reset gate → decides how much past info to forget.
Requires fewer parameters than LSTM → faster training.
Performance: often close to LSTM, sometimes better on smaller datasets.
Applications: NLP tasks, speech, sequential recommendation systems.

🔹 CNN (Convolutional Neural Network)
Best suited for spatial data (images, video, audio, time-series).
Key components:
Convolutional layers → extract local features (edges, textures, shapes).
ReLU activation → adds non-linearity.
Pooling (max/avg) → reduces feature size, prevents overfitting.
Fully connected layers → combine features for final classification/regression.
Advantages: fewer parameters (weight sharing), translation invariance, hierarchical feature learning.
Applications:
Image classification & detection.
Medical imaging.
Speech recognition.
NLP (text CNNs for sentiment analysis).

🔹 GAN (Generative Adversarial Network)
Framework for generating realistic data.
Two networks:
Generator (G) → produces fake data from random noise.
Discriminator (D) → distinguishes real vs fake.
Training = adversarial game → G improves by fooling D, D improves by catching G.
Variants:
DCGAN (deep CNN-based GAN).
WGAN (stabilizes training with Wasserstein distance).
CycleGAN (image-to-image translation).
StyleGAN (photorealistic face generation).
cGAN (conditional GAN with labels).
Applications: image generation, video synthesis, style transfer, super-resolution, deepfakes, data augmentation.
Challenges: training instability, mode collapse (generator produces limited variety), difficulty in evaluation.

🔹 Seq2Seq (Sequence-to-Sequence)
Used for mapping one sequence to another (input → output).
Architecture:
Encoder → reads input and compresses it into a context vector.
Decoder → generates output step by step using this vector.
Problem: fixed-size vector fails for long sequences.
Solution: Attention mechanism → allows decoder to look at all encoder outputs (not just the last state).
Applications:
Machine translation.
Text summarization.
Chatbots.
Speech-to-text.
Image captioning.
Modern evolution: Transformers (no recurrence, rely only on attention).

🔹 Autoencoder (AE)
Unsupervised neural network that compresses input into a smaller latent space and reconstructs it.
Structure: Encoder → Latent space → Decoder.
Learns compact feature representation.
Variants:
Denoising AE → removes noise from data.
Sparse AE → enforces sparsity in latent code.
Convolutional AE → works well with images.
Sequence AE → for text/time-series.
Applications:
Dimensionality reduction (like PCA but non-linear).
Anomaly detection.
Feature extraction.
Denoising data.
Pretraining deep networks.

🔹 Variational Autoencoder (VAE)
A probabilistic generative model.
Instead of encoding input to a fixed point, encoder produces a distribution (mean & variance).
A latent vector is sampled from this distribution → passed to decoder.
Uses reparameterization trick to allow backpropagation.
Loss = Reconstruction loss + KL divergence (regularizes latent space to resemble Gaussian).
Advantages:
Smooth, continuous latent space.
Can generate new, realistic data samples.
Better generalization compared to AE.
Applications:
Image & text generation.
Data augmentation.
Anomaly detection.
Semi-supervised learning.
Difference from AE: AE = deterministic compression, VAE = probabilistic + generative.

1. Self-Attention
Purpose: Helps the model decide which parts of the input sequence are relevant to each token.
Mechanism:
Each token is mapped into 3 vectors: Query (Q), Key (K), Value (V).
Attention score = similarity between Q and K.
Apply softmax to get weights.
Weighted sum of V gives the updated token representation.
Formula: Attention(Q,K,V)=softmax(QKTdk)VAttention(Q, K, V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)VAttention(Q,K,V)=softmax(dk​​QKT​)V
Example: In “The cat sat on the mat”, when encoding “cat”, attention highlights “sat” and “mat” as more relevant than “the”.

2. Multi-Head Attention
Problem: One self-attention head may miss some relationships.
Solution: Use multiple heads in parallel.
Each head has its own WQ,WK,WVW^Q, W^K, W^VWQ,WK,WV.
Captures different dependencies (syntax, semantics, long-range).
Formula: MultiHead(Q,K,V)=Concat(head1,head2,…,headh)WOMultiHead(Q, K, V) = Concat(head_1, head_2, …, head_h) W^OMultiHead(Q,K,V)=Concat(head1​,head2​,…,headh​)WO
Intuition: Different “perspectives” on the same sequence.
Example:
Head 1 → subject–verb link.
Head 2 → word order.
Head 3 → long-distance relation.

3. Positional Encoding
Why: Attention doesn’t understand order — “dog bites man” vs “man bites dog.”
How: Add positional vectors to embeddings.
Formula (sin/cos): PE(pos,2i)=sin⁡(pos100002i/dmodel),PE(pos,2i+1)=cos⁡(pos100002i/dmodel)PE(pos, 2i) = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right), \quad PE(pos, 2i+1) = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)PE(pos,2i)=sin(100002i/dmodel​pos​),PE(pos,2i+1)=cos(100002i/dmodel​pos​)
Intuition: Different frequencies encode short- vs long-range positions.
Variants:
Absolute (sin/cos or learned).
Relative (modern models: T5, Transformer-XL).

4. Encoder–Decoder Architecture
Encoder:
Input embeddings + positional encodings.
Layers of: self-attention → feed-forward → norm.
Outputs = context-rich vectors.
Decoder:
Input = shifted output sequence (teacher forcing).
Masked self-attention (cannot peek ahead).
Encoder–decoder attention (queries encoder output).
Feed-forward + norm.
Predicts next token until <END>.
Example (Translation):
Input: “I love cats” (English).
Encoder builds meaning representation.
Decoder outputs: “J’adore les chats” (French).

5. Embeddings vs Contextual Embeddings
Static Embeddings (Word2Vec, GloVe):
Each word has one fixed vector.
Same vector for “bank” in river bank and money bank.
Contextual Embeddings (BERT, GPT):
Embeddings depend on surrounding words.
“Bank” in river bank vs money bank → different vectors.
Importance: Contextual embeddings solve polysemy and ambiguity.

6. Tokenization
Purpose: Convert text → tokens → IDs → embeddings.
Types:
Word-level: ["I", "love", "cats"] (large vocab, OOV problem).
Character-level: ["c", "a", "t", "s"] (long sequences).
Subword-level (most common): break into frequent chunks.
“unhappiness” → ["un", "happi", "ness"].
Algorithms:
BPE (GPT-2, RoBERTa).
WordPiece (BERT).
Unigram LM (XLNet, SentencePiece).

7. Transfer Learning
Definition: Reuse knowledge from one large pretraining task for a smaller downstream task.
Process:
Pretrain on huge corpora (Wikipedia, Books, Web).
Fine-tune on task-specific dataset (e.g., sentiment, QA).
Advantages:
Saves compute.
Works with small datasets.
Improves generalization.
Examples:
Pretrained BERT → fine-tuned for spam detection.
Pretrained ResNet → fine-tuned for medical images.

8. Transfer Inference
Definition: Using the pretrained/fine-tuned model to make predictions on new data.
Pipeline: Pretraining → Fine-tuning → Inference
Example:
Fine-tune BERT on movie reviews (positive/negative).
At inference, input “The film was fantastic” → Output: Positive.
Importance: This is the stage where models are deployed in real-world apps.




