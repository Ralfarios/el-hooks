import { BrowserRouter } from 'react-router-dom';

import { GenerateRoute } from '@/routes';

import '@/helper/extension.array';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <GenerateRoute />
    </BrowserRouter>
  );
};

export default App;
