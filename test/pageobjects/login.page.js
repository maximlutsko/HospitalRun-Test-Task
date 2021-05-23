const Page = require('./page');
const patientsPage = require('./patients.page');

class LoginPage extends Page {
    get urlRequest () { return 'http://demo.hospitalrun.io/#/login' };
    get logo () { return $("[class='form-signin']") };
    
    get inputUsername () { return $('#identification') };
    get inputPassword () { return $('#password') };
    get signInButton () { return $('//*[@id="ember412"]/div/form/div[2]/button') };
    get errorMessage () { return $("[role='alert']") };
    
    open() {
        super.open(this.urlRequest);
    }
    
    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.signInButton.click();
    }
}

module.exports = new LoginPage();