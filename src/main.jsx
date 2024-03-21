import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
        path: '/about',
        element: <About></About>
       },
       {
        path: '/contact',
        element: <Contact></Contact>
       },
       {
        path: '/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
       },
       {
        // dynamic path for user component
        path: 'users/:userId',
        loader:({params})=> {
          
          const data = fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)

          return data;
        },
        element: <UserDetails></UserDetails>
       },
       {
        path: '/posts',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
       },
       {
        path:'/posts/:postId',
        loader: ({params})=>{
          const data = fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
          return data
        },
        element: <PostDetail></PostDetail>
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
