import _ from "lodash"
import Speech from "../libs/speech"

const defauultOptions = {language: "pl"};


export const speak = (text, rewardFile ='', options = {}) => {
    const onDone = _.once(options.onDone || _.noop);
    const timer = _.delay(() => {
        console.log("Speaking finished faster. Error in TTS?");
        onDone();
    }, 1000)

    function symulatorSpeak() {
        Speech.speak(text, text, {
            ...defauultOptions,
            ...options,
            onDone: () => {
                clearTimeout(timer);
                onDone();
            },
            onError: (...args) => console.log("Error in TTS", ...args)
        })
    }
    if(rewardFile!='') {
        var Sound = require('react-native-sound');
        const sound = new Sound(rewardFile, null, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                symulatorSpeak();
            } else {
                this.setTimeout(() => {
                    symulatorSpeak();
                }, sound.getDuration() * 1000);
                sound.play();
            }
        });
    }
    else {
        symulatorSpeak();
    }
};

