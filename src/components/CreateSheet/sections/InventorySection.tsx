import { FormTextArea } from 'semantic-ui-react';

interface InventorySectionProps {
  equipment: string;
  onChange: (field: string, value: string) => void;
}

function InventorySection({ equipment, onChange }: InventorySectionProps) {
  return (
    <FormTextArea
      label="Équipement"
      placeholder="Liste de votre équipement..."
      value={equipment}
      onChange={(e) => onChange('equipment', e.target.value)}
    />
  );
}

export default InventorySection;