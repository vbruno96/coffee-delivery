import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";
import { Shopp } from "../../pages/Shopp";
import { Cart } from "../../pages/Cart";
import { Delivery } from "../../pages/Delivery";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shopp />
      },
      {
        path: '/checkout',
        element: <Cart />
      },
      {
        path: 'finish',
        element: <Delivery />
      }
    ]
  }
])