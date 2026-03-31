import * as SC from './PreviewStory.styles';
import type { Slide } from '@shared/api';

interface PreviewStoryProps {
    slide: Slide | undefined;
    width: number;
    height: number;
}

export const PreviewStory = ({ slide, width, height }: PreviewStoryProps) => {
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
          {slide?.elements.map(el => (
            <SC.Element
              key={el.id}
              style={{
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
