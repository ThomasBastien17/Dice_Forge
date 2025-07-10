import { Form, FormInput } from 'semantic-ui-react';

function CombatSection() {
  return (
    <Form>
      <FormInput label="Classe d'armure (CA)" />
      <FormInput label="Initiative" />
      <FormInput label="Vitesse" />
      <FormInput label="Points de vie maximum" />
      <FormInput label="Points de vie actuels" />
      <FormInput label="Points de vie temporaires" />
    </Form>
  );
}

export default CombatSection;