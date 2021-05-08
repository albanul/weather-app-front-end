import {DateTime} from "luxon";

const roundToOneDecimal = (value) => Math.round(value * 10) / 10;

const toDayOfWeek = value => DateTime.fromISO(value).toFormat('EEEE');

const toDateWithFullMonth = value => DateTime.fromISO(value).toFormat('DDD');

export default {
    roundToOneDecimal,
    toDayOfWeek,
    toDateWithFullMonth
}
