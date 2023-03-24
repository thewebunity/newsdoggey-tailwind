import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newspage from './page/Newspage';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './component/Navbar';

const App = () => {
    const [progress, setProgress] = useState(0);
    return (
        <BrowserRouter>
            <LoadingBar color='#f11946' progress={progress} height={3} />
            <Navbar />
            <Routes>
                <Route path='/' element={<Newspage category="general" setProgress={setProgress} />} />
                <Route path='/business' element={<Newspage category="business" setProgress={setProgress} />} />
                <Route path='/entertainment' element={<Newspage category="entertainment" setProgress={setProgress} />} />
                <Route path='/health' element={<Newspage category="health" setProgress={setProgress} />} />
                <Route path='/science' element={<Newspage category="science" setProgress={setProgress} />} />
                <Route path='/sports' element={<Newspage category="sports" setProgress={setProgress} />} />
                <Route path='/technology' element={<Newspage category="technology" setProgress={setProgress} />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App