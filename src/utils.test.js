import { subtractDaysFromNow, formatDateForGithub, leftPad } from "./utils";

describe("utils", () => {
  describe("leftPad", () => {
    it("add passed number of zeros to the left of number", () => {
      expect(leftPad(1, 2)).toBe("01");
    });

    it("add passed number of zeros to the left of number only if required", () => {
      expect(leftPad(10, 2)).toBe("10");
    });
  });

  describe("subtractDaysFromNow", () => {
    it('returns date sutracted by specified number of days', () => {
      const nowMock = +(new Date(2018, 0, 31, 0, 0, 0));
      jest.spyOn(Date, 'now').mockImplementation(() => nowMock)
      const subtracted = +subtractDaysFromNow(30);
      const expected = +(new Date(2018, 0, 1, 0, 0, 0));
      expect(subtracted).toBe(expected)
    })
  })

  describe("formatDateForGithub", () => {
    it("returns date in format: YYYY-MM-DD", () => {
      const date = new Date(2018, 0, 1);
      expect(formatDateForGithub(date)).toBe("2018-01-01");
    });
  });
});
