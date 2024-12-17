import './Sheet.scss';
import { useAppSelector, useAppDispatch} from '../../hooks/hooks';
import { ISheet } from '../../@Types/sheet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { actionGetSheetById } from '../../store/thunks/sheetThunks';


function Sheet() {
  const dispatch = useAppDispatch();
  const currentSheet = useAppSelector((state) => state.sheet.currentSheet);
  const sheetId = useAppSelector((state) => state.sheet.sheetId);

  useEffect(() => {
    dispatch(actionGetSheetById());
  }, [sheetId]);
  return (
    <div className="sheet-container">
      <Header />
        <div className="sheet-info">
        <h1>Fiche de {currentSheet.name}</h1>
          <img src={currentSheet.image} alt={currentSheet.name} />
          <p>Classe: {currentSheet.class}</p>
          <p>Niveau: {currentSheet.level}</p>
        </div>
      <Footer />
    </div>
  );
}

export default Sheet;
