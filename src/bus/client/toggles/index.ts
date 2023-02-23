import { Store } from '../../../tools/store/store';
import { createUseState } from '../../../tools/store/createUseState';

const initialState = {
    isOnline:   navigator.onLine,
    isLoggedIn: false,
    isDown:     false,
};

export const togglesStore = new Store<typeof initialState>('Toggles', initialState);
export const useTogglesState = createUseState(togglesStore);

