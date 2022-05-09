import { AnyAction } from "redux";

const initialState = {
};

const mainReducer = (
    state: Record<any, any> = initialState,
    action: AnyAction
): Record<any, any> => {
    switch (action.type) {
        default:
            return state;
    }
};

export default mainReducer;