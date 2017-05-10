describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })
  // describe '#land'
	// it 'instructs plane to land' do
	// 	plane = Plane.new
	// 	expect(subject.land(plane)).to include plane
	// end

  describe('lands', function() {
    it('a plane', function() {
      airport.land(plane)
        expect(airport.land(plane)).toContain (plane);

    });

  });
  
});
