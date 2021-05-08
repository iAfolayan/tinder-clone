import './App.css';
import Header from './Header.js'
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

const App = () => {
  return (
     <div className="app">
        {/* Header */}
        <Header />
        {/* tinderCard */}
        <TinderCards />
        {/* SwiperButtons */}
        <SwipeButtons />
    </div>
  )
}

export default App

