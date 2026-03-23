------------------------------------------------
Scalability & Performance Tools:
Load Balancing
CDN
API Gateway
Message Queue / Pub-Sub:
Rate Limiting & Throttling

------------------------------------------------
Factors Affecting RPS Capacity
Caching (CDN, Redis, Memcached) – reduces backend pressure.

Horizontal scaling – load balancers distribute RPS across clusters.

Rate limiting – APIs enforce quotas to avoid abuse.

Database optimization – read-heavy systems use replicas.

Async architecture – queues help defer and smoothen loads.

------------------------------------------------
3 Nines SLA:

Redundancy
Use multiple replicas of each service (e.g., Pods)
Auto-scaling
Automatically spin up services on high load
Health Checks
Auto-restart unhealthy services (Kubernetes, etc.)
Load Balancing
Distribute traffic evenly (NGINX, AWS ELB, etc.)
Zero-downtime deployments
Use rolling updates, not full restarts
Failover
If region/service goes down, reroute to another
Monitoring & Alerts
Detect issues before they cause big outages
Backups
For quick recovery from failure or data loss

------------------------------------------------
Estimated Requests Per Second (RPS) of Top Web Applications:
Google Search
>200,000–400,000 RPS
Over 8.5 billion searches/day ≈ 100k+ RPS just for search; more for ads, maps, news
Facebook
>500,000–1 million RPS
Likes, posts, feed loads, notifications, comments across 3+ billion users
Instagram
>200,000–400,000 RPS
Stories, reels, likes, comments, feed rendering, DM, image CDN
WhatsApp
>1 million RPS
Over 100 billion messages/day ≈ ~1.1 million RPS on messages alone
Snapchat
50,000–100,000 RPS
Messaging, snaps, filters, stories; smaller than IG/WA but high multimedia load
Amazon (Retail)
>250,000–500,000 RPS
Product views, cart actions, search, dynamic pricing, checkout, ads
YouTube
>500,000–1.2 million RPS
Watch requests, video previews, autoplay, comments, ads, search
Netflix
200,000–400,000 RPS
Recommendations, viewing metadata, CDN edge traffic excluded
Google (Total)
>10 million RPS (all services)
Includes Gmail, Maps, YouTube, Ads, Android updates, etc.
Uber
200,000–500,000 RPS
Real-time location updates, ride requests, pricing, trip status, ETA tracking
Ola
30,000–80,000 RPS
Similar to Uber, but smaller global scale; Indian traffic, driver/pool systems
Flipkart
100,000–300,000 RPS
Product views, search, cart, checkout, offers, and flash sales impact spikes

------------------------------------------------
Nginx-:
Forward Proxy-squid
Used when client wants to access a resource indirectly.

Proxy hides client identity from the internet.
Reverse Proxy-nginx, HAProxy
Used when server wants to manage client traffic.

Reverse proxy hides backend infrastructure from the client.
Load Balancing, Cache, SSL

------------------------------------------------
Elastic Search-:

Cluster:
A cluster in Elasticsearch is a collection of one or more nodes (servers) that together store your data and provide distributed indexing and search capabilities.
A cluster is a group of nodes that:
Share the same cluster name

Work together to store data and perform operations

Automatically distribute and replicate data across nodes
Each cluster has:
A cluster name
A unique UUID (auto-generated)

One active master node at a time
A cluster:
Distributes data among all data nodes

Handles indexing, searching, updating, and deleting

Replicates shards for high availability

Performs automatic failover if a node fails

Maintains cluster state centrally via the master node
The master node maintains the cluster state, which includes:

List of nodes

Index metadata

Shard allocation

State is stored in-memory and updated via consensus

Sharding:
Sharding is the process of splitting an index into multiple pieces called shards.
Distribute data across multiple nodes

Parallel processing

Handle large data that doesn’t fit on a single machine
Distribution of shards-
Shards are spread across nodes for load balancing

A replica of a shard will never be placed on the same node as its primary

Replication:
Replication is the process of copying primary shards to ensure:
High availability (failover if a node crashes)

Better search performance (replicas can serve read requests)

Failover: If primary goes down, replica is promoted to primary

Scalability: Reads (searches and GETs) can be distributed
Write: Routed to primary shard, then synced to replicas

Read: GET goes to 1 shard, Search goes to all shards

Routing determines which shard a doc lives on

Search is eventually consistent — newly written docs may not be instantly visible until refresh

Writes are durable because of translog + replication

Node and node roles:
A node is one Elasticsearch server process

A cluster is a group of nodes working together

Nodes discover each other and form a single unified system
Node Roles-
master-Handles cluster coordination: creating/deleting indices, assigning shards
data-Stores data and handles CRUD, search, and aggregations
ingest-Preprocesses documents before indexing (e.g., pipelines, processors)
ml-Executes machine learning jobs (if ML is enabled)
coordinating-Acts as a smart router, handles client requests and delegates to other nodes
remote_cluster_client-Used for cross-cluster search queries
transform-Executes data transformation tasks
voting_only-Can participate in master elections but can't be elected as master
search-Handles search requests (newer versions support search-dedicated nodes)

Sequence No-
An ever-increasing number assigned to every write operation (index, update, delete) on a shard

Each primary shard generates its own sequence numbers

Used to replicate changes to replicas in the correct order

Replay missing writes on replicas

Detect failed replication

Conflict resolution

Primary Term-
Each time a primary shard fails and a replica is promoted to primary, the primary term is incremented

Helps ensure that older writes from an old primary are not accepted

Write rejection from stale primaries

Ensuring monotonic shard leadership

Optimistic Concurrency Control-
You can use _seq_no and _primary_term to prevent overwriting a document that has changed since you last read it.
This will succeed only if the document’s sequence number and primary term match exactly.
If the document has changed (i.e., another write happened), the update is rejected.

Analyser-
An analyzer consists of:
Tokenizer – Breaks text into terms

Zero or more Character Filters – Preprocess input text

Zero or more Token Filters – Modify tokens (e.g., lowercase, stem)

Doc values-
Doc values are on-disk data structures used by Elasticsearch to support fast sorting, aggregations, and scripting.
Stored columnar (column-oriented), optimized for read performance

Enabled by default for most fields (like keyword, date, numeric)

Disabled by default for full-text fields (text type)

Coercion-
Coercion in Elasticsearch means automatically converting data types during indexing when possible.

Reindex-
Reindex copies documents from one index to another. You can change mappings, settings, or even transform data during the process.

_mapping-
_mapping refers to the structure or schema of your index.
Field names

Field data types (e.g., text, keyword, integer, etc.)

Field-level options (like analyzer, doc_values, index, etc.)

Elastic common schema-
ECS defines a common set of field names and data types used across:
Logs (e.g., web server, syslog)

Security data (e.g., endpoint, firewall)

Metrics (e.g., CPU, memory usage)

Observability data (e.g., APM traces, uptime)

Goal: Normalize data so you can correlate, search, and visualize it easily across different sources in Kibana, SIEM, APM, etc.

Index template-
An index template in Elasticsearch is a way to automatically apply settings, mappings, and aliases to new indices that match a certain naming pattern.

Join-
Elasticsearch is not relational, but it supports parent-child relationships using the join field.

Aggregations-

Fuzziness-
Fuzziness allows you to perform approximate matching in match or multi_match queries — useful for handling typos and spelling variations.

Data types-
Core Types
text
, keyword
, long
, integer
, short
, byte
, double
, float
, half_float
, scaled_float
, boolean
, date

Complex Types
object
, nested
, array (implicit)

Geo Types
geo_point
, geo_shape
, point (WKT)

Range Types
integer_range
, float_range
, long_range
, double_range
, date_range

Specialized Types
ip
, binary
, token_count
, join
, alias
, version


------------------------------------------------
Rate Limiter-:

Fixed Window-
Track requests per fixed time window (e.g., per minute).
Bursts can happen at window boundaries.
Sliding Window-
Uses rolling time to count requests.

More accurate control by tracking timestamps of each request or maintaining buckets.
Token Bucket-
Flexible and burst-tolerant.

Server gives clients a “bucket” of tokens. Each request consumes 1 token.

Tokens refill at a fixed rate (e.g., 5/sec, up to a max of 100).

If the bucket is empty, requests are denied or delayed.
Leaky Bucket-
Smoother than Token Bucket.

Requests enter a queue (bucket), and leave at a steady rate.

Prevents bursts — if the queue overflows, requests are dropped.
Implement-
Nginx (Reverse proxy level)
Redis (Custom or library-backed)
API Gateway (e.g., AWS API Gateway or Kong)

------------------------------------------------
Design Pattern-:

Singleton Design Pattern-:
The Singleton Design Pattern is a creational design pattern that ensures a class has only one instance throughout the lifetime of an application and provides a global point of access to that instance.
Single Instance: Only one object is created for the entire application.

Global Access Point: You can access the instance globally (like a static method).

Controlled Instantiation: Instantiation is done only once, usually via a static method.
Can lead to tight coupling
Harder to mock in unit testing
Needs synchronization in some languages

Factory Design Pattern-:
The Factory Design Pattern is a creational design pattern that provides an interface for creating objects, but allows subclasses or methods to decide which class to instantiate.
Instead of creating objects directly with new, you use a factory method to create them. This promotes loose coupling and makes the code more scalable and testable.
When the object creation logic is complex

When the type of object to create is determined at runtime

When you want to encapsulate object creation logic
Encapsulates creation
Adds flexibility
Supports polymorphism
Improves testability

Angular-DI, Observer, Facade, module, factory
React-Hooks, HOC, Component

------------------------------------------------
SOLID Principles-:
The SOLID design principles are five foundational principles of object-oriented design that help create maintainable, scalable, and testable software.
Single Responsibility Principle
One class → one reason to change
Open/Closed Principle
Open for extension, closed for modification
Liskov Substitution Principle
Objects of a subclass should be replaceable with objects of the superclass without breaking behavior.
Interface Segregation Principle
A class should not be forced to implement interfaces it doesn’t use.
Dependency Inversion Principle
High-level modules should not depend on low-level modules. Both should depend on abstractions.

----------------------------------------------
UML-:
Class diagram-
A Class Diagram shows the blueprint of an object-oriented system.
It models the classes, their attributes, methods, and the relationships between them.

Association
Straight line
"has a" relationship (e.g., User → Order)
Inheritance
Solid line + hollow triangle
"is a" relationship (e.g., Admin → User)
Aggregation
Line + hollow diamond
"whole-part", but both can exist independently
Composition
Line + filled diamond
Stronger "whole-part", lifetime tied
Dependency
Dotted arrow
One class uses another temporarily
Multiplicity
1, *, 0..1, etc.
How many instances are related

- → Private

+ → Public

# → Protected

Sequence Diagram-
A Sequence Diagram shows how objects or components interact with each other over time to complete a process.
Activity Diagram-
An Activity Diagram shows the flow of control or data in a system — like a flowchart.

---------------------------------------------
Apache Airflow-:
Apache Airflow is an open-source platform used to programmatically author, schedule, and monitor workflows (also called DAGs - Directed Acyclic Graphs).

DAG-Directed Acyclic Graph – a workflow definition
Task-A unit of work (e.g., run a Python function or Bash command)
Operator-Defines what a task does (e.g., PythonOperator, BashOperator)
Scheduler-Triggers DAGs based on time or events
Web UI-Lets you monitor and manage DAGs visually

Operators:
PythonOperator: run Python functions

BashOperator: run shell commands

EmailOperator: send emails

DummyOperator: placeholder for testing

BranchPythonOperator: conditional branching

Schedule Intervals:
"@once" - Run once only
"@daily" - Every day
"@hourly" - Every hour
cron - Custom cron expression like "0 12 * * *"

------------------------------------------------
Databricks:



------------------------------------------------
Snowflake:

--------------------------------------------

Strong transactions (ACID), relational data
Relational DB (RDBMS)
MySQL, PostgreSQL, Oracle, SQL Server
Flexible schema, semi-structured JSON
Document DB (NoSQL)
MongoDB, Couchbase
Super-fast lookups, caching, sessions
Key-Value Store
Redis, DynamoDB, Aerospike
High write scalability, large event logs
Wide-Column DB
Cassandra, HBase
Complex relationships, networks, fraud
Graph DB
Neo4j, ArangoDB, JanusGraph
Time-based data (metrics, IoT, logs)
Time-Series DB
InfluxDB, TimescaleDB, Prometheus
Large-scale analytics & BI (OLAP)
Data Warehouse
Snowflake, BigQuery, Redshift, Databricks SQL
Full-text search, log indexing
Search DB
Elasticsearch, OpenSearch, Solr
Streaming ingestion, real-time analytics
Stream Processing + DB
Kafka + ksqlDB, Materialize
AI/ML Feature Store (training data)
Lakehouse / Hybrid DB
Databricks Delta Lake, Feast (feature store)

When designing a system, consider these:
Data Model → Is your data relational, key-value, graph, time-series, documents?

Access Pattern → Reads heavy? Writes heavy? Random lookups? Joins? Analytics?

Scale → Do you need to scale vertically (single node) or horizontally (distributed)?

Consistency vs Availability (CAP theorem) → Do you prefer strong consistency, or can you allow eventual consistency for scalability?

Latency → Do you need millisecond lookups, or is batch analytics fine?

Query Complexity → Do you need transactions and joins, or just simple key-value lookups?

Ecosystem Integration → Does it work well with your pipelines (e.g., Kafka, Spark, Databricks)?

Do I need strict transactions? → RDBMS.

Do I need flexible schema? → MongoDB.

Do I need super fast caching? → Redis.

Do I need analytics/aggregations? → Snowflake/BigQuery.

Do I need full-text search? → Elasticsearch.

Do I need high write scalability? → Cassandra.

Do I need graph relationships? → Neo4j.
Time Series DB - InfluxDB


User-facing apps (transactions) → RDBMS (Postgres/MySQL).

User profiles & product catalogs → MongoDB.

High traffic caching → Redis.

Analytics/dashboards → Snowflake / BigQuery.

Logs & monitoring → Elasticsearch / Loki / Prometheus.

Social graph / fraud detection → Neo4j.

Massive IoT / telemetry → InfluxDB / Cassandra.

ACID (SQL Databases)
Atomicity → All or nothing

Consistency → Valid state → Valid state

Isolation → Transactions don’t interfere

Durability → Once saved, always saved
Focus: Correctness & reliability

BASE (NoSQL Databases)
Basically Available → System always responds

Soft state → State may change due to replication

Eventually consistent → Data becomes consistent Focus: Scalability & availability

ACID = Strong consistency (accuracy first)

BASE = Eventual consistency (availability & scale first)

--------------------------------------------