import uuid from 'react-native-uuid';


export default class GenUtils {
    static getUUID = (): string => {
        return uuid.v4().toString();
    }
}

