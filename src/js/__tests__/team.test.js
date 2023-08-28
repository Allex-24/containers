const Team = require('../team');

test('adding a character to the team', () => {
    const team = new Team();
    const character = { name: 'Character 1' };

    team.add(character);

    expect(team.toArray()).toEqual([character]);
});

test('not allowing adding the same character twice', () => {
    const team = new Team();
    const character = { name: 'Character 1' };

    team.add(character);

    expect(() => team.add(character)).toThrowError('Character already exists in the team');
});

test('adding all characters to the team', () => {
    const team = new Team();
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };

    team.addAll(character1, character2);

    expect(team.toArray()).toEqual([character1, character2]);
});

test('converting the team to an array', () => {
    const team = new Team();
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };

    team.addAll(character1, character2);

    expect(team.toArray()).toEqual([character1, character2]);
});
