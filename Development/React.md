
How React works? 
Users can create a representation of a DOM node by declaring the Element function in React.
ReactJS is an open-source JavaScript library that is used for building user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of an MVC (Model View Controller) architecture. React is used to create modular user interfaces and it promotes the development of reusable UI components that display dynamic data.
ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.

React Hooks---------------------------------------------------------------------------
1. useState
const [count, setCount] = useState(0);

2. useEffect
mount - runs after every render, empty dependency array for single run
update - pass variable in dependency array 
unmount - return a function 

3. useContext

const UserContext = createContext()
<UserContext.Provider value={"Jesse Hall"}>
          <ComponentA/>
      </UserContext.Provider>

 const user = useContext(UserContext);

4. useReducer
primitive hook
useState is built using useReducer
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
The useReducer Hook returns the current stateand a dispatch method.
const [state, dispatch] = useReducer(countReducer, initialState);

5. useRef

It can be used to access a DOM element directly.
const inputElement = useRef();
inputElement.current
  const focusInput = () => {
    inputElement.current.focus();
  };
<input type="text" ref={inputElement} />

If a state can not be used outside of the Hook then useRef comes into the picture.
usRef holds the reference to the DOM node, It is also used to store any mutable value.
Value persists between re-rendering while also not causing additional re-rendering while value changes.

6. useMemo to memoize the heavy computation
It caches the result returned by callback function within itself.
useMemo is used to memoize expensive calculations, avoiding recalculating unless dependencies change

7. useCallback
useCallback to memoize the function.
It caches the function returned by callback itself.
useCallback is used to memoize functions, preventing them from being recreated on every render unless dependencies change.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.


8. Custom Hooks - 
javascript function starts with use keyword.
to share logic between components
alternate to HOCs and render props.
avoid repeatition of code.

Example1:-
import { useEffect } from 'react';

function useDocumenTitle(count) {
    useEffect(()=> {
        document.title = `Count ${count}`
    }, [count])
}

Example2:-
import { useState } from 'react';

function useCounterHook(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount);

    const increment = ()=> {
        setCount(prevCount=> prevCount + value)
    }
    const decrement = ()=> {
        setCount(prevCount=> prevCount - value)
    }
    const reset = ()=> {
        setCount(initialCount);
    }
    return [count, increment, decrement, reset]
}

// use in other component
// const [count, increment, decrement, reset] = useCounterHook(10, 2);

export default useCounterHook

export default useDocumenTitle

////////////////////////////////////////////////////////////////
Controlled and Uncontrolled Component:
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

React.memo???? 
you can wrap it into React.memo for boosting performance. This means that React will compare the last render with the current one, and if no changes are noticed, it will skip rendering the component.

useImperativeHandle hook -  customizes the instance value exposed to a parent when using a reference. modifies a created reference.
useImperativeHandle(ref, createHandle, [deps])
The ref - The forwarded reference from the parent component.
The createHandle - A function that returns an object with all the functions you want to expose to the parent.
The deps - All the dependencies for the createHandle function.

HOC????? 
A component return another component.

Real DOM vs Virtual DOM and library????? 
VirtualDOM - ReactDOM(react-dom/client)

keys??????
A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists.

{users.map((user, index) => (
              <tr key={index + 1}>
                                <th scope="row" >{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
               </tr>
))}

state and props???????
props:
Props are read-only.
Props are immutable.
Props allow you to pass data from one component to other components as an argument.
Props can be accessed by the child component.
Props are used to communicate between components.
Stateless component can have Props.
Props make components reusable.
Props are external and controlled by whatever renders the component.
state:
State changes can be asynchronous.
State is mutable.
State holds information about the components.
State cannot be accessed by child components.
States can be used for rendering dynamic changes with the component.
Stateless components cannot have State.
State cannot make components reusable.
The State is internal and controlled by the React Component itself.

Context API??????
"prop drilling" or moving props from grandparent to child to parent

Thunk and Saga middleware???????
In thunk, action creator does not return an object, it returns a function, In the saga, it allows you to send action normally.

Throttling???????????
const expensive = () => {
    console.log('expensive');
}
const betterExpensive = throttle(expensive, 1000);
const throttle = (func, limit)=> {
    let flag = true;
    return function() {
        let context = this, args = arguments;
        if(flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}
setInterval(betterExpensive, 100);

Debouncing?????????????
let counter = 0;
const getData = ()=> {
    console.log('fetch data');
}
const Debouncing= (func, delay)=> {
    let timer;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=> {
            func.apply(context, args);
        }, delay)
    }
}
const betterFunction = Debouncing(getData, 300);

setInterval(betterFunction, 100);

//////////////Throttling vs Debouncing
They do the exact same thing (rate limiting) but while throttle is being called it fires your function periodically, while debounce just fires once at the end.

Throttle fires throughout, debounce only fires at the end.

Example: If you're scrolling, throttle will slowly call your function while you scroll (every X milliseconds). Debounce will wait until after you're done scrolling to call your function.

///////////////////////////////////////////////////////////forwardRef
How To Call A Child Function From A Parent Component In React???????
allows parent components to move down (or “forward”) refs to their children.
ForwardRef gives a child component a reference to a DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.


Child Component//////////
Child - forwarRef HOC(props, ref) retrun the useImperativeHandle which return a function with ref argument
Parent - create the instance of useRef and consume the child's ref.
           use ref.current.functioName via onClick event in parent component.

///////////////////////////////////////////////////////////////////////////////////
Pass Child data to Parent Component
 // set the data via onClick event in props method in Child Component
 // and consume props method in parent component.

//////Component Lifecycle/////////
Initialization
Mounting
Updating
Unmounting
------------------Class vs Functional Component------------

--------------Fallback UI & ErrorBoundary????-----------------

-----------------Webpack--------------------------------------

Pure component? ??? 
A React component is considered pure if it renders the same output for the same state and props

useSelector?????
it returns state information from the redux store.


Redux Saga???? 
Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations. These operations are also known as side effects.

Redux thunk????? 
Without redux-thunk, we are only allow to dispatch objects with a type property. With this middleware, we can return functions. Within the functions, we can do async calls (i.e. API calls) before or after we dispatch actions.

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch(      
      innerDispatch => innerDispatch({ type: 'INCREMENT' })      
    ),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};

///////////////////////////
React memo
React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings.

Virtual DOM:

The virtual DOM provides a mechanism that abstracts manual DOM manipulations away from the developer, helping us to write more predictable code. It does so by comparing two render trees to determine exactly what has changed, only updating what is necessary on the actual DOM. Like React, Vue also employs this strategy.
It is stored in browser memory
HTML represents webpage 
DOM represents entire UI
JavaScript modifies node in the DOM tree. Tree updation is not costly it's fast but DOM update is costly. 
Similar objects are present in Real DOM and Virtual DOM but in Virtual DOM it has not power to change the layout of the DOM. 
React maintains two Virtual DOM 
Pre uodated DOM and updated DOM using diffing.  Updated object will be moved to Real DOM using batch update. And entire transformation is known as Reconciliation.
Steps in DOM manipulation - 
The browser parses the HTML to find the node with this id.
It removes the child element of this specific element.
Updates the element(DOM) with the ‘updated value’.
Recalculates the CSS for the parent and child nodes.
Update the layout.
Finally, traverse the tree and paint it on the screen(browser) display.

/////////////////////////////////Redux//////////////////////////////////
Action, Reducer, Store
https://redux.js.org/
Hot reloading - which means replacing pieces of code without restarting your whole app.
Redux Toolkit - simplify the redux


Redux Thunk:
Thunk is a logical concept in programming where you deal with a function that is primarily used to delay the calculation or evaluation of any operation. Redux Thunk acts as a middleware that will return you a function instead of an object while calling through the action creators.

Thunks are best used for complex synchronous logic, and simple to moderate async logic such as making a standard AJAX request and dispatching actions based on the request results.

The Redux Toolkit configureStore API automatically adds the thunk middleware during store creation

How middleware works? 
The outer function receives a "store API" object with {dispatch, getState}
The middle function receives the next middleware in the chain (or the actual store.dispatch method)
The inner function will be called with each action as it's passed through the middleware chain
// standard middleware definition, with 3 nested functions:
// 1) Accepts `{dispatch, getState}`
// 2) Accepts `next`
// 3) Accepts `action`
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(dispatch, getState)
    }

    // Otherwise, it's a normal action - send it onwards
    return next(action)
  }


Redux Saga
decoupled from your action creators for you to handle your application's side effects.