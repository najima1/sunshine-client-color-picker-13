import logo from './logo.svg';
import './App.css';
import Context_provider from './Component/Context/Context';
import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/router';
import { ProSidebarProvider } from 'react-pro-sidebar';


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import axios from 'axios';
import { Toaster } from 'react-hot-toast';


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <Context_provider>
        <ProSidebarProvider>
          <QueryClientProvider client={queryClient}>

            <RouterProvider router={router} />
            <div><Toaster position="top-right"
              reverseOrder={false} /></div>

          </QueryClientProvider>
        </ProSidebarProvider>
      </Context_provider>
    </>
  );
}

export default App;
