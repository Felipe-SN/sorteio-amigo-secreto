import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function Routes() {
  return <RouterProvider router={router} />;
}
