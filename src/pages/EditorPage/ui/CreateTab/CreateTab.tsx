import * as SC from './CreateTab.styles';
import { SettingsPanel } from '@widgets/SettingsPanel';
import { StoryPreview } from './StoryPreview/StoryPreview';
import { SlidesPanel } from './SlidesPanel/SlidesPanel';
import { useState } from 'react';

interface CreateTabProps {
    config: any[];
}

export const CreateTab = ({ config }: CreateTabProps) => {
  const [selectedSlideId, setSelectedSlideId] = useState<number | 'cover'>('cover');

  // Временные моковые данные для слайдов
  const mockSlides = [
    { id: 1, sort: 0, image_url: undefined },
    { id: 2, sort: 1, image_url: undefined },
    { id: 3, sort: 2, image_url: undefined },
  ];

  return (
    <SC.Container>
      <SC.LeftPanel>
        {config.map((panelConfig: any, index: number) => (
          <SettingsPanel
            key={`create-${index}`}
            config={panelConfig}
          />
        ))}
      </SC.LeftPanel>

      <SC.CenterPanel>
        <StoryPreview selectedSlideId={selectedSlideId} />
      </SC.CenterPanel>

      <SC.RightPanel>
        <SlidesPanel
          slides={mockSlides}
          selectedSlideId={selectedSlideId}
          onSlideSelect={setSelectedSlideId}
        />
      </SC.RightPanel>
    </SC.Container>
  );
};
