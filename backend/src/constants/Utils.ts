export enum enviroment {
    PRODUCTION ='PRODUCTION',
    STAGING = 'STAGING',
    QA = 'QA'
}

export const Utils = {
     logColors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'white',
    },
    logLevels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
    }
}