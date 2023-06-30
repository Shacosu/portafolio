import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Calendly from "./views/Calendly";
import Introduction from "./views/Introduction";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <main className="container mx-auto h-full">
        <Introduction />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
