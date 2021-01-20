import React from 'react';
import './Container.css';
import ButtonHome from '../ButtonHome/ButtonHome';

interface ContainerProps {
  name: string;
}

const Container: React.FC<ContainerProps> = ({ name, children }) => {
  return (
    <div className="container">
        <section>
        <strong>{name}</strong>
        {children}
        </section>
      <ButtonHome name="Boton Home" />
    </div>
  );
};

export default Container;
