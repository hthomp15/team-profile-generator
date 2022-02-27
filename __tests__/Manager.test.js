const Manager = require('../lib/Manager');

test('creates an intern object', () => {
    const manager = new Manager("Leon", 0, "leonapplewood@web.org", 123-456-7890);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets manger's office number", () => {
    const manager = new Manager("Leon", 0, "leonapplewood@web.org", 123-456-7890);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test("gets manger's role", () => {
    const manager = new Manager("Leon", 0, "leonapplewood@web.org", 123-456-7890);

    expect(manager.getRole()).toEqual("Manger");
})