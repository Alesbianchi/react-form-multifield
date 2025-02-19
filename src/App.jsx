import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInput from "./components/UserInput";
import TitleLists from "./components/TitleLists";
import PostsForm from "./components/PostsForm";


function App() {


  return (
    <>
      <UserInput />
      <TitleLists />
      <PostsForm />
    </>
  )
}

export default App
