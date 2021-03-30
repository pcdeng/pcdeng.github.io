function getTenancySplashImageName(hostName = 'AMZ.staypls.com') {
  const tenancyNames = [
    'AMZ',
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
    'LTL',
  ].map(item => item.toLowerCase());

  const re = /^([a-z]+)\.staypls\.com$/ig;
  const result = re.exec(hostName);
  tenancyName = '';
  if (result) {
    tenancyName = result[1].toLowerCase();
  }
  const imageName = tenancyNames.includes(tenancyName) ? `${tenancyName}.jpg` : 'default.jpg';
  return imageName;
}

module.exports = getTenancySplashImageName;
