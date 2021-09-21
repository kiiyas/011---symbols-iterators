import Zombie from '../zombie';

test('Must correctly create Zombie character object', () => {
  const expected = {
    name: 'zomb',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('zomb', 'Zombie')).toEqual(expected);
});

test('Must correctly create Zombie character object when in arguments there is only name', () => {
  const expected = {
    name: 'zomb',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('zomb')).toEqual(expected);
});
