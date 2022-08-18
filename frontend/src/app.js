import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Book from "./components/Book";
import Clip from "./components/Clip";
import Footer from "./components/Footer";
import Postblog from "./components/Postblog";
import Postbook from "./components/Postbook";
import Postclip from "./components/Postclip";
import Composeblogbit from "./components/Composeblogbit";
import Composebookbit from "./components/Composebookbit";
import ComposeClipBit from "./components/Composeclipbit";
import BlogbitCategory from "./components/Searchedblog";
import BookbitGenre from "./components/Searchedbook";
import ClipbitTag from "./components/Searchedclip";
import {
  Routes, 
  Route
} from 'react-router-dom';

class App extends Component {

render(){
  return (
    <div>
        {/* <Navigation></Navigation> */}
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/blogbits" element={<Blog/>} />
            <Route path="/bookbits" element={<Book/>} />
            <Route path="/clipbits" element={<Clip/>} />
            <Route path="/postblog" element={<Postblog/>} />
            <Route path="/postbook" element={<Postbook/>} />
            <Route path="/postclip" element={<Postclip/>} />
            <Route path="/composeblogbit" element={<Composeblogbit/>} />
            <Route path="/composebookbit" element={<Composebookbit/>} />
            <Route path="/composeclipBit" element={<ComposeClipBit/>} />
            <Route path="/blogbits/:category" element={<BlogbitCategory/>} />
            <Route path="/bookbits/:genre" element={<BookbitGenre/>} />
            <Route path="/clipbits/:tag" element={<ClipbitTag/>} />
        </Routes>
        <Footer></Footer>
    </div>
  );}
}

export default App;