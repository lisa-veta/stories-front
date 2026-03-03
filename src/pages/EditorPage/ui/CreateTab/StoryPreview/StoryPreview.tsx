import * as SC from './StoryPreview.styles';

interface StoryPreviewProps {
    selectedSlideId: number | 'cover';
}

export const StoryPreview = ({ selectedSlideId }: StoryPreviewProps) => {
  return (
    <SC.PhoneFrame>
      <SC.PhoneScreen>
        <SC.PreviewContent>
          <SC.PlaceholderText>
                        Слайд {selectedSlideId === 'cover' ? 'обложка' : `№${selectedSlideId}`}
          </SC.PlaceholderText>
        </SC.PreviewContent>
      </SC.PhoneScreen>
    </SC.PhoneFrame>
  );
};
