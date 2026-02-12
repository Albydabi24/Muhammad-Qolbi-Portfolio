import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
    const location = useLocation()

    return (
        <HelmetProvider>
            <div className="app">
                <Navbar />
                <main>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}
