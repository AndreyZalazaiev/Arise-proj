import React, {FC} from 'react';
import Alarm from "@material-ui/icons/Alarm";
import {Toast} from 'react-bootstrap';
import {ToastProps} from "../interfaces/ToastProps";
import {DisplayOnTopLevelDiv} from "../styles/ToastProps";

const ToastComponent: FC<ToastProps> = ({onToastClose, toastText, isDisplayed, delay}) => {
    return (
        <DisplayOnTopLevelDiv>
            <Toast onClose={onToastClose} show={isDisplayed} delay={delay || 3000} autohide>
                <Toast.Header>
                    <Alarm/>
                    <strong className="me-auto">Arise</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>{toastText}</Toast.Body>
            </Toast>
        </DisplayOnTopLevelDiv>
    );
};

export default ToastComponent;
