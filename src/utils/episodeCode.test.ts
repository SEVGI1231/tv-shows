import { episodeCode } from "./episodeCode";

test("episode card adds zero padding to one digit numbers", () => {
  expect(episodeCode(5)).toBe("05");
  expect(episodeCode(10)).toBe("10");
  expect(episodeCode(234)).toBe("234");
});
