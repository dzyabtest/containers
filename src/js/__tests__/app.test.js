/* eslint-disable linebreak-style */
/* eslint-disable indent */
import Team from '../app';

test('Add correct character', () => {
  const team = new Team();
  const character1 = { name: 'character 1' };
  team.add(character1);
  const result = team.members.has(character1);

  expect(result).toBe(true);
});

test('Add uncorrect character', () => {
  const team = new Team();
  const character1 = { name: 'character 1' };
  team.add(character1);

  try {
    team.add(character1);
  } catch (e) {
    expect(e.message).toBe('Повторное добавление персонажа!');
  }
});

test('Add some characters', () => {
  const team = new Team();
  const character1 = { name: 'character 1' };
  const character2 = { name: 'character 2' };
  team.addAll(character1, character2, character1);
  const result = team.members.has(character1) && team.members.has(character2);

  expect(result).toBe(true);
});

test('Conver characters to array', () => {
  const team = new Team();
  const character1 = { name: 'character 1' };
  const character2 = { name: 'character 2' };
  team.addAll(character1, character2);

  const result = team.toArrray();

  expect(result).toMatchObject([character1, character2]);
});
