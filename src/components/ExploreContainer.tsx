import React from 'react';
import './ExploreContainer.css';
import ButtonHome from '../components/ButtonHome/ButtonHome';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <ButtonHome name="Boton Home" />
    </div>
  );
};

export default ExploreContainer;
