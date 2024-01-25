const formatDate = require("../src/components/UI/viewall/Unittesting");
const { format } = require("date-fns");
const { enUS } = require("date-fns/locale");

describe("formatDate", () => {
  //Starts a Jest test case with the description "should format the date correctly."
  test("should format the date correctly", () => {
    //Defines a raw date string
    const rawDate = "2024-01-24T12:34:56.789Z";

    //Calls the formatDate function with the raw date
    const formattedDate = formatDate(rawDate);

    // Assuming the date-fns format function formats correctly
    const expectedDate = format(new Date(rawDate), "M.d", { locale: enUS });

    //checks if these are equal to eachother
    expect(formattedDate).toBe(expectedDate);
  });

  test("should return an empty string for bad data", () => {
    const formattedDate = formatDate(null);

    //formattedDate is an empty string when the input is null.
    expect(formattedDate).toBe("");
  });
});
