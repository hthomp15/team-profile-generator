const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Haile", 1, "hailethomp@gmail.com", "github15");

    expect(engineer.github).toEqual(expect.any(String));
})

test("get engineer's github username", () => {
    const engineer = new Engineer("Haile", 1, "hailethomp@gmail.com", "github15");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("get engineer's role", () => {
    const engineer = new Engineer("Haile", 1, "hailethomp@gmail.com", "github15");

    expect(engineer.getRole()).toEqual("Engineer");
})