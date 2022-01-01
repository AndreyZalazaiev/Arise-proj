export interface ToastProps {
    onToastClose: () => void;
    isDisplayed: boolean;
    toastText: string;
    delay?: number;
}
