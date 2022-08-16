import { pTagRemoval } from "./pTagRemoval";

test("retruns a string without pTags", () => {
  expect(pTagRemoval("<p>hello </p>")).toBe("hello ");
  expect(pTagRemoval("<p>hello yara</p>")).toBe("hello yara");
  expect(pTagRemoval("<p>123</p>")).toBe("123");
});
