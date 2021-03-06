import produce from 'immer';

const INITIAL_STATE = {
    accessToken: null,
    signed: false,
    loading: false
}

export default function auth(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@auth/SIGN_IN_REQUEST':{
                draft.loading = true;
                break;
            }
            case '@auth/SIGN_IN_SUCESS':{
                draft.accessToken = action.payload;
                draft.signed = true;
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_IN_FAILURE':{
                draft.loading = false;
                break;
            }
            default: break;
        }
    });
}