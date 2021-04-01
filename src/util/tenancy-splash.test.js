const getTenancySplashImageName = require('./tenancy-splash');

test('{name}.staypls.com to be {name}.jpg', () => {
  const tenancyNames = ['AMZ',
    'GEN',
    'ZUR',
    'CRP',
    'CDG',
    'PGL',
    'PLD',
    'RTM',
    'AMA',
    'AMS',
    'GLA',
    'LBA',
    'LSD',
    'LTL'];
  tenancyNames.forEach(name => {
    const imageName = getTenancySplashImageName(`${name}.staypls.com`);
    expect(imageName).toBe(`${name.toLowerCase()}.jpg`);
  });
});

test('ksl.staypls.com to be default.jpg', () => {
  const imageName = getTenancySplashImageName('ksl.staypls.com');
  expect(imageName).toBe('default.jpg');
});


test('TUH.staypls.com to be default.jpg', () => {
  const imageName = getTenancySplashImageName('THU.staypls.com');
  expect(imageName).toBe('default.jpg');
});
