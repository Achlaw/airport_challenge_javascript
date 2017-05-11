describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  it("Should land a plane", function() {
    airport.land(plane)
    expect(airport.hanger).toContain(plane)
  });
  it("Should fly a plane", function() {
    airport.takeoff(plane)
    expect(airport.hanger).not.toContain(plane)
  });
});
