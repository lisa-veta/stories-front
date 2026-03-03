import * as SC from './CreateTab.styles';
import { SettingsPanel } from '@widgets/SettingsPanel';
import { StoryPreview } from './StoryPreview/StoryPreview';
import { SlidesPanel } from './SlidesPanel/SlidesPanel';
import { useState } from 'react';
import { CropModal } from '@pages/EditorPage/ui/CreateTab/CropModal/CropModal';

interface CreateTabProps {
    config: any[];
}

export interface Slide {
    id: number | 'cover';
    image?: string;
}

export const CreateTab = ({ config }: CreateTabProps) => {
  const [selectedSlideId, setSelectedSlideId] = useState<number | 'cover'>('cover');
  const [slides, setSlides] = useState<Slide[]>([
    { id: 'cover' },
    { id: 1 },
  ]);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      setOriginalImage(reader.result as string);
      setIsCropOpen(true);
    };

    reader.readAsDataURL(file);
  };

  const handleCropSave = (croppedImage: string) => {
    setSlides(prev =>
      prev.map(slide =>
        slide.id === selectedSlideId
          ? { ...slide, image: croppedImage }
          : slide,
      ),
    );
  };

  return (
    <SC.Container>
      <SC.LeftPanel>
        {config.map((panelConfig: any, index: number) => (
          <SettingsPanel
            key={`create-${index}`}
            config={panelConfig}
            onImageUpload={handleImageUpload}
          />
        ))}
      </SC.LeftPanel>

      <SC.CenterPanel>
        <StoryPreview
          selectedSlideId={selectedSlideId}
          slides={slides}
          onEditImage={() => {
            const active = slides.find(s => s.id === selectedSlideId);
            if (active?.image) {
              setOriginalImage(active.image);
              setIsCropOpen(true);
            }
          }}/>
      </SC.CenterPanel>

      <SC.RightPanel>
        <SlidesPanel
          slides={slides.filter(s => s.id !== 'cover')}
          selectedSlideId={selectedSlideId}
          onSlideSelect={setSelectedSlideId}
        />
      </SC.RightPanel>
      {isCropOpen && originalImage && (
        <CropModal
          image={originalImage}
          onClose={() => setIsCropOpen(false)}
          onSave={handleCropSave}
        />
      )}
    </SC.Container>
  );
};
