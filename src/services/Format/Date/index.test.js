import * as DateFormat from './index';

test('date format should execute with success', () => {
    const currentDate = new Date('2020-04-23T20:40:42.927Z');
    const myDt = Date.UTC(2020, 11, 20, 3, 0, 0);
    var dt = DateFormat.formatDateTime(currentDate);
    expect(dt).toBe('4/23/2020, 15:40:42');

    console.log(new Intl.DateTimeFormat('en-GB').format(myDt));

    dt = DateFormat.formatDateTime(currentDate, 'fr-GB');
    console.log(dt);
    expect(dt).toBe('4/23/2020, 15:40:42');
});