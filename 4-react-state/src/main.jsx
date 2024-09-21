import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowMyName from './ShowMyName.jsx'
import Faq from './Faq.jsx'
import FaqSection from './FaqSection.jsx'

// createRoot(document.getElementById('root')).render(<App />)
// createRoot(document.getElementById('root')).render(<ShowMyName />)
// createRoot(document.getElementById('root')).render(<Faq/>)
createRoot(document.getElementById('root')).render(<FaqSection/>)
