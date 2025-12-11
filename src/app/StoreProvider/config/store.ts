import { getInitialState, type StateSchema } from '@app/StoreProvider/config/StateShema';
import { configureStore } from '@reduxjs/toolkit';
import { contentReducer } from '@entities/Content/model/slice/content.slice';

export function createReduxStore(initialState?: Partial<StateSchema>) {
  const preloadedState = initialState
    ? { ...getInitialState(), ...initialState }
    : getInitialState();

  return configureStore<StateSchema>({
    reducer: {
      content: contentReducer,
    },
    preloadedState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
