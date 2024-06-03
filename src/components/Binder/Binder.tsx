import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardHeader,
  Container,
  Icon,
} from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Binder.scss';

interface Sheet {
  id: number;
  name: string;
  image: string;
  class: string;
  level: number;
}

const CardItem: React.FC<Sheet> = ({ id, name, image, class: className, level }) => (
  <Card>
    <CardContent>
      <CardHeader>{name}</CardHeader>
      <CardDescription>
        <img src={image} alt={name} />
        <p>Classe: {className}</p>
        <p>Niveau: {level}</p>
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <ButtonGroup className="binder-btn-group">
        <Button content={<Icon name="pencil" />} />
        <Button content={<Icon name="trash" />} />
      </ButtonGroup>
    </CardContent>
  </Card>
);

const Binder: React.FC = () => {
  const [sheets, setSheets] = useState<Sheet[]>([]);

  useEffect(() => {
    fetch('/api/binder', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setSheets(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div className="binder">
      <Header />
      <h1 className="binder-title">Classeur de fiches</h1>
      <Container>
        <CardGroup>
          {sheets.map(sheet => (
            <CardItem key={sheet.id} {...sheet} />
          ))}
        </CardGroup>
      </Container>
      <NavLink to="/api/createsheet">
        <Button className="binder-btn-createsheet" content="Créer une fiche" />
      </NavLink>
      <NavLink to="/api/game">
        <Button content="Retour à la partie" />
      </NavLink>
      <Footer />
    </div>
  );
}

export default Binder;
