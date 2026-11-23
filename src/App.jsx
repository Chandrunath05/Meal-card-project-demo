import{ BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayouts from './Components/Common-ui/Layouts/DashboardLayouts';
import CreateMeal from './Pages/CreateMeal';
import LandingPage from './Pages/LandingPage';
import MealCard from './Pages/MealCard';
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayouts />}>
          <Route path='/' element={<LandingPage/>} />
          <Route path='mealCard' element={<MealCard />} />
          <Route path='/meals/create' element={<CreateMeal/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;