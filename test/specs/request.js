const loginPage = require("../pageobjects/login.page");
const newMedicationPage = require("../pageobjects/new.medication.page");
const patientsPage = require("../pageobjects/patients.page");

describe('Open medication section', () => {
    it('should click on medication item and assert having 4 subsections', () => {
        loginPage.open();
        loginPage.login('hr.doctor@hospitalrun.io', 'HRt3st12');

        patientsPage.openMedicationSection();

        expect(patientsPage.requestsButton).toHaveText('Requests');
        expect(patientsPage.completedButton).toHaveText('Completed');
        expect(patientsPage.newRequestButton).toHaveText('New Request');
        expect(patientsPage.returnButton).toHaveText('Return Medication');
    })
});

describe('New request', () => {
    it ('should make a new request and assert that the it is saved', () => {
        patientsPage.newRequestButton.click();

        newMedicationPage.selectPatient('Test Patient');
        newMedicationPage.selectVisit(3);

        newMedicationPage.setMedication('Pramoxine');
        newMedicationPage.setPrescription('Testing prescription');

        newMedicationPage.setDate();
        
        newMedicationPage.setQuantity();
        newMedicationPage.setRefills();
        newMedicationPage.addButton.click();

        expect(newMedicationPage.modalWindow).toBeDisplayed();
        expect(newMedicationPage.modalOkButton).toBeDisplayed();
        expect(newMedicationPage.modalXButton).toBeDisplayed();
    })
});

describe('Close pop-up', () => {
    it('should close the Medication Request Saved pop-up and assert that the New Medication Request Page is displayed', () => {
        newMedicationPage.modalOkButton.click();
        
        expect(newMedicationPage.modalWindow).not.toBeDisplayed();
        expect(newMedicationPage.title).toHaveText('New Medication Request');
    })
});