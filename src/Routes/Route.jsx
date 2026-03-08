import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import AllTreatment from "../components/AllTreatment/AllTreatment";
import MyAppointment from "../components/MyAppointment/MyAppointment";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/service.json')
        },
        {path:'/allTreatment',
        element:<AllTreatment></AllTreatment>,
        loader:()=>fetch('/service.json')
        },
        {path:'/myAppoinment',
        element:<MyAppointment></MyAppointment>
        },
        {path:'/profile',
        element:<Profile></Profile>
        }
      ]
    }
  ]);

  export default router;