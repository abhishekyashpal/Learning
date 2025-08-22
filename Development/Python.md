Variables:
Variables do not need to be declared with any particular type, and can even change type after they have been set. 
If you want to specify the data type of a variable, this can be done with casting. 
get the data type of a variable with the type() function. 
Rules for Python variables:
A variable name must start with a letter or the underscore character
A variable name cannot start with a number
A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
Variable names are case-sensitive (age, Age and AGE are three different variables)
A variable name cannot be any of the Python keywords.
Variables that are created outside of a function are known as global variables. 
To create a global variable inside a function, you can use the global keyword. 

Data Type:
str
int, float, complex
list, tuple, range
dict
set, frozenset
bool
bytes, bytearray, memoryview
NoneType

List:
mylist = ["apple", "banana", "cherry"] 
Indexed, changeable
use the list() constructor to create a new list. 
Access Items: start-included, end-excluded
thislist[1], thislist[2:5], thislist[:4], thislist[2:], thislist[-4:-1] 
if "apple" in thislist: 
thislist[1] = "blackcurrant" 
thislist[1:3] = ["blackcurrant", "watermelon"] 
thislist.insert(2, "watermelon") 
append() - add an item to the end of the list 
To append elements from another list to the current list, use the extend() method. 
thislist.remove("banana") 
The pop() method removes the specified index. 
del thislist[0] 
The clear() method empties the list. 
for x in thislist: 
for i in range(len(thislist)): 
while i < len(thislist): 
[print(x) for x in thislist] 
List Comprehension offers the shortest syntax for looping through lists: 
newlist = [expression for item in iterable if condition == True] 
thislist.sort() 
thislist.sort(reverse = True) 
thislist.sort(key = myfunc) 
thislist.reverse() 
Copy the List:
You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2. 
mylist = thislist.copy() - copy method
mylist = list(thislist) - list method
mylist = thislist[:] - slice operator
Join two List:
+ operator
append method
extend method


Python Dictionaries:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
} 
thisdict["brand"] 
Dictionaries cannot have two items with the same key: 
Duplicate values will overwrite existing values: 
The values in dictionary items can be of any data type: 
Access Items:
thisdict["model"] 
thisdict.get("model") 
thisdict.keys() 
thisdict.values() 
thisdict.items()  - key value pair
thisdict["year"] = 2018 - change
thisdict.update({"year": 2020}) - update
thisdict["color"] = "red" - add items
thisdict.pop("model") - removes the item with the specified key name 
popitem() method removes the last inserted item 
del thisdict["model"] 
del thisdict 
thisdict.clear() 
for x in thisdict:  - loop
Copy a Dict:
copy() & dict() method
Nested Dictionaries:
myfamily["child2"]["name"] 

Tuple: ()
Indexed, unchangeable
thistuple = ("apple", "banana", "cherry") 
tuple() constructor 
len() function 
Access Items:
thistuple[1] 
Change/Add Items/Remove items - You can convert the tuple into a list, change the list, and convert the list back into a tuple. 
Add tuple to a tuple
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y 
del thistuple 
unpack tuples:
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits 
(green, *tropic, red) = fruits 
Join two tuples:
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)
tuple3 = tuple1 + tuple2 
multiple tuples:
multiply the content of a tuple a given number of times, you can use the * operator.

Sets: {}
unchangeable, and unindexed. 
Set items are unchangeable, but you can remove items and add new items. 
thisset = {"apple", "banana", "cherry"} 
True and 1 are considered the same value in sets 
False and 0 are considered the same value in sets 
set() constructor 
Access Items:
You cannot access items in a set by referring to an index or a key.
for x in thisset:  - use this
Add Items - thisset.add("orange") 
Add Sets-
To add items from another set into the current set, use the update() method. 
object in the update() method does not have to be a set, it can be any iterable object 
Remove items-
thisset.remove("banana") 
thisset.discard("banana") 
If the item to remove does not exist, remove() will raise an error. 
If the item to remove does not exist, discard() will NOT raise an error. 
thisset.pop() - remove a random item 
clear() method empties the set 
del thisset 
loop - for x in thisset: 
Join Sets-
The union() and update() methods joins all items from both sets.
use the | operator 
The intersection() method keeps ONLY the duplicates.
 use the & operator  
The difference() method keeps the items from the first set that are not in the other set(s).
The - operator 
The symmetric_difference() method keeps all items EXCEPT the duplicates.
use the ^ operator 
The symmetric_difference_update() method will also keep all but the duplicates, but it will change the original set instead of returning a new set. 
List is a collection which is ordered and changeable. Allows duplicate members.
Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.
Dictionary is a collection which is ordered** and changeable. No duplicate members.
*Set items are unchangeable, but you can remove and/or add items whenever you like.
**As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.

Tuple and Sets both are unchangeable but tuple is indexed and set is unindexed. Index allow duplicate values and unindex did not allow duplicate values.

F-Strings:
txt = f"The price is 49 dollars" 
Before Python 3.6 we had to use the format() method.

Lambda:
A lambda function is a small anonymous function.
A lambda function can take any number of arguments, but can only have one expression.

Error Handling:
The try block lets you test a block of code for errors.
The except block lets you handle the error.
The else block lets you execute code when there is no error.
The finally block lets you execute code, regardless of the result of the try- and except blocks.
The raise keyword is used to raise an exception. 


Arguments:
A parameter is the variable listed inside the parentheses in the function definition.
An argument is the value that are sent to the function when it is called.
Positional Arguments: 
values are matched to the parameters in the function definition based on their position. 
def my_function(name, age): 
my_function("Alice", 30) 
Keyword Arguments:  
specify the parameter name followed by an equal sign and the value. 
order of keyword arguments does not matter. 
def my_function(name, age): 
my_function(age=30, name="Alice") 
Default Arguments:  
default value specified in the function definition. 
Default arguments must be placed after positional arguments in the function definition.
def my_function(name, age=18): 
my_function("Alice") 
my_function("Bob", 25) 
Arbitrary Arguments (\*args): 
when you don't know in advance how many positional arguments will be passed 
def my_function(name, *args): 
my_function("Alice", "arg1", "arg2", "arg3") 
Arbitrary Keyword Arguments (\*\*kwargs): 
The \*args parameter collects all additional positional arguments into a tuple.
The \*\*kwargs parameter collects all additional keyword arguments into a dictionary.
def my_function(name, **kwargs): 
my_function("Alice", city="New York", country="USA") 
Keyword-Only Arguments: 
arguments must be passed using their parameter names. 
def my_function(name, *, age): 
my_function("Alice", age=30)  # Correct
my_function("Alice", 30) # Incorrect 


OOPS:
🧱 Key OOP Concepts in Python:
Class - Blueprint for creating objects
Object - An instance of a class
__init__() - Constructor method, runs when an object is created
self - Refers to the instance itself
Inheritance - One class inherits from another
Encapsulation - Hiding internal details
Polymorphism - Same method, different behavior in different classes
Abstraction - Hiding complex implementation, showing only essential details

1. Class and Object
Create an object from the class
2. Inheritance
Pass the parent class in the child class and call the function from the parent class in child object.
3. Encapsulation (Private Attributes)
Create a private variable inside the class and try to access from the object of this class
4. Polymorphism
Create same method name in two classes and pass these classes in a common function and trigger the methods from there 
🎭 5. Abstraction (Using abc module)
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

c = Circle(5)
print(c.area())  # 78.5
🔁 6. Special Methods (__str__, __len__, etc.)
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

b = Book("Python Basics")
print(b)  # Output: Book: Python Basics.

The __str__ method in Python is a special method used to define the string representation of an object when you use print() or str() on that object.

Call by Value vs Call by Reference
Call by Value: A copy of the variable is passed. Changes inside the function don't affect the original value.
Call by Reference: A reference (pointer) to the actual variable is passed. Changes affect the original object.
Python uses "call by object reference":
Immutable types (int, str, tuple) behave like call-by-value.
Mutable types (list, dict) behave like call-by-reference.

Callback Function
A callback is a function passed as an argument to another function, executed after the parent completes.

Asynchronous Programming
Helps run non-blocking code. Common with I/O-bound operations like web APIs or file access.
asyncio.gather() - parallel calls
asyncio.future
concurrent.future

Break, Continue, Pass
break: Exits the current loop
continue: Skips the current iteration
pass: Does nothing (placeholder)

Deep Copy vs Shallow Copy
Shallow copy: Copies outer object only.
Deep copy: Recursively copies everything.

Generators
Use yield instead of return to return a lazy iterator.

Pickling and Unpickling
Used for serializing and deserializing Python objects.

Zip Method
Combines multiple iterables element-wise.


Python debugger

Global Interpreter Lock:
GIL ensures that only one thread executes Python bytecode at a time, even on multi-core processors.
Limits true parallelism in CPython.
Use multiprocessing instead of threading for CPU-bound tasks.


Function Annotation
Exception group
For, while, switch loops

Walrus
Walrus Operator (:=) — Python 3.8+
Allows assignment inside expressions.p
if (n := len("hello")) > 3:
 
Packages:
CRUD app

How to secure an api:
Authentication (OAuth2, JWT)
Authorization
Input validation (Pydantic, Marshmallow)
HTTPS
Rate limiting
CORS policy
API keys
Logging & Monitoring

Asyncio

Lambda:
lambda arguments: expression


Timers
Single threading vs multi threading

Array vs List
Array is best for numerical computation and holds similar type data. Type consistency
List has no type consistency suitable to store any data type







What is a Virtual Environment?
A virtual environment in Python is an isolated environment on your computer, where you can run and test your Python projects.
It allows you to manage project-specific dependencies without interfering with other projects or the original Python installation.
Think of a virtual environment as a separate container for each Python project. Each container:
Has its own Python interpreter
Has its own set of installed packages
Is isolated from other virtual environments
Can have different versions of the same package

create a virtual environment 
python -m venv myfirstproject 
Activate the virtual environment: 
myfirstproject\Scripts\activate 
run the app
uvicorn main:app --reload

FastAPI:
FastAPI is a modern web framework that is relatively fast and used for building APIs with Python 3.7+ based on standard Python-type hints 
Features of FastAPI
Automatic Documentation: 
Python Type Hints: 
Data Validation:  - pydantic models
Asynchronous Support: 
Security Features: 
Dependency Injection: 


Uvicorn: Asynchronous Server Gateway Interface 
Uvicorn is an ASGI web server implementation for Python. 
the event loop uvloop will be installed and used if possible.
uvloop is a fast, drop-in replacement of the built-in asyncio event loop.


Pydantic -  data validation
Classes with Type Annotations 
Data Parsing and Serialization 
Data Integrity
Immutable by Default

Parallel execution in python:
Use aiohttp for async HTTP requests.
Use asyncio to manage concurrency.


#####################################################
Python Library

Pandas
NumPy
Matplotlib
Seaborn
scikit-learn
Tensorflow
Keras
Pytorch
OpenCV
NLTK
HuggingFace
Langchain
Pytorch
SciPy


🧮 NumPy Tutorial
📦 1. Installation & Import
pip install numpy
import numpy as np
📘 2. NumPy Arrays
✅ Create Arrays
arr = np.array([1, 2, 3])               # 1D array
mat = np.array([[1, 2], [3, 4]])        # 2D array
✅ Array Properties
arr.shape          # (3,) — shape of the array
arr.ndim           # 1 — number of dimensions
arr.size           # 3 — total elements
arr.dtype          # int64 — data type
🔧 3. Array Creation Methods
📐 Basic Functions
np.zeros((2, 3))          # Array of zeros
np.ones((3, 2))           # Array of ones
np.full((2, 2), 7)        # Filled with 7
np.eye(3)                 # Identity matrix
np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)      # 5 values between 0 and 1
🔢 Range & Random
np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)      # [0. , 0.25, 0.5, 0.75, 1.]
np.random.rand(2, 3)   # Uniform [0,1)
np.random.randn(3)     # Standard normal distribution
np.random.randint(1, 10, size=(2, 2))  # Random ints
✏️ 4. Indexing & Slicing
a = np.array([[10, 20, 30], [40, 50, 60]])
a[0, 1]           # 20
a[:, 1]           # [20, 50]
a[1, :]           # [40, 50, 60]
a[0:2, 1:3]       # Slicing
a[1]          # [40, 50, 60]
a[1:, 1:]     # Submatrix from 2nd row, 2nd column

🔁 5. Array Operations
➕ Arithmetic
a + b
a - b
a * b
a / b
np.sqrt(a)
np.exp(a)
np.log(a)
np.abs(a)
🔄 Aggregation
arr.sum()
arr.mean()
arr.max()
arr.min()
arr.std()
arr.var()
arr.cumsum()        # Cumulative sum
🎯 6. Logical Operations
arr[arr > 5]                # Filter values
np.where(arr > 5, 1, 0)     # If >5, set 1; else 0
np.any(arr > 5)
np.all(arr > 5)

🔁 7. Reshaping & Resizing
arr.reshape(3, 2)          # Change shape
arr.ravel()                # Flatten to 1D
arr.T                      # Transpose
🔗 8. Concatenation & Splitting
np.concatenate([a, b])           # Combine arrays
np.vstack([a, b])                # Vertical stack
np.hstack([a, b])                # Horizontal stack
np.split(arr, 3)                 # Split into 3
📌 9. Copying and Views
b = a.copy()          # Deep copy
c = a.view()          # View (shallow copy
📐 10. Linear Algebra (Very Useful)
np.dot(a, b)                 # Dot product
np.matmul(a, b)              # Matrix multiplication
np.linalg.inv(mat)           # Inverse
np.linalg.det(mat)           # Determinant
np.linalg.eig(mat)           # Eigenvalues/vectors
🧰 13. Other Useful Methods
np.unique(arr) - Unique values
np.sort(arr) - Sort values
np.argsort(arr) - Indices of sorted elements
np.clip(arr, min, max) - Limit values within range
np.append(arr, values) - Append elements
np.delete(arr, index) - Delete elements



Pandas:
Pandas Tutorial
📌 1. Installation & Import
pip install pandas
import pandas as pd
📊 2. Creating Data Structures
✅ Series (1D)
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s)
✅ DataFrame (2D)
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NY', 'LA', 'Chicago']
}
df = pd.DataFrame(data)
print(df)
🛠️ 3. DataFrame Basic Methods
🔍 Viewing Data
df.head()         # First 5 rows
df.tail(3)        # Last 3 rows
df.info()         # Summary
df.describe()     # Stats summary
df.shape          # Rows x Columns
df.columns        # Column names
df.index          # Index info
🎯 Selecting Data
df['Name']             # Single column
df[['Name', 'City']]   # Multiple columns
df.iloc[0]             # First row by index
df.loc[0]              # First row by label
df.iloc[0:2]           # Slicing rows
🔍 4. Filtering and Querying
✅ Boolean Indexing
df[df['Age'] > 30]
✅ Query Method
df.query('Age > 30')
✏️ 5. Modifying Data
➕ Add New Column
df['Country'] = 'USA'
✏️ Update Column
df['Age'] = df['Age'] + 1
❌ Drop Columns/Rows
df.drop('City', axis=1, inplace=True)     # Drop column
df.drop(0, axis=0, inplace=True)
🧼 6. Handling Missing Data
df.isnull()              # Check missing
df.dropna()              # Drop missing
df.fillna(0)             # Fill missing with value
🔁 7. Grouping and Aggregation
df.groupby('City').mean()        # Group by city
df['Age'].agg(['min', 'max'])    # Aggregate
🔄 8. Sorting
df.sort_values('Age')                # Sort by Age
df.sort_values('Age', ascending=False)
🔗 9. Merging and Joining
📎 Merge
pd.merge(df1, df2, on='id')
➕ Join
df1.join(df2, lsuffix='_left', rsuffix='_right')
📤 10. Input/Output Operations
📄 Read
pd.read_csv('data.csv')
pd.read_excel('data.xlsx')
💾 Write
df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)















