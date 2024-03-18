import { Mouse } from '../components/ui/Mouse';
import { TabMenu } from '../components/ui/TabMenu';
import { LayoutSection } from '../layouts/LayoutSection';

export const Components = () => {
  return (
    <>
      <LayoutSection title="TabMenu">
        <TabMenu
          items={[
            { text: 'Opcion 1' },
            { text: 'Opcion 2' },
            { text: 'Opcion 3' },
            { text: 'Opcion 4' },
            { text: 'Opcion 5' },
          ]}
        />
      </LayoutSection>
      <LayoutSection title="Imperative Communication">
        <Mouse />
      </LayoutSection>
    </>
  );
};
