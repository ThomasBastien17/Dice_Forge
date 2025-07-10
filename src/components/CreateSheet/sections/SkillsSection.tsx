import { FormInput } from 'semantic-ui-react';

type SkillsSectionProps = {
  skills: { [key: string]: string };
  onChange: (section: string, skill: string, value: string) => void;
};

function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const skillList = [
    'acrobaties', 'arcanes', 'discrétion', 'dressage', 'escamotage',
    'histoire', 'intuition', 'athlétisme', 'médecine', 'nature',
    'perception', 'investigation', 'survie', 'représentation',
    'tromperie'
  ];

  return (
    <div>
      {skillList.map((skill) => (
        <FormInput
          key={skill}
          label={skill.charAt(0).toUpperCase() + skill.slice(1)}
          value={skills[skill] || ''}
          onChange={(e) => onChange('skills', skill, e.target.value)}
        />
      ))}
    </div>
  );
}

export default SkillsSection;