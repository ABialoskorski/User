import { FC } from 'react';
import { AppRouting } from './AppRouting';
import { Header } from './common/components/Navigation/Header/Header';
import { Footer } from './common/components/Footer/Footer';
import { UserContextProvider } from './UserContext/UserContext';
import { SideMenu } from './common/components/Navigation/SideMenu/SideMenu';
import { AppContainer } from './App.styles';

export const App: FC = () => (
  <div className='App'>
    <UserContextProvider>
      <Header />
      <AppContainer>
        <SideMenu />
        <AppRouting />
      </AppContainer>
    </UserContextProvider>
    {/*<Footer />*/}
  </div>
);
