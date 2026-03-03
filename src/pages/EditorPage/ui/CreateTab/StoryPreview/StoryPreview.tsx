import * as SC from './StoryPreview.styles';
import type { Slide } from '@pages/EditorPage/ui/CreateTab/CreateTab';

interface StoryPreviewProps {
    selectedSlideId: number | 'cover';
    slides: Slide[];
    onEditImage: () => void;
}

export const StoryPreview = ({
  selectedSlideId,
  slides,
  onEditImage,
}: StoryPreviewProps) => {
  const activeSlide = slides.find(
    s => s.id === selectedSlideId,
  );

  return (
    <SC.PhoneFrame>
      <SC.PhoneScreen>
        <SC.PreviewWrapper>
          <SC.PreviewContent
            style={{
              backgroundImage: activeSlide?.image
                ? `url(${activeSlide.image})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {activeSlide?.image && (
            <SC.EditOverlay>
              <SC.EditButton onClick={onEditImage}>
                              ✏
              </SC.EditButton>
            </SC.EditOverlay>
          )}
        </SC.PreviewWrapper>
      </SC.PhoneScreen>
    </SC.PhoneFrame>
  );
};
