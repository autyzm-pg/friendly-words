import {Speech} from 'expo';
import _ from "lodash"

const defauultOptions = {language: "pl"};

export const speak = (text, options = {}) => {
    const onDone = _.once(options.onDone || _.noop);
    const timer = _.delay(() => {
        console.log("Speaking finished faster. Error in TTS?");
        onDone();
    }, 1000)
    Speech.speak(text, {
        ...defauultOptions,
        ...options,
        onDone: () => {
            clearTimeout(timer);
            onDone();
        },
        onError: (...args) => console.log("Error in TTS", ...args)
    })
};
