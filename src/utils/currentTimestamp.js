const moment = require('moment');

module.exports = {
    currentTimestamp() {
        let timestamp = new Date();

        return new Date(Date.UTC(
            timestamp.getFullYear(), timestamp.getMonth(), timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds(), timestamp.getMilliseconds())
        );
    },

    currentTimestampWithMoment() {
        let timestamp = new Date();

        return moment(timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    },
};