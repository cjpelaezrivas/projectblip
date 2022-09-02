class Configuration {
    constructor ( key, defaultValue ){
        this.key = key;
        this.defaultValue = defaultValue;
    }
};

export const VOLUME = new Configuration("volume", 25);
export const TIME_INTERVAL = new Configuration("time-interval", 4);
export const SOUND = new Configuration("sound", 2);
export const PLAY_ALARM_TWICE = new Configuration("play-alarm-twice", false);
export const TELL_HOUR_AFTER_ALARM = new Configuration("convert-hour-to-speech", false);
export const SPEECH_LANGUAGE = new Configuration("speech-language", "en");
export const SPEECH_VOICE = new Configuration("speech-voice", "");
export const DARK_MODE = new Configuration("dark-mode", "");
