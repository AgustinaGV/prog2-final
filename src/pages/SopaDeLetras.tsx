import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container/Container';
import ButtonHome from '../components/ButtonHome/ButtonHome';
import './SopaDeLetras.css';

const SopaDeLetras: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sopa de letras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sopa de letras</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Jugar Sopa de letras" />
      </IonContent>
    </IonPage>
  );
};

export default SopaDeLetras;
