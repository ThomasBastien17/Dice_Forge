import { useEffect, useMemo, useState } from 'react';
import { Dropdown, Form, FormInput } from 'semantic-ui-react';
import { IClasse, IRace } from '../../../@Types/classe';
import axios from 'axios';
import fr from '../../../locales/fr';

type CharacterHeaderProps = {
  formData: {
    name: string;
    race: string;
    class: string;
    level: number;
  };
  onChange: (field: string, value: string | number) => void;
};


function CharacterHeader({ formData, onChange }: CharacterHeaderProps) {

  const [className, setClassName] = useState<string>('');
  const [classesOptions, setClassesOptions] = useState<IClasse[]>([]);
  const [raceName, setRaceName] = useState<string>('');
  const [raceOptions, setRaceOptions] = useState<IRace[]>([]);
  const [level, setLevel] = useState<number>();
  const [alignmentsName, setAlignmentsName] = useState<string>('');
  const [alignmentsOptions, setAlignmentsOptions] = useState<IRace[]>([]);

  const levelOptions = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        key: i + 1,
        value: i + 1,
        text: `${i + 1}`,
      })),
    []
  );

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("https://www.dnd5eapi.co/api/2014/classes/");
        const classes = response.data.results;

        const optionClasse = classes.map((classe: { index: string; name: string }) => ({
          key: classe.index,
          value: classe.index,
          text: fr.classes[classe.name as keyof typeof fr.classes] || classe.name,
        }));
        console.log('Classes fetched:', optionClasse);
        setClassesOptions(optionClasse);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await axios.get("https://www.dnd5eapi.co/api/2014/races/");
        const races = response.data.results;

        const optionRaces = races.map((race: { index: string; name: string }) => ({
          key: race.index,
          value: race.index,
          text: fr.races[race.name as keyof typeof fr.races] || race.name,
        }));
        console.log('Races fetched:', optionRaces);
        setRaceOptions(optionRaces);
      } catch (error) {
        console.error('Error fetching Races:', error);
      }
    };
    fetchRaces();
  }, []);

  useEffect(() => {
    const fetchAlignements = async () => {
      try {
        const response = await axios.get("https://www.dnd5eapi.co/api/2014/alignments/");
        const alignments = response.data.results;

        const optionAlignments = alignments.map((alignment: { index: string; name: string }) => ({
          key: alignment.index,
          value: alignment.index,
          text: fr.alignments[alignment.index as keyof typeof fr.alignments] || alignment.name,
        }));
        console.log('Alignments fetched:', optionAlignments);
        setAlignmentsOptions(optionAlignments);
      } catch (error) {
        console.error('Error fetching alignments:', error);
      }
    };
    fetchAlignements();
  }, []);

  return (
    <Form>
      <FormInput label="Nom du personnage" className="create-sheet-input" value={formData.name} onChange={(e) => onChange('name', e.target.value)} />
      <Dropdown
        label="Classe"
        className="create-sheet-input"
        placeholder="classe"
        selection
        options={classesOptions}
        value={className}
        onChange={(e, { value }) => setClassName(value as string)}
      />
      <Dropdown
        className='create-sheet-input'
        placeholder='Race'
        selection
        options={raceOptions}
        value={raceName}
        onChange={(e, { value }) => setRaceName(value as string)}
      />
      <Dropdown
        type="number"
        className="create-sheet-input"
        placeholder="1"
        selection
        options={levelOptions}
        value={level}
        onChange={(e, { value }) => {
          const numericLevel = Number(value);
          setLevel(numericLevel);
          onChange('level', numericLevel);
        }}
      />
      <Dropdown
        className='create-sheet-input'
        placeholder='Alignements'
        selection
        options={alignmentsOptions}
        value={alignmentsName}
        onChange={(e, { value }) => setAlignmentsName(value as string)}
      />
    </Form>
  );
}

export default CharacterHeader;