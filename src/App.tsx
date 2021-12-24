import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroesList } from './containers/HeroesList';

import { Wrapper } from './App.styles';
import { Header } from './components/Header';
import { HeroPage } from './containers/HeroPage';

const App: React.FC = () => (
  <BrowserRouter basename='/dotabase'>
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<HeroesList />} />
        <Route path='/hero/:id' element={<HeroPage />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
);

export default App;
