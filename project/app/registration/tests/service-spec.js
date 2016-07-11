/* global it, expect, describe, beforeEach, angular */

'use strict';

require('../service');

describe('registration', function() {
  beforeEach(angular.mock.module('app'));

  beforeEach(inject((registrationService) => {
    this.registrationService = registrationService;
  }));

  it('should be defined', () => {
    expect(this.registrationService.hello).toBeDefined();
  });

  it('should say hi', () => {
    expect(this.registrationService.hello()).toBe('hi');
  });

});
