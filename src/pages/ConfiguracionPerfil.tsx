import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';

import { IonAvatar, IonChip } from '@ionic/react';
import { pencil, pencilOutline, pencilSharp } from 'ionicons/icons';
import Container from '../components/Container/Container';
import './ConfiguracionPerfil.css';

const ConfiguracionPerfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Editar perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Editar Perfil"
        children= {
          <IonGrid>

            <IonRow>
              <IonCol>
                <div>
                    <img className="imgAvatar" src="https://static3.lasprovincias.es/www/multimedia/202010/10/media/cortadas/gato-ksgH-U1204237773070s-1248x770@Las%20Provincias.jpg" /> <IonButton color="tertiary"><IonIcon icon={pencilSharp} /></IonButton>
                </div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Fulane <IonButton color="tertiary"><IonIcon icon={pencilSharp} /></IonButton></IonLabel>
              </IonCol>
            </IonRow>

          </IonGrid>
        } />
      </IonContent>
    </IonPage>
  );
};

export default ConfiguracionPerfil;