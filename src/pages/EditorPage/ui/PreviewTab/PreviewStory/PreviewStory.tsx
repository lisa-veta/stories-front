import * as SC from './PreviewStory.styles';
import type { Slide } from '@shared/api';

interface PreviewStoryProps {
    slide: Slide | undefined;
    width: number;
    height: number;

    slidesCount: number;
    activeIndex: number;
    progress: number;
}

export const PreviewStory = ({ slide, width, height, slidesCount, activeIndex, progress  }: PreviewStoryProps) => {
  console.log('PreviewStory', slide);
  return (
    <SC.PhoneFrame>
      <SC.PhoneScreen
        style={{
          width,
          height,
        }}
      >
        <SC.PreviewContent
          style={{
            backgroundImage: slide?.image_url
              ? `url(${slide.image_url})`
              : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <SC.ProgressWrapper>
            {Array.from({ length: slidesCount }).map((_, i) => {
              const isActive = i === activeIndex;
              const isDone = i < activeIndex;

              return (
                <SC.ProgressTrack key={i}>
                  <SC.ProgressFill
                    key={i}
                    $active={isActive}
                    $duration={5000}
                    style={{
                      transform: isDone ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </SC.ProgressTrack>
              );
            })}
          </SC.ProgressWrapper>
          {slide?.elements.map(el => (
            <SC.Element
              key={el.id}
              style={{
                cursor: el.type !== 'text' ? 'pointer' : 'default',
                top: `${el.yPercent * 100}%`,
                left: '24px',

                color: el.style.textColor,
                background: el.style.backgroundColor,
                borderRadius: el.style.borderRadius
                  ? `${el.style.borderRadius}px`
                  : undefined,
              }}
              $isButton={el.type !== 'text'}
            >
              {el.content}
            </SC.Element>
          ))}
        </SC.PreviewContent>
      </SC.PhoneScreen>
    </SC.PhoneFrame>
  );
};
