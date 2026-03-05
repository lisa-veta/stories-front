import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { storyAdapter } from '@entities/Stories/model/adapter/story.adapter';
import type { Story } from '@shared/api';


const initialState = storyAdapter.getInitialState<{
    editingStory: Story | null;
}>({
  editingStory: null,
});

export const storySlice = createSlice({
  name: 'content/stories',
  initialState,
  reducers: {
    storyAdd: storyAdapter.addOne,
    storiesAdd: storyAdapter.addMany,
    addSlide(state) {
      if (!state.editingStory) {return;}

      const newSlide = {
        id: Date.now(),
        story_id: state.editingStory.id,
        sort: state.editingStory.slides.length,

        text: '',
        textPosition: 'middle',
        textClass: '',

        isCtaVisible: false,
        isCallTaskVisible: false,
        useVideo: false,

        image_url: '',
        video_url: '',
      };

      state.editingStory.slides.push(newSlide);
    },

    deleteSlide(state, action: PayloadAction<number>) {
      if (!state.editingStory) {return;}

      state.editingStory.slides =
              state.editingStory.slides.filter(
                s => s.id !== action.payload,
              );

      state.editingStory.slides.forEach((s, index) => {
        s.sort = index;
      });
    },

    updateCoverImage(
      state,
      action: PayloadAction<string>,
    ) {
      if (!state.editingStory) {return;}
      state.editingStory.previewUrl = action.payload;
    },

    setEditingStory(state, action: PayloadAction<Story>) {
      state.editingStory = JSON.parse(JSON.stringify(action.payload));
    },

    clearEditingStory(state) {
      state.editingStory = null;
    },

    updateSlideImage(
      state,
      action: PayloadAction<{ slideId: number; image: string }>,
    ) {
      const slide = state.editingStory?.slides.find(
        s => s.id === action.payload.slideId,
      );
      if (slide) {
        slide.image_url = action.payload.image;
      }
    },

    reorderSlides(
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>,
    ) {
      if (!state.editingStory) {return;}

      const slides = state.editingStory.slides;
      const [moved] = slides.splice(action.payload.oldIndex, 1);
      slides.splice(action.payload.newIndex, 0, moved);

      slides.forEach((s, index) => {
        s.sort = index;
      });
    },

    setActiveSlideImage(
      state,
      action: PayloadAction<{ slideId: number; image: string }>,
    ) {
      const slide = state.editingStory?.slides.find(
        s => s.id === action.payload.slideId,
      );
      if (slide) {
        slide.image_url = action.payload.image;
      }
    },
  },
});

export const storyActions = storySlice.actions;
export const storyReducer = storySlice.reducer;
