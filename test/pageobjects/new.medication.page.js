const Page = require('./page');
const patientsPage = require('./patients.page');

class NewMedicationPage extends Page {
    get title () { return $('h1=New Medication Request') };
    
    get patientField () { return $("input[id*='patientTypeAhead-ember']") };
    get patientFieldDropdown () { return $("[class='tt-dataset tt-dataset-0']") };
    get patientSuggestionList () { return $("[class='tt-menu tt-open']") };
    get patientSuggestionListOfOptions () { return $("[class='tt-suggestion tt-selectable']") };
    get patientSuggestionListAutocompleteOption () { return $("[class='tt-highlight']") };
    
    get visitDropdown () { return $("[class='form-control ']") };
    get visitOption () { return $("//option[contains(@value,'hospitalrun')]") };
    
    get medicationField () { return $("input[id*='inventoryItemTypeAhead-ember']") };
    get medicationAutocompleteOption () { return $('.tt-highlight=Pramoxine') };
    
    get prescriptionField () { return $("[class='form-control  ember-text-area ember-view']") };
    get prescriptionDateField () { return $("[class='form-control  ember-text-field ember-view']") };
    
    get startDate () { return $("[class='is-today']") };
    get quantityRequestedField () { return $("(//input[contains(@type,'text')])[7]") };

    get refilsField () { return $("(//input[contains(@type,'text')])[8]") };

    get addButton () { return $(".on-white") };
    get modalWindow () { return $("//div[contains(@class,'modal-dialog')]") };
    get modalOkButton () { return $("//button[contains(.,'Ok')]") };
    get modalXButton () { return $("//span[contains(@class,'octicon octicon-x')]") };
    
    selectPatient(patientName) {
        this.patientField.addValue(patientName);
        while(this.patientSuggestionListAutocompleteOption.isDisplayed() == false) {
                browser.keys(['Backspace']);
                this.patientField.addValue('t');
        }
        this.patientSuggestionListAutocompleteOption.click();
    }

    selectVisit(visitIndex) {
        this.visitDropdown.click();
        browser.waitUntil(() => this.visitOption.isDisplayed() == true);
        this.visitDropdown.selectByIndex(visitIndex);
        this.visitDropdown.click();
    }

    setMedication(medication) {
        this.medicationField.addValue(medication);
        this.medicationAutocompleteOption.click();
    }

    setPrescription(prescription) {
        this.prescriptionField.addValue(prescription);
    }

    getDayBeforeYesterday(date) {
        date.setDate( date.getDate() - 2 );
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;
        
        return date;
    }

    setDate() {
        let date = new Date();
        this.prescriptionDateField.setValue(this.getDayBeforeYesterday(date));
    }

    setQuantity() {
        this.quantityRequestedField.click();
        this.quantityRequestedField.setValue(Math.floor(Math.random() * 5) + 1);
    }

    setRefills() {
        this.refilsField.click();
        this.refilsField.setValue(Math.floor(Math.random() * 5) + 5);
    }
}

module.exports = new NewMedicationPage();