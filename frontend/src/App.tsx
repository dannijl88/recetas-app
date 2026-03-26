
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { RecipeDetail } from './pages/RecipeDetail';
import { CreateRecipe } from './pages/CreateRecipe';
import { EditRecipe } from './pages/EditRecipe';
import './App.css'
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recipes/:id' element={<ProtectedRoute><RecipeDetail /></ProtectedRoute>} />
        <Route path='/recipes/create' element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
        <Route path='/recipes/edit/:id' element={<ProtectedRoute><EditRecipe /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
