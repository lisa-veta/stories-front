import * as SC from './CreateTab.styles';
import { SettingsPanel } from '@widgets/SettingsPanel';
import { StoryPreview } from './StoryPreview/StoryPreview';
import { SlidesPanel } from './SlidesPanel/SlidesPanel';
import { useEffect, useState } from 'react';
import { CropModal } from '@pages/EditorPage/ui/CreateTab/CropModal/CropModal';
import { useSelector, useDispatch } from 'react-redux';
import type { StateSchema } from '@app/StoreProvider/config/StateShema';
import { storyActions } from '@entities/Stories/model/slice/story.slice';

interface CreateTabProps {
    config: any[];
}

export interface Slide {
    id: number | 'cover';
    image?: string;
}

export const CreateTab = ({ config }: CreateTabProps) => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);

  const dispatch = useDispatch();

  const editingStory = useSelector(
    (state: StateSchema) => state.content.stories.editingStory,
  );

  const [selectedSlideId, setSelectedSlideId] = useState<number | null>(null);

  const [selectedTextElementId, setSelectedTextElementId] = useState<string | null>(null);
  const activeSlide = editingStory?.slides?.find(
    s => s.id === selectedSlideId,
  );

  const selectedTextElement =
        activeSlide?.textElements?.find(
          el => el.id === selectedTextElementId,
        ) ?? null;

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      setOriginalImage(reader.result as string);
      setIsCropOpen(true);
    };

    reader.readAsDataURL(file);
  };

  const handleCropSave = (croppedImage: string) => {
    if (selectedSlideId === null) {
      dispatch(storyActions.updateCoverImage(croppedImage));
      return;
    }

    dispatch(
      storyActions.updateSlideImage({
        slideId: selectedSlideId,
        image: croppedImage,
      }),
    );
  };

  useEffect(() => {
    if (editingStory?.slides.length && !selectedSlideId) {
      setSelectedSlideId(editingStory.slides[0].id);
    }
  }, [editingStory]);

  useEffect(() => {
    if (editingStory) {
      localStorage.setItem(
        'editingStory',
        JSON.stringify(editingStory),
      );
    }
  }, [editingStory]);

  const handleAddText = () => {
    if(!selectedSlideId) {return;}

    dispatch(
      storyActions.addTextElement({
        slideId:selectedSlideId,
      }),
    );
  };

  return (
    <SC.Container>
      <SC.LeftPanel>
        {config.map((panelConfig: any, index: number) => (
          <SettingsPanel
            key={`create-${index}`}
            config={panelConfig}
            values={{
              slide: {
                text: {
                  text: selectedTextElement?.text ?? '',
                  ...selectedTextElement?.style,
                },
              },
            }}
            onChange={(field, value) => {

              if (!selectedTextElement || !selectedSlideId) {return;}

              const styleKey = field.split('.').pop();

              dispatch(
                storyActions.updateTextElement({
                  slideId: selectedSlideId,
                  elementId: selectedTextElement.id,
                  data:
                            styleKey === 'text'
                              ? { text: value }
                              : {
                                style: {
                                  ...selectedTextElement.style,
                                  [styleKey]: value,
                                },
                              },
                }),
              );

            }}
            onImageUpload={handleImageUpload}
            onAdd={
              panelConfig.title === 'Текст'
                ? handleAddText
                : undefined
            }
          />
        ))}
      </SC.LeftPanel>

      <SC.CenterPanel>
        <StoryPreview
          selectedSlideId={selectedSlideId}
          slides={editingStory?.slides ?? []}
          coverImage={editingStory?.previewUrl}
          onEditImage={() => {
            if (selectedSlideId === null) {
              if (editingStory?.previewUrl) {
                setOriginalImage(editingStory.previewUrl);
                setIsCropOpen(true);
              }
              return;
            }

            const active = editingStory?.slides.find(
              s => s.id === selectedSlideId,
            );

            if (active?.image_url) {
              setOriginalImage(active.image_url);
              setIsCropOpen(true);
            }
          }}
          onTextSelect={setSelectedTextElementId}
        />
      </SC.CenterPanel>

      <SC.RightPanel>
        <SlidesPanel
          slides={editingStory?.slides ?? []}
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
