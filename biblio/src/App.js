import logo from './logo.svg';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Book from './Book.js';
import './App.css';

function App() {
  return (
    <div className="App">
       	<Header />
		<Home />
		<Book />
		<Footer />
    </div>
  );
}

export default App;
