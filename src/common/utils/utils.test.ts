import { isToday } from '.';

it('should return true if passed date is today', () => {
    const date = new Date();
    expect(isToday(date)).toEqual(true);
});

it('should return false if passed date is not today', () => {
    const date = new Date('20/01/2019');
    expect(isToday(date)).toEqual(false);
});
