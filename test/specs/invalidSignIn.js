const loginPage = require("../pageobjects/login.page");

describe('Invalid sign-in', () => {
    it('should sign-in with invalid credentials', () => {
        loginPage.open();
        loginPage.login('invalid', 'login');
        
        expect(browser).toHaveUrl(loginPage.urlRequest);
        expect(loginPage.logo).toBeDisplayed();
        expect(loginPage.errorMessage).toHaveText('Username or password is incorrect.');
    })
});