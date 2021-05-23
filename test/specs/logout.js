const loginPage = require("../pageobjects/login.page");
const patientsPage = require("../pageobjects/patients.page");

describe('Logout test', () => {
    it('should login and then logout', () => {
        loginPage.open();
        loginPage.login('hr.doctor@hospitalrun.io', 'HRt3st12');

        patientsPage.logout();

        expect(browser).toHaveUrl(loginPage.urlRequest);
        expect(loginPage.logo).toBeDisplayed();
    })
});