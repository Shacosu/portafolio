import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Introduction from "./views/Introduction";

function App() {
	return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="container mx-auto h-full">
        <Introduction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
