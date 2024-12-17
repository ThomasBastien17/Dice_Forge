import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Icon,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { ISheet } from '../../@Types/sheet';
import { useAppDispatch } from '../../hooks/hooks';
import { actionGetSheetById } from '../../store/thunks/sheetThunks';

function CardItem({ id, name, image, level, class: className }: ISheet) {
  const dispatch = useAppDispatch();
  return (
    <NavLink 
      to={`/api/sheet/${id}`}
      onClick={() => {
        dispatch(actionGetSheetById());
      }}>
      <Card
        className="card-container"
      >
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
    </NavLink>
  );
}
export default CardItem;
