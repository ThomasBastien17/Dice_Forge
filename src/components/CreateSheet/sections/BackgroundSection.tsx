import { FormTextArea } from 'semantic-ui-react';

interface BackgroundSectionProps {
  backstory: string;
  onChange: (field: string, value: string) => void;
}

function BackgroundSection({ backstory, onChange }: BackgroundSectionProps) {
  return (
    <FormTextArea
      label="Histoire et traits de votre personnage"
      placeholder="Décrivez ici l'histoire, les traits, les idéaux, les défauts, etc."
      value={backstory}
      onChange={(e) => onChange('backstory', e.target.value)}
    />
  );
}

export default BackgroundSection;