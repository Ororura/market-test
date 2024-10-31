import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/store/store';
import { RootState } from 'app/providers/store/reducers';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
