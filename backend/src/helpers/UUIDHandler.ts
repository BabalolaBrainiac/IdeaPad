import {Binary, ObjectId} from 'mongodb';

export const MongoUUIDHelper = {
    binToJUUIDString(binary: Binary) {
        let hex = binary.buffer.toString('hex');
        let msb = hex.substr(0, 16);
        let lsb = hex.substr(16, 16);

        msb = significantBit(msb);
        lsb = significantBit(lsb);
        hex = msb + lsb;

        const uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12);

        return uuid;
    },
    juuidStringToBin(juuid: any) {
        let hex = juuid.replace(/[{}-]/g, ''); // remove extra characters
        let msb = hex.substr(0, 16);
        let lsb = hex.substr(16, 16);

        msb = significantBit(msb);
        lsb = significantBit(lsb);

        hex = msb + lsb;

        return new Binary(Buffer.from(hexToBase64(hex), 'base64'), 3);
    },
    binToCSUUIDString(binary: any) {
        let hex = binary.buffer.toString('hex');
        const a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2);
        const b = hex.substr(10, 2) + hex.substr(8, 2);
        const c = hex.substr(14, 2) + hex.substr(12, 2);
        const d = hex.substr(16, 16);

        hex = a + b + c + d;

        const uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12);

        return uuid;
    },
    csuuidStringToBin(csuuid: any) {
        let hex = csuuid.replace(/[{}-]/g, ''); // remove extra characters
        const a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2);
        const b = hex.substr(10, 2) + hex.substr(8, 2);
        const c = hex.substr(14, 2) + hex.substr(12, 2);
        const d = hex.substr(16, 16);

        hex = a + b + c + d;

        return new Binary(Buffer.from(hexToBase64(hex), 'base64'), 3);
    },
    hexToBase64,
    strToObjectId(str: string) {
        return new ObjectId(str);
    },
};

function hexToBase64(hex: any) {
    return Buffer.from(hex, 'hex').toString('base64');
}

function significantBit(msb: any) {
    msb =
        msb.substr(14, 2) +
        msb.substr(12, 2) +
        msb.substr(10, 2) +
        msb.substr(8, 2) +
        msb.substr(6, 2) +
        msb.substr(4, 2) +
        msb.substr(2, 2) +
        msb.substr(0, 2);

    return msb;
}
