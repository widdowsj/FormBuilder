import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action): any => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [debug];
