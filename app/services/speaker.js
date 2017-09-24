import {Speech} from 'expo';

const defauultOptions = {language: "pl"};

export const speak = (text, options={}) => Speech.speak(text, {...defauultOptions, ...options});
