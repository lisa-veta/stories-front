import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import * as SC from './DraggableElement.styles';
import { storyActions } from '@entities/Stories/model/slice/story.slice.ts';

export const DraggableElement = ({
  element,
  slideId,
  selected,
  onSelect,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const { attributes, listeners, setNodeRef, transform } =
        useDraggable({
          id: element.id,
          data: element,
        });

  const style = {
    top: `${element.yPercent * 100}%`,
    transform: CSS.Translate.toString(transform),
    transformOrigin: 'top left',

    color: element.style.textColor,
    background: element.style.backgroundColor,
    borderRadius: element.style.borderRadius
      ? `${element.style.borderRadius}px`
      : undefined,
  };

  const isButton = element.type !== 'text';

  return (
    <SC.Wrapper
      ref={setNodeRef}
      style={style}
      $selected={selected}
      $isButton={isButton}
      onPointerDown={() => onSelect(element.id)}
      {...(!isEditing ? listeners : {})}
      {...(!isEditing ? attributes : {})}
    >
      <SC.Content
        contentEditable={isEditing}
        suppressContentEditableWarning
        onDoubleClick={(e) => {
          e.stopPropagation();
          setIsEditing(true);
        }}
        onBlur={(e) => {
          setIsEditing(false);

          dispatch(
            storyActions.updateElement({
              slideId,
              elementId: element.id,
              data: { content: e.currentTarget.innerText },
            }),
          );
        }}
      >
        {element.content}
      </SC.Content>

      {!isEditing && (
        <SC.DeleteButton
          onPointerDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onClick={() =>
            dispatch(
              storyActions.deleteElement({
                slideId,
                elementId: element.id,
              }),
            )
          }
        >
                    ×
        </SC.DeleteButton>
      )}
    </SC.Wrapper>
  );
};
