const expect = require('chai').expect;
const colors = require('colors');

// Unit Tests for Checking a Ship
describe('checkForShip', () => {

  // Require function
  const checkForShip = require('../game_logic/ship_methods').checkForShip;
  // Define Player
  let player;

  // Mocha Setup
  before(() => {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        },
        {
          locations: [[1,0], [1,1]]
        },
        {
          locations: [[2,0], [2,1], [2,2], [2,3]]
        }
      ]
    };
  });

  // Tests
  it('should correctly report NO ship at a given players coordinate', () => {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should correctly report A ship at a given players coordinate', () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships located at more than one coordinate', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);;
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

});

describe('damageShip', () => {

  const damageShip = require('../game_logic/ship_methods').damageShip;
  let ship;

  before(() => {
    ship = {
      locations: [[0,0]],
      damage: []
    };
  });

  it('should register damage on a given ship at a given location', () => {
    damageShip(ship, [0,0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });

});

describe('fire', () => {

  const fire = require('../game_logic/ship_methods').fire;
  let player;

  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0,0]],
          damage: []
        }
      ]
    };
  });

  after(() => {
    console.log('\nEntire Test Suite Completed!'.green);
  });

  it('should record damage ona given players ship at a given coordinate', () => {
    fire(player, [0,0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
  });

  it('should not record damage if there is no ship at my coordinates', () => {
    fire(player, [9,9]);
    expect(player.ships[0].damage).to.be.empty;
  });

});
