import Magician from '../magician';

test('Must correctly create Magician character object', () => {
  const expected = {
    name: 'Test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Test', 'Magician')).toEqual(expected);
});

test('Must correctly create Magician character object when in arguments there is only name', () => {
  const expected = {
    name: 'Test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Test')).toEqual(expected);
});
