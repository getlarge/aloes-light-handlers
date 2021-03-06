const {assert} = require('chai');
const {aloesLightPatternDetector} = require('../lib/detector');

describe('aloesLightPatternDetector - test 1', () => {
  const packet = {topic: 'Aloes123-out/0/3349/0/3/5910', payload: 'test'};
  const pattern = aloesLightPatternDetector(packet);
  const params = pattern.params;
  const keys = [
    'omaObjectId',
    'sensorId',
    'nodeId',
    'prefixedDevEui',
    'method',
    'omaResourceId',
  ];

  it('pattern should exist', () => {
    assert.typeOf(pattern, 'object');
  });

  it('pattern should contain params and value properties', () => {
    assert.hasAllKeys(pattern, ['params', 'name']);
  });

  it(`pattern name should be aloesLight`, () => {
    assert.strictEqual('aloesLight', pattern.name);
  });

  it(`params should contain ${keys.toString()}`, () => {
    assert.hasAllKeys(params, keys);
  });
});

describe('aloesLightPatternDetector - test 2', () => {
  const packet = {topic: 'Aloes123-out/0/3300/1/4/5700', payload: 'test'};
  const pattern = aloesLightPatternDetector(packet);
  const params = pattern.params;
  const keys = [
    'omaObjectId',
    'sensorId',
    'nodeId',
    'prefixedDevEui',
    'method',
    'omaResourceId',
  ];

  it('pattern should exist', () => {
    assert.typeOf(pattern, 'object');
  });

  it('pattern should contain params and value properties', () => {
    assert.hasAllKeys(pattern, ['params', 'name']);
  });

  it(`pattern name should be aloesLight`, () => {
    assert.strictEqual('aloesLight', pattern.name);
  });

  it(`params should contain ${keys.toString()}`, () => {
    assert.hasAllKeys(params, keys);
  });
});

describe('aloesLightPatternDetector - test 3', () => {
  const packet = {topic: 'Aloes123-out/1/3349/0/3/5910', payload: 'test'};
  const pattern = aloesLightPatternDetector(packet);
  const params = pattern.params;
  const keys = [
    'omaObjectId',
    'sensorId',
    'nodeId',
    'prefixedDevEui',
    'method',
    'omaResourceId',
  ];

  it('pattern should exist', () => {
    assert.typeOf(pattern, 'object');
  });

  it('pattern should contain params and value properties', () => {
    assert.hasAllKeys(pattern, ['params', 'name']);
  });

  it(`pattern name should be aloesLight`, () => {
    assert.strictEqual('aloesLight', pattern.name);
  });

  it(`params should contain ${keys.toString()}`, () => {
    assert.hasAllKeys(params, keys);
  });
});

describe('aloesLightPatternDetector - test 4', () => {
  const packet = {
    topic: 'Aloes123-out/1/3349/1/4/5910',
    payload: Buffer.from('looognognogonbbuffferrr'),
  };
  const pattern = aloesLightPatternDetector(packet);
  const params = pattern.params;
  const keys = [
    'omaObjectId',
    'sensorId',
    'nodeId',
    'prefixedDevEui',
    'method',
    'omaResourceId',
  ];

  it('pattern should exist', () => {
    assert.typeOf(pattern, 'object');
  });

  it('pattern should contain params and value properties', () => {
    assert.hasAllKeys(pattern, ['params', 'name']);
  });

  it(`pattern name should be aloesLight`, () => {
    assert.strictEqual('aloesLight', pattern.name);
  });

  it(`params should contain ${keys.toString()}`, () => {
    assert.hasAllKeys(params, keys);
  });
});
