import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages Import
import Home from './Home';
import Category from './Category';
import FirstSinglePage from './singlePageDesign/FirstSinglePage';
import SecondSinglePage from './singlePageDesign/SecondSinglePage';
import ThirdSinglePage from './singlePageDesign/ThirdSinglePage';
import FourSinglePage from './singlePageDesign/FourSinglePage';
import FiveSinglePage from './singlePageDesign/FiveSinglePage';
import SixSinglePage from './singlePageDesign/SixSinglePage';
import Error from './Error';
// import header component
import Header from './components/Header';
// import header Info component
import HeaderInfo from './components/HeaderInfo';
// import search component
import Search from './components/Search';
// import footer component
import Footer from './components/Footer';



const App = () => {
  const theme = {
    colors:{
      primary:"#095797",
      second_primary: "#dae6f0",
      border_color:"#c5cad2",
      footer_color: "#223654",
    }
  }
  return (
    <>
     <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <HeaderInfo/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/category/:name' element={<Category/>}/>
            <Route path='/single/:name/:title' element={<FirstSinglePage/>}/>
            <Route path='/single2/:name/:title' element={<SecondSinglePage/>}/>
            <Route path='/single3/:name' element={<ThirdSinglePage/>}/>
            <Route path='/single4/:name' element={<FourSinglePage/>}/>
            <Route path='/single5/:name' element={<FiveSinglePage/>}/>
            <Route path='/single6/:name' element={<SixSinglePage/>}/>
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App;
