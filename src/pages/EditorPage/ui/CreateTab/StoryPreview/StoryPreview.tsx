import * as SC from './StoryPreview.styles';
import type { Slide } from '@shared/api';

interface StoryPreviewProps {
    selectedSlideId: number | null;
    slides: Slide[];
    coverImage?: string;
    onEditImage: () => void;
}

export const StoryPreview = ({
  selectedSlideId,
  slides,
  coverImage,
  onEditImage,
}: StoryPreviewProps) => {
  const activeSlide = slides.find(
    s => s.id === selectedSlideId,
  );

  const backgroundImage =
        selectedSlideId === null
          ? coverImage
          : activeSlide?.image_url;

  return (
    <SC.PhoneFrame>
      <SC.PhoneScreen>
        <SC.PreviewWrapper>
          <SC.PreviewContent
            style={{
              backgroundImage: backgroundImage
                ? `url(${backgroundImage})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {backgroundImage && (
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
