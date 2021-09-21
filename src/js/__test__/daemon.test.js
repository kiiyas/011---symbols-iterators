import Daemon from '../daemon';

test('Must correctly create Daemon character object', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Test', 'Daemon')).toEqual(expected);
});

test('Must correctly create Daemon character object when in arguments there is only name', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Test')).toEqual(expected);
});
