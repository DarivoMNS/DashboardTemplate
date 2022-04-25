import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { 
  userInputs,
  productInputs 
} from './formSource';
import { 
  Home,
  Login,
  List,
  Single,
  New,
  ChartsPage
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route 
                path="new" 
                element={
                  <New 
                    inputs={userInputs} 
                    title="Add New User"
                  />
                } 
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route 
                path="new" 
                element={
                  <New 
                    inputs={productInputs}
                    title="Add New Product" 
                  />
                } 
              />
            </Route>
            <Route path="charts" element={<ChartsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
