import './App.css'
import { Navbar } from './components/Navbar'
import { ImageSlide } from './components/ImageSlide'
import { Description } from './components/Description'

function App() {
    return (
        <div className="App">
            <Navbar />
            <ImageSlide />
            <Description />
        </div>
    )
}

export default App
