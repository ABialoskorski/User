import { FC } from 'react';
import { AppRouting } from './AppRouting';
import { Header } from './common/components/Header/Header';
import { Footer } from './common/components/Footer/Footer';

export const App: FC = () => (
  <div className='App'>
    <Header />
    <AppRouting />
    {/*<Footer />*/}
  </div>
);
