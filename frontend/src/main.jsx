import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './Context/UserProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
  <App />
  </UserProvider>
  </BrowserRouter>
 ) 
