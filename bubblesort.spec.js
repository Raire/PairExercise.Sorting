describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it("swaps the right number of times", function() {
    bubbleSort([1,2,3,4]);
    expect(window.swap.calls.count()).toEqual(3);
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("sorts the array", function() {
    expect(bubbleSort([2, 3, 5, 1])).toEqual([1, 2, 3, 5]);
  });



  it("handles only one element in array", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
});
