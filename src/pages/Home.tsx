import React from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';

import { IonAvatar, IonChip } from '@ionic/react';


import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip>
                <IonAvatar>
                  <img src="https://static3.lasprovincias.es/www/multimedia/202010/10/media/cortadas/gato-ksgH-U1204237773070s-1248x770@Las%20Provincias.jpg" />
                </IonAvatar>
                <IonLabel>Bienvenide Fulane</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="tertiary" href="/memotest">Memotest</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="tertiary" href="/tateti">Tateti</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="tertiary" href="/sopadeletras">Sopa de letras</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="tertiary" href="/configuracion">Configuración</IonButton>
            </IonCol>
          </IonRow>

          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
