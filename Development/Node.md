what is programming language?
To communicate with computers, programmers also need a language is called Programming language.

Web Services????????
A web service is any piece of software that makes itself available over the internet and uses a standardized XML messaging system. XML is used to encode all communications to a web service.

what is framework?
A framework is a structure that you can build software on. It serves as a foundation, so you’re not starting entirely from scratch.

what is library?
A programming library is a collectiohn of prewritten code that programmers can use to optimize tasks.

what is scripting language?
A scripting language is a programming language that employs a high-level construct to interpret and execute one command at a time. 

high level language and Low level language?
The main difference between high level language and low level language is that, Programmers can easily understand or interpret or compile the high level language in comparison of machine. 
On the other hand, Machine can easily understand the low level language in comparison of human beings.
High level language is less memory efficient. & Low level language is high memory efficient.
It is easy to understand & It is tough to understand.
Debugging is easy. & Debugging is complex comparatively.
It is portable. & It is non-portable.
It can run on any platform. & It is machine-dependent.
It needs compiler or interpreter for translation. & It needs assembler for translation.
It is used widely for programming. & It is not commonly used now-a-days in programming.

Compiler and Interpreter?
A Compiler takes a program as a whole. An Interpreter takes single lines of a code. 

Nodejs runtime env???????????
JS runtime env = JS Engine[Memory Heap(variable allocation) + Call Stack(function alloction)] + Web API(http, time function, api, promises, dom, storage) + Callback Queue(Take from Web API and give to Event Loop).
Browser needs JS runtime env not JS engine only to execute the JS code
Chrome-V8, Mozilla-Spider Monkey

Advantage of nodejs?
high scalability, ease of learning, extraordinary performance, profound extensiveness, active support from a large community of developers

Advantage of nodejs over Java?????????
Node.js:
Same language across both frontend and backend
Faster and easier development
High application speed for IO-intensive apps
Scalability
Processing speed
Java:
Platform independence
Convenient IDE
Large ecosystem
Higher performance for CPU-intensive apps
Processing speed

Libuv: 
cross platform open source library written in C.
handles asynchronous non-blocking operation in NodeJS.
It uses Thread Pool and Event Loop.

Event-driven asynchronous I/O model is integrated.
It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.

What is a thread pool?????? 
Libuv assigns tasks to a pool of worker threads. However, all callbacks that occur on task completion are executed on the main thread. 
Note: After Node 10.5 worker threads can also be used to execute JavaScript in parallel. Libuv uses 4 threads by default, but can be changed using the UV_THREADPOOL_SIZE 

File I/O: File I/O is implemented in libuv using a global thread pool on which all loops can queue work. It allows disk to be used in an abstracted asynchronous fashion. It breaks down complex operations into simpler operations to facilitate async-like behavior.

Event-Driven Programming is a logical pattern that we can choose to confine our programming within to avoid issues of complexity and collision.
Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions, and then simply waits for the event to occur.
In an event-driven application, there is generally a main loop that listens for events and then triggers a callback function when one of those events is detected.
Every time you interact with a webpage through its user interface, an event is happening. When you click a button a click event is triggered. When you press a key a key down event is triggered. These events have associated functions that, when triggered, are executed to make a change to the user interface in some way.
Event-Driven Programming makes use of the following concepts:
An Event Handler is a callback function that will be called when an event is triggered.
The Main Loop listens for event triggers and calls the associated event handler for that event.

Diff between put patch post??????????????
POST is always for creating a resource ( does not matter if it was duplicated )
PUT is for checking if resource exists then update, else create new resource
PATCH is always for updating a resource. it does partial update.
Other http methods - options all any
connect - The CONNECT method is used by the client to establish a network connection to a web server over HTTP.
options - The OPTIONS method is used by the client to find out the HTTP methods and other options supported by a web server.
trace - The TRACE method is used to echo the contents of an HTTP Request back to the requester which can be used for debugging purpose.
head - The HEAD method is functionally similar to GET, except that the server replies with a response line and headers, but no entity-body.

Http Error code?
2xx Success-------
200 OK
3xx Redirection--------
4xx Client Error--------
400 Bad Request
403 Forbidden
404 Not Found
5xx Server Error-------
500 Internal Server Error
502 Bad Gateway
504 Gateway Timeout


CPU, core, process, thread?????
a “thread” is an independent process that runs on a CPU core.
Core is a physical hardware component whereas thread is the virtual component that manages the tasks of the core.

Process - A process is a running program in the operating system. It has its own memory and cannot see nor access the memory of other running programs. It also has an instruction pointer, which indicates the instruction currently being executed in a program. Only one task can be executed at a time.

Thread - Threads are like processes: they have their own instruction pointer and can execute one JavaScript task at a time. Unlike processes, threads do not have their own memory. Instead, they reside within a process’s memory. When you create a process, it can have multiple threads created with the worker_threads module executing JavaScript code in parallel. Furthermore, threads can communicate with one another through message passing or sharing data in the process’s memory. This makes them lightweight in comparison to processes, since spawning a thread does not ask for more memory from the operating system.

Middleware????????
It contains req, res, next object and can be applied on application, route level.

Next Function????????
next() : It will run or execute the code after all the middleware function is finished.
return next() : By using return next it will jump out the callback immediately and the code below return next() will be unreachable.

How authentication works?????????

Event Loop Mechanism and Phase???????
Event Loop takes the task from Event Queue. executes the synchronous task and pass it to Web API if it is asynchronous task. callback function is registered with the Web API and that callback function will passed to Event Quque again. Event Loop detects the task in Event Queue. Heap Memory create the memory for the variables and function is being executed in callstack. JS engine consists of memory heap and callstack.

Buffers and Streams??????????

Piping in Streams???????

What is ExpresJS and why?????????
Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.
Fast Server-Side Development 
Middleware
Routing
Templating

package.json vs package-lock.json????????????
package.json is a versioning file used to install multiple packages in your project.
package-lock.json is created for locking the dependency with the installed version.

Tilde (~) - only a patch release.
Caret (^) - minor releases and patch releases.
Asterisk (*) - all releases

dependency vs devDependency?????????
"dependencies" : Packages required by your application in production. "devDependencies" : Packages that are only needed for local development and testing.

Sequelize ORM???????

Chai & Mocha???????????

Clustering & Child Process?????????????
var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}
fork() - Creates a new worker, from a master

Process manager?????
https://pm2.keymetrics.io/docs/usage/quick-start/
A process manager is somewhat like an application server: it’s a “container” for applications that facilitates deployment, provides high availability, and enables you to manage the application at runtime.
pm2 commads:
npm install pm2@latest -g
pm2 start app.js
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
pm2 logs
pm2 plus - Web based dashboard, cross servers with diagnostic system:
pm2 monit - realtime dashboard
For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.
pm2 start app.js -i max
pm2 ecosystem - create a configuration file, called Ecosystem File, to manage multiple applications.
pm2 start ecosystem.config.js
pm2 startup - Restarting PM2 with the processes you manage on server boot/reboot is critical.
pm2 save - freeze a process list for automatic respawn:
pm2 update - update pm2

Event-driven/EventEmitter???????
events in backend...
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
emit is used to trigger an event
on is used to add a callback function that's going to be executed when the event is triggered
eventEmitter.on('start', () => {
  console.log('started');
});
eventEmitter.emit('start');
.emit() - this method in event emitter is to emit an event in module
.on() - this method is to listen to data on a registered event in node.js
.once() - it listen to data on a registered event only once.
.addListener() - it checks if the listener is registered for an event.
.removeListener() - it removes the listener for an event.

Rest vs Soap vs GraphQL?????????

How to create interface for req object????

Dependency & Sub dependency version management????? 
https://docs.npmjs.com/cli/v9/configuring-npm/package-json

dist folder?????????

process object???????
global object that can be accessed inside any module without requiring it.

Microservices Architecture Principles????????

Protocols?????????

Libraries in nodejs??????????
http-status-code
Lodash
winston/logger
cors
body-parser
Express
mongoose

Logging steps???????
Logger winston 
Add winston to app.use() 



--save vs -g????????
npm install - with no arguments, will install everything listed in the dependencies area of the package.json file.
npm install  <package-name> - will install that package only, and will not add the package to the dependencies list in package.json
npm install <package-name> --save - will install that package only, and will add the package to the dependencies list.
npm install -g module - npm will install it in a place where your path variable will resolve this command.

server-side rendering vs client side rendering????????
SSR renders the page on the server-side and CSR renders the page on the client-side. The client-side dynamically manages the routing without refreshing the page each time the client requests another route.
SSR - faster initial load
CSR - complex user interface
SSR - serves html css js files seperately
CSR - html css js files in aequence on after another. 


//////////////Timers in nodejs/////////////////
setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called. setImmediate() is designed to execute a script once the current poll phase completes. setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

if we run the following script which is not within an I/O cycle (i.e. the main module), the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process:

process.nextTick - puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers.
setTimeout - setTimeout a timeout of 0, there's no additional enforced delay before its execution, and it is placed on into the timer queue during the next loop.
setImmediate - Its callback is placed in the check queue of the next cycle of the event loop. Since the check queue occurs later than the timer queue, setImmediate will be slower than setTimeout 0.

Event Loop Phase - TI2PC2
Timers: callbacks from setInterval or setTimeout
IO callbacks: callbacks from I/O events
Idle: used internally by Node between IO and Poll phases
Poll: retrieve new I/O events
Check: callbacks from setImmediate execute here
Close: handle closed connections like sockets

Communication between microservices architecture???

npmrc file????
path/to/npm/itself/npmrc
This is an unchangeable "builtin" configuration file that npm keeps consistent across updates. Set fields in here using the ./configure script that comes with npm.

Http vs https???? 
Http - req res protocol
HTTPS uses an encryption protocol to encrypt communications. The protocol is called Transport Layer Security (TLS), although formerly it was known as Secure Sockets Layer (SSL). This protocol secures communications by using what’s known as an asymmetric public key infrastructure. This type of security system uses two different keys to encrypt communications between two parties:

The private key - this key is controlled by the owner of a website and it’s kept, as the reader may have speculated, private. This key lives on a web server and is used to decrypt information encrypted by the public key.
The public key - this key is available to everyone who wants to interact with the server in a way that’s secure. Information that’s encrypted by the public key can only be decrypted by the private key.


Headers in API????
HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response.

Webhook in nodejs??? 



How to secure an API???



