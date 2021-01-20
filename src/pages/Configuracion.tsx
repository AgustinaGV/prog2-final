import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Container from '../components/Container/Container';
import './Configuracion.css';

const Configuracion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuracion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Configuracion</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Configuración"
        children= {
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton color="tertiary" href="/configuracionperfil">Editar perfil</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonButton color="tertiary">Restablecer puntajes</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonButton color="tertiary">Eliminar perfil</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        } />
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;