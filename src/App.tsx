import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, home, homeOutline, homeSharp } from 'ionicons/icons';
import Home from './pages/Home';
import Memotest from './pages/Memotest';
import Tateti from './pages/Tateti';
import SopaDeLetras from './pages/SopaDeLetras';
import Configuracion from './pages/Configuracion';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
          <Route path="/memotest" component={Memotest} exact={true} />
          <Route path="/tateti" component={Tateti} exact={true} />
          <Route path="/sopadeletras" component={SopaDeLetras} />
          <Route path="/configuracion" component={Configuracion} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="memotest" href="/memotest">
            <IonIcon icon={triangle} />
            <IonLabel>Memotest</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tateti" href="/tateti">
            <IonIcon icon={ellipse} />
            <IonLabel>Tateti</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sopadeletras" href="/sopadeletras">
            <IonIcon icon={square} />
            <IonLabel>Sopa de letras</IonLabel>
          </IonTabButton>
          <IonTabButton tab="configuracion" href="/configuracion">
            <IonIcon icon={square} />
            <IonLabel>Configuracion</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
