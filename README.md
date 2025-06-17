# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Redux

Step1:
-> Store.js-> Create a store 
-> Configure store using the method configureStore from '@reduxjs/toolkit';
-> export const loginSlice = configureStore({reducer:{loginSlice}});

Step2:
-> LoginSlice.js
=> import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
-> export const userLoginCycle = createAsyncThunk("name",async (input from the useDispatch,thunkApi)=>{try{let res = await axios.post("url",input from the useDispatch; You will get a response from the user. THIS RESPONSE is sent to the below extraReducrs while creating a Slice.)}})
->Now, Create a Slice,
const loginSlice = createSlice({
    name:"login",
    initialState:The initial state of the application values,
    reducers:{Any change without depending on the Backend response},
    extraReducers:(builder)=>{ //Waits for the RESPONSE from the SERVER. //Here the builder is parameter which it is having the method  like addCase, addMatch etc...
builder.addCase(userLoginCycle.pending,(state,action)=>{.......})
        .addCase(userLoginCycle.fulfilled,(state,action)=>{.......})
        .addCase(userLoginCycle.rejected,(state,action)=>{.......})

    }
})

Step3:
-> Component.js
-> import {useDispatch} from 'react-redux'; , import {useSelector} from 'react-redux';
-> import {userLoginCycle} from './slice/loginSlice.js';
-> Const dispatch = useDispatch();
-> Const data1 = useSelector(state=>state); // Here the State STORES the all data from the REDUX store. UseSelector is used to RETRIEVE the Updated STATES from the Redux Store.
-> dispatch(userLoginCycle(input to be sent to backend)); //Dispatch will send the frontend data to the redux store from there it will passed to backend through createAsyncThunk
 
Step4:
-> index.js
=> import {Provider} from 'react-redux';
=> import {loginSlice} from "./Store/store.js"; //The slice which created using createSlice will be storing all the REDUCERS and the Latest states in it. So make it available GLOBALLY we are placing the STORE in the INDEX.js
<Provider store={loginSlice}>
<Browserrouter>
<App/>
</Browserrouter>
<Provider>
