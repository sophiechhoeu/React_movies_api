"use strict"

const chai = require('chai');
const expect = chai.expect;
const Person = require('../../models/person');


describe('Person', function() {
  it('should have a full name', function() {
    const person = new Person({ firstName: 'Becky', lastName: 'Smith'})
    expect(person.fullName()).to.equal('Becky Smith')
  })
})
