import * as SC from './PreviewTab.styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import type { StateSchema } from '@app/StoreProvider/config/StateShema';

import { PreviewStory } from './PreviewStory/PreviewStory';
import { CustomSelect } from '@shared/ui/Select/ui/MultipleSelect';
import { devices } from '@shared/config';

export const PreviewTab = () => {
  const editingStory = useSelector(
    (state: StateSchema) => state.content.stories.editingStory,
  );
  const [progress, setProgress] = useState(0);
  const duration = 5000;

  const [activeIndex, setActiveIndex] = useState(0);
  const [device, setDevice] = useState(devices[0]);

  const slides = editingStory?.slides ?? [];
  const activeSlide = slides[activeIndex];

  const handlePrev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex(prev =>
      Math.min(prev + 1, slides.length - 1),
    );
  };

  useEffect(() => {
    setProgress(0);

    let start: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!start) {start = timestamp;}

      const elapsed = timestamp - start;
      const newProgress = Math.min(elapsed / duration, 1);

      setProgress(newProgress);

      if (newProgress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        // auto next slide
        setActiveIndex(prev =>
          Math.min(prev + 1, slides.length - 1),
        );
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [activeIndex, slides.length]);

  return (
    <SC.Container>
      {/* SELECT */}
      <SC.TopBar>
        <CustomSelect
          value={device.label}
          options={devices.map(d => ({
            label: d.label,
            value: d.label,
          }))}
          onChange={(value) => {
            const found = devices.find(d => d.label === value);
            if (found) {setDevice(found);}
          }}
        />
      </SC.TopBar>

      {/* PREVIEW */}
      <SC.PreviewWrapper>
        <SC.Arrow
          onClick={handlePrev}
          $disabled={activeIndex === 0}
        >
              ›
        </SC.Arrow>

        <SC.DeviceWrapper
          style={{
            width: device.width,
            height: device.height,
          }}
        >
          <PreviewStory
            slide={activeSlide}
            width={device.width}
            height={device.height}
            slidesCount={slides.length}
            activeIndex={activeIndex}
            progress={progress}
          />
        </SC.DeviceWrapper>

        <SC.Arrow
          onClick={handleNext}
          $disabled={activeIndex === slides.length - 1}
        >
              ›
        </SC.Arrow>
      </SC.PreviewWrapper>
    </SC.Container>
  );
};
