import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container/Container';
import ButtonHome from '../components/ButtonHome/ButtonHome';
import './Memotest.css';

const Memotest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Memotest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Memotest</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Jugar Memotest" />
      </IonContent>
    </IonPage>
  );
};

export default Memotest;
