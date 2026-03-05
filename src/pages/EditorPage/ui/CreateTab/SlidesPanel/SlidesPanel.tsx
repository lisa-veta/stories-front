import React from 'react';
import * as SC from './SlidesPanel.styles';
import { Typography } from '@shared/ui/Typography';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { Button } from '@shared/ui/Button';
import { BasketIcon, PlusIcon } from '@shared/ui/Icons';
import type { Slide } from '@shared/api';

import { useDispatch } from 'react-redux';
import { storyActions } from '@entities/Stories/model/slice/story.slice';

interface SlidesPanelProps {
    slides: Slide[];
    selectedSlideId: number | null;
    onSlideSelect: (id: number) => void;
}

const SortableSlide = ({
  slide,
  index,
  selectedId,
  onSelect,
  onDelete,
}: {
    slide: Slide;
    index: number;
    selectedId: number | null;
    onSelect: (id: number) => void;
    onDelete: (id: number) => void;
}) => {
  const {
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    isDragging,
  } = useSortable({ id: slide.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <SC.SlideCard
      ref={setNodeRef}
      style={style}
      $selected={selectedId === slide.id}
      $dragging={isDragging}
      onClick={() => onSelect(slide.id)}
    >
      <SC.SlideLabel>
        <Typography variant="subtitle2">
                    Слайд {index + 1}
        </Typography>
      </SC.SlideLabel>

      <SC.DragHandle
        {...attributes}
        {...listeners}
        onClick={(e) => e.stopPropagation()}
      >
                ⋮⋮
      </SC.DragHandle>

      <SC.DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          onDelete(slide.id);
        }}
      >
        <BasketIcon />
      </SC.DeleteButton>
    </SC.SlideCard>
  );
};

export const SlidesPanel = ({
  slides,
  selectedSlideId,
  onSlideSelect,
}: SlidesPanelProps) => {
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {return;}

    const oldIndex = slides.findIndex(s => s.id === active.id);
    const newIndex = slides.findIndex(s => s.id === over.id);

    dispatch(
      storyActions.reorderSlides({
        oldIndex,
        newIndex,
      }),
    );
  };

  const handleAddSlide = () => {
    dispatch(storyActions.addSlide());
  };

  const handleDeleteSlide = (id: number) => {
    dispatch(storyActions.deleteSlide(id));
  };

  return (
    <SC.Container>
      <Typography variant="subtitle1">Истории</Typography>
      <SC.SlideCard
        $selected={selectedSlideId === null}
        onClick={() => onSlideSelect(null)}
      >
        <SC.SlideLabel>
          <Typography variant="subtitle2">
                    Обложка
          </Typography>
        </SC.SlideLabel>
      </SC.SlideCard>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={slides.map(s => s.id)}
          strategy={verticalListSortingStrategy}
        >
          <SC.SlidesList>
            {slides.map((slide, index) => (
              <SortableSlide
                key={slide.id}
                slide={slide}
                index={index}
                selectedId={selectedSlideId}
                onSelect={onSlideSelect}
                onDelete={handleDeleteSlide}
              />
            ))}
          </SC.SlidesList>
        </SortableContext>
      </DndContext>

      <Button onClick={handleAddSlide}>
        <PlusIcon />
        <Typography>Добавить</Typography>
      </Button>
    </SC.Container>
  );
};
