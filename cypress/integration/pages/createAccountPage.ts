export default class registerToBookStore {


    private gender = '#id_gender1'
    private firstName = '#customer_firstname'
    private lastName = '#customer_lastname'
    private password = '#passwd'
    private dayOfBirth = '#days'
    private monthOfBirth = '#months'
    private yearOfBirth = '#years'
    private company = '#company'
    private addressLine1 = '#address1'
    private addressLine2 = '#address2'
    private city = '#city'
    private state = '#id_state'
    private postalCode = '#postcode'
    private additionalInformation = '#other'
    private homePhone = '#phone'
    private mobilePhone = '#phone_mobile'
    private aliasAddress = '#alias'
    private registerBtn = '#submitAccount'



    public setGender(){
        cy.get(this.gender).click()
    }

    public setFirstName(text: string){
        cy.get(this.firstName).type(text)
        return this;
    }

    public setLastName(text: string){
        cy.get(this.lastName).type(text)
        return this;
    }

    public setPassword(text: string){
        cy.get(this.password).type(text)
        return this;
    }

    public setDayOfBirth(optional: string){
    cy.get(this.dayOfBirth).select(optional)
    return this;
    }

    public setMonthOfBirth(optional: string){
        cy.get(this.monthOfBirth).select(optional)
        return this;
    }
    
    public setYearOfBirth(optional: string){
        cy.get(this.yearOfBirth).select(optional)
        return this;
    }

    public setCompany(text: string){
        cy.get(this.company).type(text)
        return this;
    }

    public setAddressLine1(text: string){
        cy.get(this.addressLine1).type(text)
        return this;
    }

    public setAddressLine2(text: string){
        cy.get(this.addressLine2).type(text)
        return this;
    }

    public setCity(text: string){
        cy.get(this.city).type(text)
        return this;
    }

    public setState(){
        cy.get(this.state).select('1')
        return this;
    }

    public setPostalCode(text:string){
        cy.get(this.postalCode).type(text)
        return this;
    }

    public setAdditionalInfo(text:string){
        cy.get(this.additionalInformation).type(text)
        return this;
    }

    public setHomePhone(text:string){
        cy.get(this.homePhone).type(text)
        return this;
    }

    public setMobilePhone(text:string){
        cy.get(this.mobilePhone).type(text)
        return this;
    }

    public setAliasAddress(text:string){
        cy.get(this.aliasAddress).clear().type(text)
        return this;
    }

    public clickRegisterBtn(){
        cy.get(this.registerBtn).click()
        return this;
    }






    





    



}