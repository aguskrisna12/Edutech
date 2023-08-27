import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import ListCards from "./ListCards";
import ListDetails from "./ListDetails";
import Login from "../Components/Login";
import ListCheckout from "./ListCheckout";
import Payment from "./Payment";
import VerifikasiPayment from "./VerifikasiPayment";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <ListCards/>
            },
            {
                path: 'list-materi/:id',
                element: <ListDetails/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'list-checkout',
                element: <ListCheckout/>
            },
            {
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'verifikasi-payment',
                element: <VerifikasiPayment/>
            }
        ]
    }
])

function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router;