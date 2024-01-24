const formatDate = require("../src/components/UI/viewall/Unittesting");
const { format } = require("date-fns");
const { enUS } = require("date-fns/locale");

describe("formatDate", () => {
  test("should format the date correctly", () => {
    const rawDate = "2024-01-24T12:34:56.789Z";
    const formattedDate = formatDate(rawDate);

    // Assuming the date-fns format function formats correctly
    const expectedDate = format(new Date(rawDate), "M.d", { locale: enUS });

    expect(formattedDate).toBe(expectedDate);
  });

  test("should return an empty string for bad data", () => {
    const formattedDate = formatDate(null);

    expect(formattedDate).toBe("");
  });
});
