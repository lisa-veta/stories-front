import { useRef, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch } from 'react-redux';
import { storyActions } from '@entities/Stories/model/slice/story.slice';

import * as SC from './DraggableText.styles';

export const DraggableText = ({
  element,
  slideId,
  selected,
  onSelect,
}) => {

  const dispatch = useDispatch();
  const ref = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.id,
    data: element,
  });

  const style = {
    top: `${element.yPercent * 100}%`,
    transform: CSS.Translate.toString(transform),
    transformOrigin: 'top left',

    color: element.style.textColor,
    background: element.style.backgroundColor,
  };

  return (
    <SC.Wrapper
      ref={(node)=>{
        setNodeRef(node);
        ref.current=node;
      }}

      style={style}
      $selected={selected}

      {...(!isEditing ? listeners : {})}
      {...(!isEditing ? attributes : {})}

      onClick={(e)=>{
        e.stopPropagation();
        onSelect(element.id);
      }}
    >

      <SC.Text
        contentEditable={isEditing}
        suppressContentEditableWarning

        onDoubleClick={(e)=>{
          e.stopPropagation();
          setIsEditing(true);
        }}

        onBlur={(e)=>{
          setIsEditing(false);

          dispatch(
            storyActions.updateTextElement({
              slideId,
              elementId: element.id,
              data:{ text:e.currentTarget.innerText },
            }),
          );
        }}
      >
        {element.text}
      </SC.Text>

      {selected && !isEditing && (
        <SC.DeleteButton
          onPointerDown={(e)=>{
            e.stopPropagation();
            e.preventDefault();
          }}

          onClick={(e)=>{
            e.stopPropagation();

            dispatch(
              storyActions.deleteTextElement({
                slideId,
                elementId: element.id,
              }),
            );
          }}
        >
              ×
        </SC.DeleteButton>
      )}

    </SC.Wrapper>
  );
};
