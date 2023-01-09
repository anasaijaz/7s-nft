import React, { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Index from "./pages/index";
import {Box, CssBaseline, useTheme} from "@mui/material";
import Explore from "./pages/explore/Explore";
import Activity from "./pages/activity/Activity";
import Product from './pages/product/Product'
import WalletConnector from "./components/UI/WalletConnector/WalletConnector";
import Value from "./pages/value/Value";
import Footer from "./components/UI/Footer/Footer";
import Cart from "./pages/cart/Cart";

function App() {
    const theme = useTheme()

  return (
    <Box className="App" sx={{
        backgroundColor: theme.palette.background.grey
    }}>
        <WalletConnector/>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={ <Index/> } />
            <Route path="/explore" element={ <Explore/> } />
            <Route path="/activity" element={ <Activity/> } />
            <Route path="/product/:id" element={ <Product/> } />
            <Route path="/value" element={ <Value/> } />
            <Route path="/cart" element={ <Cart/> } />
        </Routes>

        <Footer/>

    </Box>
  )
}

export default App
