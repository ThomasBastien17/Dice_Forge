import { FormInput } from 'semantic-ui-react';

type AbilitiesSectionProps = {
  stats: Record<string, any>;
  onChange: (section: string, ability: string, value: any) => void;
};

function AbilitiesSection({ stats, onChange }: AbilitiesSectionProps) {
  const labels = {
    strength: 'Force',
    dexterity: 'Dextérité',
    constitution: 'Constitution',
    intelligence: 'Intelligence',
    wisdom: 'Sagesse',
    charisma: 'Charisme'
  };

  const abilities = Object.keys(labels) as Array<keyof typeof labels>;

  return (
    <div>
      {abilities.map((ability) => (
        <FormInput
          key={ability}
          label={labels[ability]}
          value={stats[ability]}
          onChange={(e) => onChange('stats', ability, e.target.value)}
        />
      ))}
    </div>
  );
}

export default AbilitiesSection;
