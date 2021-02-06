export default class loginPage {


    private emailLogin = '#email'
    private emailCreate = '##email_create'
    private password = '#passwd'
    private loginBtn = '#login'
    private createButton = '#SubmitCreate'
    private signInBtn = '#SubmitLogin'
    private lostPassword = "//*[@title='Recover your forgotten password']"



    public openLoginPage(){
    cy.visit(Cypress.env('homePageUrl'))
    }

    public setEmailCreate(text: string){
        cy.get(this.emailCreate).type(text)
        return this;
    }

    public clickCreateAccountBtn(){
        cy.get(this.createButton).click()
        return this;
    }
    
    public fillEmail(text: string){
        cy.get(this.emailLogin).type(text)
        return this;
    }

    public fillPassword(text: string){
        cy.get(this.password).type(text,)
        return this;
    }

    public clickSignInBtn(){
        cy.get(this.signInBtn).click()
        return this;
    }

    public clickForgotPassword(){
        cy.xpath(this.lostPassword).click()
        return this;
    }

    






    
}