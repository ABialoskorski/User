import { FC } from 'react';
import { AppRouting } from './AppRouting';
import { Header } from './common/components/Navigation/Header/Header';
import { Footer } from './common/components/Footer/Footer';
import { UserContextProvider } from './UserContext/UserContext';
import { SideMenu } from './common/components/Navigation/SideMenu/SideMenu';
import { ScrollToTop } from './common/components/ScrollToTop/ScrollToTop';
import { AppContainer } from './App.styles';

export const App: FC = () => (
  <div className='App'>
    <ScrollToTop />
    <UserContextProvider>
      <Header />
      <AppContainer>
        <SideMenu />
        <AppRouting />
      </AppContainer>
    </UserContextProvider>
    <Footer />
  </div>
);
