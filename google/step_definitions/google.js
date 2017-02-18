module.exports = function () {
  this.Given(/^I'm on google\.com$/, () => {
    // Write code here that turns the phrase above into concrete actions
    browser.url('https://www.google.nl');
  });

  this.When(/^I search for (.*)$/, (searchTerm) => {
    browser.waitForExist('input[name="q"]');
    browser.setValue('input[name="q"]', searchTerm);
    browser.keys(['Enter']);
  });

  this.Then(/^I see Welkom bij Kitten Te Koop$/, function (link) {
    return true;
  });
};
