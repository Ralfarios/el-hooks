import { Route, Routes } from 'react-router-dom';

import { FormPage } from '@/pages/form';
import { LanguagePage } from '@/pages/language';

export const GenerateRoute = () => (
  <Routes>
    <Route path="/form" element={<FormPage />} />
    <Route path="/language" element={<LanguagePage />} />
  </Routes>
);
