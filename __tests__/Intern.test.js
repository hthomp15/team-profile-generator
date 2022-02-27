const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Frankfurt", 7, "frankfurt@test.com", "school name");

    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school name", () => {
    const intern = new Intern("Frankfurt", 7, "frankfurt@test.com", "school name");

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern role", () => {
    const intern = new Intern("Frankfurt", 7, "frankfurt@test.com", "school name");

    expect(intern.getRole()).toEqual("Intern");
});