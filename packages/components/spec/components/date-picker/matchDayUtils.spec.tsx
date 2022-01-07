import {
  matchDay,
  matchDayMax,
  matchDayMin,
} from '../../../src/components/date-picker/utils/matchDayUtils';

describe('Match Day', () => {
  describe('day matcher', () => {
    it('date should match', () => {
      const date = new Date(2020, 5, 30);
      expect(matchDay(date, date)).toBeTruthy();
      expect(matchDay(date, [date])).toBeTruthy();
    });
    it('date should not match', () => {
      const date = new Date(2020, 5, 30);
      const matcher = new Date(2020, 5, 29);
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
    it('date should not match null', () => {
      const date = new Date(2020, 5, 30);
      expect(matchDay(date, null)).toBeFalsy();
      expect(matchDay(date, [null])).toBeFalsy();
    });
  });
  describe('before matcher', () => {
    it('date before matcher should match', () => {
      const date = new Date(2020, 5, 20);
      const matcher = {
        before: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date after matcher should not match', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        before: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
  });
  describe('after matcher', () => {
    it('date after matcher should match', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        after: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date before matcher should not match', () => {
      const date = new Date(2020, 5, 20);
      const matcher = {
        after: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
  });
  describe('between matcher', () => {
    it('date inside matcher should match (after/before)', () => {
      const date = new Date(2020, 5, 30);
      const matcher = {
        after: new Date(2020, 5, 20),
        before: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date outside matcher should not match (after/before)', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        after: new Date(2020, 5, 20),
        before: new Date(2020, 6, 20),
      };
      const wrongMatcher = {
        before: new Date(2020, 5, 20),
        after: new Date(2020, 6, 20),
      };
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, wrongMatcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
    it('date inside matcher should match (from/to)', () => {
      const date = new Date(2020, 5, 28);
      const matcher = {
        from: new Date(2020, 5, 20),
        to: new Date(2020, 5, 29),
      };

      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date outside matcher should not match (from/to)', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        from: new Date(2020, 5, 20),
        to: new Date(2020, 5, 29),
      };
      const wrongMatcher = {
        from: new Date(2020, 5, 29),
        to: new Date(2020, 5, 20),
      };
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, wrongMatcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
  });
  describe('daysOfWeek matcher', () => {
    it('date Wednesday should match', () => {
      const date = new Date(2020, 5, 30);
      const matcher = {
        daysOfWeek: [2],
      };
      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date not Wednesday should not match', () => {
      const date = new Date(2020, 5, 29);
      const matcher = {
        daysOfWeek: [2],
      };
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
  });
  describe('func matcher', () => {
    it('date should match', () => {
      const date = new Date(2020, 5, 30);
      const matcher = () => true;
      expect(matchDay(date, matcher)).toBeTruthy();
      expect(matchDay(date, [matcher])).toBeTruthy();
    });
    it('date should not match', () => {
      const date = new Date(2020, 5, 29);
      const matcher = () => false;
      expect(matchDay(date, matcher)).toBeFalsy();
      expect(matchDay(date, [matcher])).toBeFalsy();
    });
  });
  describe('date match the min bound and before', () => {
    it('date min matcher should match', () => {
      const date = new Date(2020, 5, 20);
      const matcher = {
        before: new Date(2020, 6, 20),
      };
      expect(matchDayMin(date, matcher)).toBeTruthy();
      expect(matchDayMin(date, [matcher])).toBeTruthy();
    });
    it('date min matcher should not match', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        before: new Date(2020, 6, 20),
      };
      expect(matchDayMin(date, matcher)).toBeFalsy();
      expect(matchDayMin(date, [matcher])).toBeFalsy();
    });
  });
  describe('date match the max bound and after', () => {
    it('date after matcher should match', () => {
      const date = new Date(2020, 7, 20);
      const matcher = {
        after: new Date(2020, 6, 20),
      };
      expect(matchDayMax(date, matcher)).toBeTruthy();
      expect(matchDayMax(date, [matcher])).toBeTruthy();
    });
    it('date before matcher should not match', () => {
      const date = new Date(2020, 5, 20);
      const matcher = {
        after: new Date(2020, 6, 20),
      };
      expect(matchDayMax(date, matcher)).toBeFalsy();
      expect(matchDayMax(date, [matcher])).toBeFalsy();
    });
  });
});
