import Tts from 'react-native-tts';
import _ from "lodash"

Tts.setDefaultLanguage('pl-PL');

export const speak = (text, options = {}) => {

    const {onDone, onStart, onCancel} = options;

    const startListener = (e) => {
        _.isFunction(onStart) && onStart(e);
        Tts.removeEventListener('tts-start', startListener)
    };

    const finishListener = (e) => {
        _.isFunction(onDone) && onDone(e);
        Tts.removeEventListener('tts-finish', finishListener)
    };

    const cancelListener = (e) => {
        _.isFunction(onCancel) && onCancel(e);
        Tts.removeEventListener('tts-cancel', cancelListener)
    };

    Tts.addEventListener('tts-start', startListener);
    Tts.addEventListener('tts-finish', finishListener);
    Tts.addEventListener('tts-cancel', cancelListener);

    Tts.getInitStatus().then(() =>
        Tts.speak(text)
    );

    return () => {
        Tts.removeEventListener('tts-start', startListener);
        Tts.removeEventListener('tts-finish', finishListener);
        Tts.removeEventListener('tts-cancel', cancelListener);
    }
};
