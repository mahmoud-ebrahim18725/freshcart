import {useStore} from "./useStore";

export function useUiSelectors() {
    const {state} = useStore();
    const uiStatus = state.ui.status;
    const uiError = state.ui.error;
    return {
        uiStatus,
        uiError,
        isLoading: uiStatus === "loading",
        isError: uiStatus === "error",
        isSuccess: uiStatus === "success",
    };
}