import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ButtonHome from '../components/ButtonHome/ButtonHome';
import './Tateti.css';

const Tateti: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tateti</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tateti</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tateti page" />
      </IonContent>
    </IonPage>
  );
};

export default Tateti;
