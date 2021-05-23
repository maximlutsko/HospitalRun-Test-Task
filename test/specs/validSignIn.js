const loginPage = require("../pageobjects/login.page");
const patientsPage = require("../pageobjects/patients.page");

describe('Valid sign-in', () => {
    it('should sign-in with valid credentials', () => {
        loginPage.open();
        loginPage.login('hr.doctor@hospitalrun.io', 'HRt3st12');
        
        expect(browser).toHaveUrl(patientsPage.urlRequest);
        expect(patientsPage.title).toHaveText('Patient Listing');
    })
});