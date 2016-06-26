var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('FBC0B6DB'),
  addressVersion: 0x32,
  privKeyVersion: 0xb2,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488B21E,
  hkeyPrivateVersion: 0x0488ADE4,
  genesisBlock: {
    hash: hex('7231e8037796de412d350e509a56ed4fccddb20cfde1debf1c47a5ce9b871f6a'),
    merkle_root: hex('36a9e41063f3e71466299d0ed9e8193c1c802a88b286016fa4a4d0c3bc384a5c'),
    height: 0,
    nonce: 3716037,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1389040865,
    bits: 504365040,
  },
  dnsSeeds: [
    'dnsseed.machinecoin.org'
  ],
  defaultClientPort: 40333
};

exports.mainnet = exports.livenet;

exports.testnet = {  //not setup for litecoin yet
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 265310,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1392281929,
    bits: 486604799,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
