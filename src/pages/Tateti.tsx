import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container/Container';
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
        <Container name="Jugar Tateti" />
      </IonContent>
    </IonPage>
  );
};

export default Tateti;
