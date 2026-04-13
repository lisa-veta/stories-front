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

const positionMap = {
  top: 0.1,
  center: 0.5,
  bottom: 0.85,
};

export const CreateTab = ({ config }: CreateTabProps) => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null); // открытие
  const [priorityPanel, setPriorityPanel] = useState<string | null>(null); // для сортировки

  const dispatch = useDispatch();

  const editingStory = useSelector(
    (state: StateSchema) => state.content.stories.editingStory,
  );

  const [selectedSlideId, setSelectedSlideId] = useState<number | null>(null);

  const activeSlide = editingStory?.slides?.find(
    s => s.id === selectedSlideId,
  );
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

  const selectedElement =
        activeSlide?.elements?.find(el => el.id === selectedElementId) ?? null;


  const handleImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      setOriginalImage(reader.result as string);
      setIsCropOpen(true);
    };

    reader.readAsDataURL(file);
  };

  const handleCropSave = (croppedImage: string) => {
    if (!selectedSlideId) {return;}

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

  const handleAddElement = (type) => {
    if (!selectedSlideId) {return;}

    dispatch(
      storyActions.addElement({
        slideId: selectedSlideId,
        type,
      }),
    );
  };

  const isCover = selectedSlideId === editingStory?.slides?.[0]?.id;
  const filteredConfig = config.filter(panel => {
    if (isCover) {
      return ['Карусель', 'Обложка', 'Текст', 'Кнопка действия', 'Кнопка для звонка']
        .includes(panel.title);
    }

    return ['Обложка', 'Текст', 'Кнопка действия', 'Кнопка для звонка']
      .includes(panel.title);
  });

  useEffect(() => {
    if (!selectedElement) {
      setPriorityPanel(null);
      return;
    }

    const map = {
      text: 'Текст',
      actionButton: 'Кнопка действия',
      callButton: 'Кнопка для звонка',
    };

    const panelTitle = map[selectedElement.type];

    if (panelTitle) {
      setActivePanel(panelTitle);
      setPriorityPanel(panelTitle);
    }
  }, [selectedElement]);;

  const sortedConfig = [...filteredConfig].sort((a, b) => {
    if (a.title === priorityPanel) {return -1;}
    if (b.title === priorityPanel) {return 1;}
    return 0;
  });

  const handleSave = () => {
    if (!editingStory) {return;}
    localStorage.setItem('editingStory', JSON.stringify(editingStory));
  };

  return (
    <SC.Container>
      <SC.LeftPanel>
        {sortedConfig.map((panelConfig: any, index: number) => (
          <SettingsPanel
            key={`create-${index}`}
            config={panelConfig}
            isExpanded={activePanel === panelConfig.title}
            values={{
              slide: {
                [selectedElement?.type || 'text']: {
                  text: selectedElement?.content ?? '',
                  ...selectedElement?.style,
                  link: selectedElement?.link,
                },
              },
            }}
            onChange={(field, value) => {
              if (!selectedElement || !selectedSlideId) {return;}

              const key = field.split('.').pop();
              if (key === 'text') {
                dispatch(storyActions.updateElement({
                  slideId: selectedSlideId,
                  elementId: selectedElement.id,
                  data: { content: value },
                }));
                return;
              }

              if (key === 'link') {
                dispatch(storyActions.updateElement({
                  slideId: selectedSlideId,
                  elementId: selectedElement.id,
                  data: { link: value },
                }));
                return;
              }
              if (key === 'position') {
                if (value !== 'custom') {
                  dispatch(storyActions.updateElement({
                    slideId: selectedSlideId,
                    elementId: selectedElement.id,
                    data: {
                      yPercent: positionMap[value],
                    },
                  }));
                }
                return;
              }

              dispatch(storyActions.updateElement({
                slideId: selectedSlideId,
                elementId: selectedElement.id,
                data: {
                  style: {
                    ...selectedElement.style,
                    [key]: value,
                  },
                },
              }));

              let parsedValue = value;

              if (key === 'borderRadius') {
                parsedValue = Number(value);
              }

              dispatch(storyActions.updateElement({
                slideId: selectedSlideId,
                elementId: selectedElement.id,
                data: {
                  style: {
                    ...selectedElement.style,
                    [key]: parsedValue,
                  },
                },
              }));
            }}
            onImageUpload={handleImageUpload}
            onToggle={() => {
              setActivePanel(prev =>
                prev === panelConfig.title ? null : panelConfig.title,
              );
            }}
            onAdd={
              panelConfig.title === 'Текст'
                ? () => handleAddElement('text')
                : panelConfig.title === 'Кнопка действия'
                  ? () => handleAddElement('actionButton')
                  : panelConfig.title === 'Кнопка для звонка'
                    ? () => handleAddElement('callButton')
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
          onTextSelect={setSelectedElementId}
        />
      </SC.CenterPanel>

      <SC.RightPanel>
        <SlidesPanel
          slides={editingStory?.slides ?? []}
          selectedSlideId={selectedSlideId}
          onSlideSelect={setSelectedSlideId}
          onSave={handleSave}
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
