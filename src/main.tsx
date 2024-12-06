import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Loader, MantineProvider } from '@mantine/core'

import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={queryClient} >
      
   
    <MantineProvider withGlobalClasses theme={{
      fontFamily: 'Poppins, sans-serif',
      components: {
        Loader: Loader.extend({
          defaultProps: {
            loaders: { ...Loader.defaultLoaders },
            type: 'ring',
          },
         
        }),
      },
   
    }}>
      <BrowserRouter>
      <App /> 
      </BrowserRouter>
   
      </MantineProvider>
      </QueryClientProvider>
  </StrictMode>,
)
