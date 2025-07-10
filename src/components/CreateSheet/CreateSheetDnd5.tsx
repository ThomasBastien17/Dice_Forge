// Fichier principal : CreateSheet.tsx
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharacterHeader from './sections/CharacterHeader';
import AbilitiesSection from './sections/AbilitiesSection';
import SkillsSection from './sections/SkillsSection';
import CombatSection from './sections/CombatSection';
import InventorySection from './sections/InventorySection';
import BackgroundSection from './sections/BackgroundSection';
import { Button } from 'semantic-ui-react';

type Stats = {
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
};

type Skills = {
  [key: string]: any;
};

type FormData = {
  name: string;
  race: string;
  class: string;
  level: number;
  stats: Stats;
  skills: Skills;
  equipment: string;
  backstory: string;
};

type SectionKey = 'stats' | 'skills';

function CreateSheet() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    race: '',
    class: '',
    level: 1,
    stats: {
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
    },
    skills: {},
    equipment: '',
    backstory: '',
  });

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleNestedChange = <K extends 'stats' | 'skills'>(
    section: K,
    field: string,
    value: any
  ) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log('Fiche à enregistrer :', formData);
    // TODO: envoyer vers l'API
  };

  // Wrapper for CharacterHeader to match its expected onChange signature
  const handleCharacterHeaderChange = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Wrapper for AbilitiesSection to match its expected onChange signature
  const handleAbilitiesSectionChange = (section: string, ability: string, value: any) => {
    // Only allow 'stats' as section for AbilitiesSection
    if (section === 'stats') {
      handleNestedChange('stats', ability, value);
    }
  };

  return (
    <div className="create-sheet">
      <Header />
      <div className="create-sheet-container">
        <CharacterHeader formData={formData} onChange={handleCharacterHeaderChange} />
        <AbilitiesSection stats={formData.stats} onChange={handleAbilitiesSectionChange} />
        <SkillsSection
          skills={formData.skills}
          onChange={(section: string, skill: string, value: string) =>
            handleNestedChange('skills', skill, value)
          }
        />
        <CombatSection />
        <InventorySection
          equipment={formData.equipment}
          onChange={(field: string, value: string) => handleChange(field as keyof FormData, value)}
        />
        <BackgroundSection
          backstory={formData.backstory}
          onChange={(field: string, value: string) => handleChange(field as keyof FormData, value)}
        />
        <Button onClick={handleSubmit} color="green">Enregistrer la fiche</Button>
      </div>
      <Footer />
    </div>
  );
}

export default CreateSheet;
