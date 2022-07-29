jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

it("", async () => {
  const rate = 14.12;
  expect(rate).toEqual(14.0);
});
