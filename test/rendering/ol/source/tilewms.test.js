import _ol_Map_ from '../../../../src/ol/Map.js';
import _ol_View_ from '../../../../src/ol/View.js';
import TileLayer from '../../../../src/ol/layer/Tile.js';
import _ol_source_TileWMS_ from '../../../../src/ol/source/TileWMS.js';

describe('ol.rendering.source.TileWMS', function() {

  function tilesLoaded(source, callback) {
    var loading = 0;

    source.on('tileloadstart', function(event) {
      loading++;
    });
    source.on('tileloadend', function(event) {
      loading--;
      if (loading == 0) {
        callback();
      }
    });
    source.on('tileloaderror', function(event) {
      expect().fail('Tile failed to load');
    });

  }

  var map;
  function createMap(renderer, pixelRatio) {
    map = new _ol_Map_({
      target: createMapDiv(200, 200),
      pixelRatio: pixelRatio,
      renderer: renderer,
      view: new _ol_View_({
        center: [0, 0],
        zoom: 5
      })
    });
  }

  afterEach(function() {
    if (map) {
      disposeMap(map);
    }
    map = null;
  });

  function createSource(gutter) {
    return new _ol_source_TileWMS_({
      params: {
        'LAYERS': 'layer'
      },
      gutter: gutter,
      url: 'rendering/ol/data/tiles/wms/wms' + gutter + '.png',
      transition: 0
    });
  }


  describe('0px gutter, 1 pixel ratio', function() {
    it('tests the canvas renderer', function(done) {
      createMap('canvas', 1);
      var source = createSource(0);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/0_1.canvas.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });

    where('WebGL').it('tests the WebGL renderer', function(done) {
      assertWebGL();
      createMap('webgl', 1);
      var source = createSource(0);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/0_1.webgl.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });
  });

  describe('0px gutter, 2 pixel ratio', function() {
    it('tests the canvas renderer', function(done) {
      createMap('canvas', 2);
      var source = createSource(0);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/0_2.canvas.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });

    where('WebGL').it('tests the WebGL renderer', function(done) {
      assertWebGL();
      createMap('webgl', 2);
      var source = createSource(0);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/0_2.webgl.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });
  });


  describe('20px gutter, 1 pixel ratio', function() {
    it('tests the canvas renderer', function(done) {
      createMap('canvas', 1);
      var source = createSource(20);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/20_1.canvas.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });

    where('WebGL').it('tests the WebGL renderer', function(done) {
      assertWebGL();
      createMap('webgl', 1);
      var source = createSource(20);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/20_1.webgl.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });
  });

  describe('20px gutter, 2 pixel ratio', function() {
    it('tests the canvas renderer', function(done) {
      createMap('canvas', 2);
      var source = createSource(20);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/20_2.canvas.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });

    where('WebGL').it('tests the WebGL renderer', function(done) {
      assertWebGL();
      createMap('webgl', 2);
      var source = createSource(20);
      tilesLoaded(source, function() {
        expectResemble(map, 'rendering/ol/source/expected/20_2.webgl.png', IMAGE_TOLERANCE, done);
      });
      map.addLayer(new TileLayer({
        source: source
      }));
    });
  });

});
