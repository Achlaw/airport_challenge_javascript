describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('defaults to flying on creation', function() {
    expect(plane._flying).toBe(true);
  });
  it('flying to be false upon landing', function() {
    airport.land(plane)
    expect(plane._flying).toBe(false);
  });
  it('flying to be true upon takeoff', function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(plane._flying).toBe(true);
  });
});
