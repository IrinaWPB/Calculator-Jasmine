
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('41.67');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100,
    years: 4,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.83');
});

