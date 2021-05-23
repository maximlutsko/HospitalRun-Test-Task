const Page = require('./page');

class PatientsPage extends Page {
    get urlRequest () { return 'http://demo.hospitalrun.io/#/patients' };
    get title () { return $('h1=Patient Listing') };

    get cogwheelIcon () { return $('<span />')};
    get logoutButton () { return $('=Logout')};
    
    get medicationButton () { return $('=Medication')};
    get requestsButton () { return $('=Requests')};
    get completedButton () { return $('=Completed')};
    get newRequestButton () { return $('=New Request')};
    get returnButton () { return $('=Return Medication')};

    logout() {
        this.cogwheelIcon.click();
        this.logoutButton.click();
    }

    openMedicationSection() {
        this.medicationButton.waitForDisplayed({ timeout: 3000});
        this.medicationButton.click();
    }
}

module.exports = new PatientsPage();