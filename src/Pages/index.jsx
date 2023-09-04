import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import ListCards from "./ListCards";
import ListDetails from "./ListDetails";
import ListCheckout from "./ListCheckout";
import Payment from "./Payment";
import { Provider } from "react-redux";
import store from '../Components/Store/index'
import NoMatch from "./NoMatch";



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
                path: 'list-materi/:id/list-checkout/:id',
                element: <ListCheckout/>
            },
            {
                path: 'list-materi/:id/list-checkout/:id/payment/:id',
                element: <Payment/>
            },
            {
                path: '*',
                element: <NoMatch/>
            }
        ]
    }
])

function Router() {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    
  )
}

export default Router;