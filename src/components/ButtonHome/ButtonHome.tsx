import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { homeOutline, homeSharp } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ButtonHome: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonButton color="tertiary" href="/home"><IonIcon icon={homeSharp} /></IonButton>
  );
};

export default ButtonHome;