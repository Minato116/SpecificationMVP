import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./Screens/HomeScreen";
import LogInScreen from "./Screens/LogInScreen";
import ForgotPassword from "./Screens/ForgotPassword";
import SignUp from "./Screens/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Profile from "./Screens/Profile";
import QuizScreen from "./Screens/QuizScreen";
import AdminScreen from "./Screens/AdminScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path='/quiz' element={<QuizScreen />} />
        {/* <Route path='/editproject/:id' element={ <EditProject /> } />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreateProject />} /> */}
      </Route>
      <Route path="" element={<AdminRoute />}>
      <Route path='/admin' element={<AdminScreen />} />

      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PrimeReactProvider> */}
      <RouterProvider router={router} />
      {/* </PrimeReactProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
