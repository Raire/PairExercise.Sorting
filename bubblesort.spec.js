/*beforeAll(function() {
  spyOn(window, "swap").and.callThrough();
});
it("swaps the right number of times", function() {});
*/
describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function() {
  it("sorts the array", function() {
    expect(bubbleSort([2, 3, 5, 1])).toEqual([1, 2, 3, 5]);
  });
});

describe("Bubble Sort", function() {
  it("handles only one element in array", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
});
