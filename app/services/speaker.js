import {Speech} from 'expo';

const defauultOptions = {language: "en"};

export const speak = (text, options={}) => Speech.speak(text, {...defauultOptions, ...options});
