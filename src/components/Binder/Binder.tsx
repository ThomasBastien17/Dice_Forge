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

function Binder() {
  return (
    <div className="binder">
      <Header />
      <h1 className="binder-title">Classeurs de fiches</h1>
      <Container>
        <CardGroup>
          <Card>
            <CardContent>
              <CardHeader>fiche n°1</CardHeader>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                deleniti cum earum harum eius praesentium voluptates officiis
                quis ratione nisi, delectus hic id quos aut exercitationem iure
                dolore vitae voluptatem.
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <ButtonGroup className="binder-btn-group">
                <Button content={<Icon name="pencil" />} />
                <Button content={<Icon name="trash" />} />
              </ButtonGroup>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardHeader>fiche n°2</CardHeader>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                deleniti cum earum harum eius praesentium voluptates officiis
                quis ratione nisi, delectus hic id quos aut exercitationem iure
                dolore vitae voluptatem.
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <ButtonGroup className="binder-btn-group">
                <Button content={<Icon name="pencil" />} />
                <Button content={<Icon name="trash" />} />
              </ButtonGroup>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardHeader>fiche n°3</CardHeader>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                deleniti cum earum harum eius praesentium voluptates officiis
                quis ratione nisi, delectus hic id quos aut exercitationem iure
                dolore vitae voluptatem.
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <ButtonGroup className="binder-btn-group">
                <Button content={<Icon name="pencil" />} />
                <Button content={<Icon name="trash" />} />
              </ButtonGroup>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardHeader>fiche n°4</CardHeader>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                deleniti cum earum harum eius praesentium voluptates officiis
                quis ratione nisi, delectus hic id quos aut exercitationem iure
                dolore vitae voluptatem.
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <ButtonGroup className="binder-btn-group">
                <Button content={<Icon name="pencil" />} />
                <Button content={<Icon name="trash" />} />
              </ButtonGroup>
            </CardContent>
          </Card>
        </CardGroup>
      </Container>
      <NavLink to="/api/createsheet">
        <Button className="binder-btn-createsheet" content="Crée une fiche" />
      </NavLink>
      <NavLink to="/api/game">
        <Button content="Retour à la partie" />
      </NavLink>
      <Footer />
    </div>
  );
}
export default Binder;
