
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        {/* path for restaurantlist */}
        <Route path='/' element={<RestaurantList />} />
        {/* path for restaurantlist */}
        <Route path='/restaurantdetails/:id' element={<RestaurantDetails />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
