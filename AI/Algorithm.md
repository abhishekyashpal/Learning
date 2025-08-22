Linear Regression:
Linear Regression is a fundamental statistical and machine learning technique used to model the relationship between a dependent variable (target) and one or more independent variables (features) by fitting a straight line to the data.
Linear regression finds the best-fitting straight line (y = mx + b) that predicts the target variable y based on the input variable x.

Logistic Regression:
Logistic Regression is a classification algorithm used to predict the probability of a binary outcome (e.g., Yes/No, 0/1, Spam/Not Spam).
Logistic regression uses the sigmoid function to map linear predictions to probabilities:

Decision Tree Algorithm:
What is a Decision Tree?
A tree-like structure where internal nodes are feature tests, branches are outcomes, and leaves are decisions.
Splits data based on criteria like Gini or Entropy to minimize impurity.
Easy to interpret and visualize, works for both classification and regression.

Random Forest Algorithm:
It's an ensemble of multiple decision trees trained on random subsets of the data and features.
Final prediction is made by majority vote (for classification) or average (for regression).
Helps reduce overfitting and improves generalization compared to a single Decision Tree.

Support Vector Machine (SVM)?
Support Vector Machine (SVM) is a powerful supervised learning algorithm used for classification and regression. It works by finding the optimal hyperplane that best separates the classes in the feature space.
Hyperplane: Decision boundary that separates different classes.
Support Vectors: Data points that lie closest to the hyperplane and influence its position.
Margin: Distance between the hyperplane and the nearest data point from either class; SVM tries to maximize the margin.
Works well for both linear and non-linear classification using kernels (like RBF, polynomial, sigmoid).
SVC(kernel='linear')
SVC(kernel='rbf')    # Radial basis function kernel (default, good for non-linear)
SVC(kernel='poly', degree=3)  # Polynomial kernel of degree 3
SVC(kernel='sigmoid')    # Sigmoid kernel

Naive Bayes Algorithm:
Naive Bayes is a probabilistic classifier based on Bayes' Theorem.
It assumes features are independent given the class (hence "naive").
It's especially powerful for text classification problems.
Bayes' Theorem:
P(A|B) = [P(B|A) * P(A)] / P(B)
Types of Naive Bayes:
GaussianNB: for continuous (normally distributed) features
MultinomialNB: for count data (e.g. word counts in text)
BernoulliNB: for binary features

K-Nearest Neighbors (KNN)?
K-Nearest Neighbors (KNN) is a supervised learning algorithm used for both classification and regression. It makes predictions based on the k closest training samples in the feature space.
KNN is a lazy instance-based learning algorithm.
It classifies a new point based on the majority class of its 'k' nearest neighbors (based on distance like Euclidean).
It stores all training data and predicts only when asked (no training phase).
KNeighborsClassifier(n_neighbors=3)
Use odd values of k for binary classification to avoid ties.
Try different values of k using cross-validation or GridSearchCV.


K Means Clustering:
K-Means is an unsupervised machine learning algorithm used to partition data into k clusters. It's widely used for customer segmentation, document clustering, image compression, and more.
Choose k cluster centers (called centroids) randomly.
Assign each data point to the nearest centroid.
Recalculate centroids as the mean of all points in that cluster.
Repeat steps 2–3 until the centroids don’t change much (convergence).
KMeans(n_clusters=3, random_state=42)
PCA(n_components=2)
A higher Adjusted Rand Index (close to 1) means better clustering.
The Elbow Method helps determine the optimal number of clusters (K) for K-Means clustering.
Run K-Means clustering for a range of K values (e.g., 1 to 10).
For each K, calculate the Within-Cluster-Sum of Squared Errors (WCSS) – also called inertia.
Plot K vs. WCSS.
Look for an “elbow” point – where the rate of decrease sharply changes. That K is usually the optimal number of clusters.


How to improve the accuracy of ML Algo:


Shot Learning
Zero-shot Learning
The model performs a task without seeing any examples of that task.
One-shot Learning
The model is given one example of the task before performing it.
Two-shot Learning
The model sees two examples before doing the task.
Few-shot Learning
The model sees a few (2–10+) examples, usually as part of a prompt.
Where These Apply
Language Models (LLMs)
Prompting GPT, BERT, Claude, etc.
Computer Vision
Image classification with few labels
Meta-learning
Models that learn how to learn
Transfer Learning
Adapting to new domains with minimal data
