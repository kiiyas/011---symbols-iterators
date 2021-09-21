import Character from '../character';
import Bowerman from '../bowerman';

test('Should correctly create a character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowerman')).toEqual(expected);
});

test('Should throw an error if name is not a string', () => {
  expect(() => new Character(52, 'Bowerman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name is not consider 2 - 10 literas', () => {
  expect(() => new Character('T', 'Bowerman')).toThrowError('The name must be 2 to 10 literas!');
  expect(() => new Character('liolijjkjjhbo')).toThrowError('The name must be 2 to 10 literas!');
});

test('if the character is not on the list, throws an error', () => {
  expect(() => new Character('eyeyr')).toThrowError('The type of character must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
});

test('Should levelUp', () => {
  const bowerman = new Bowerman('yuyuyu', 'Bowerman');
  bowerman.levelUp();
  const result = {
    name: 'yuyuyu',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(bowerman).toEqual(result);
});

test('Error levelUp', () => {
  expect(() => {
    const bowerman = new Bowerman('yuyuyu', 'Bowerman');
    bowerman.health = 0;
    bowerman.levelUp();
    throw new Error('WAISTED');
  }).toThrow();
});

test('Should take a damage', () => {
  const bowerman = new Bowerman('yuyuyu', 'Bowerman');
  bowerman.damage(10);
  expect(bowerman.health).toEqual(92.5);
});

test('Should damage correctly', () => {
  const bowerman = new Bowerman('yuyuyu', 'Bowerman');
  bowerman.health = -10;
  bowerman.damage(100);
  expect(bowerman.health).toEqual(0);
});
