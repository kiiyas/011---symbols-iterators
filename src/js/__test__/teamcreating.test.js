import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Team from '../teamcreating';
import Undead from '../undead';
import Zombie from '../zombie';

const bowerman = new Bowerman('bow');
const daemon = new Daemon('dae');
const magician = new Magician('magi');
const swordsman = new Swordsman('swor');
const undead = new Undead('und');
const zombie = new Zombie('zomb');

test('Should create a team correctly', () => {
  const team = new Team();
  team.add(zombie);
  const expected = {
    name: 'zomb',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const teamset = new Set();
  teamset.add(expected);
  expect(team.members).toEqual(teamset);
});

test('Should throw an Error when choosen character is in a team', () => {
  const team = new Team();
  team.add(bowerman);
  expect(() => team.add(bowerman)).toThrowError('The character has been added!');
});

test('Should add few characters to the team', () => {
  const team = new Team();
  const teamset = new Set([bowerman, daemon, magician, swordsman, undead, zombie]);
  team.addAll([bowerman, daemon, magician, swordsman, undead, zombie]);
  expect(team.members).toEqual(teamset);
});

test('Should add few characters to the team ', () => {
  const team = new Team();
  team.addAll([bowerman, daemon, magician]);
  expect(team.members.size).toBe(3);
});

test('Should convert Set to Array', () => {
  const team = new Team();
  team.addAll([bowerman, daemon, magician, swordsman, undead, zombie]);
  expect(team.toArray()).toEqual([bowerman, daemon, magician, swordsman, undead, zombie]);
});
