import * as SC from './StoryPreview.styles';
import type { Slide } from '@shared/api';
import { DndContext } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { storyActions } from '@entities/Stories/model/slice/story.slice';
import { DraggableText } from './DraggableText';
import { useRef, useState } from 'react';

interface StoryPreviewProps {
    selectedSlideId: number | null;
    slides: Slide[];
    coverImage?: string;
    onEditImage: () => void;
    onTextSelect: (id: string | null) => void;
}

export const StoryPreview = ({
  selectedSlideId,
  slides,
  coverImage,
  onEditImage,
  onTextSelect,
}: StoryPreviewProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<string|null>(null);
  const activeSlide = slides.find(
    s => s.id === selectedSlideId,
  );
  const dispatch = useDispatch();

  const backgroundImage =
        selectedSlideId === null
          ? coverImage
          : activeSlide?.image_url;

  return (
    <SC.PhoneFrame>
      <SC.PhoneScreen>
        <SC.PreviewWrapper>
          <DndContext
            onDragEnd={(event)=>{
              const { active, delta } = event;

              if (!containerRef.current) {return;}
              if (!selectedSlideId) {return;}

              const rect = containerRef.current.getBoundingClientRect();

              const xPercent = delta.x / rect.width;
              const yPercent = delta.y / rect.height;

              const element = active.data.current;

              if (!element) {return;}

              dispatch(
                storyActions.updateTextElement({
                  slideId: selectedSlideId,
                  elementId: String(active.id),
                  data: {
                    xPercent: element.xPercent + xPercent,
                    yPercent: element.yPercent + yPercent,
                  },
                }),
              );
            }}
          >
            <SC.PreviewContent
              ref={containerRef}
              style={{
                backgroundImage: backgroundImage
                  ? `url(${backgroundImage})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {activeSlide?.textElements?.map(el=>(
                <DraggableText
                  key={el.id}
                  element={el}
                  slideId={activeSlide.id}
                  containerRef={containerRef}
                  selected={selectedTextId===el.id}
                  onSelect={(id)=>{
                    setSelectedTextId(id);
                    onTextSelect(id);
                  }}
                />
              ))}
            </SC.PreviewContent>

            {backgroundImage && (
              <SC.EditOverlay>
                <SC.EditButton onClick={onEditImage}>
                                ✏
                </SC.EditButton>
              </SC.EditOverlay>
            )}
          </DndContext>
        </SC.PreviewWrapper>
      </SC.PhoneScreen>
    </SC.PhoneFrame>
  );
};
