import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@app/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
