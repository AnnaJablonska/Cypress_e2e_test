export default class basePage {


    private pageTitle = '.page-heading'
    private alertMessage = '#create_account_error'
    private validationError = '.alert.alert-danger'
    private successAlert = '.alert.alert-success'
    private pageSubHeadTitle = '.page-subheading'
    private retrivePasswordBtn = '.submit .btn'
    
    public getPageTitle(text: string) {
        cy.get(this.pageTitle, { timeout: 8000 }).should('contain', text)
        return this;
      }

      public getPageSubheading(text: string){
        cy.get(this.pageSubHeadTitle, { timeout: 8000 }).should('contain', text)
        return this;
      }

      public getAlertMessage(text: string) {
        cy.get(this.alertMessage).should('contain', text)
        return this;
      }

      public getValidationError(text: string) {
        cy.get(this.validationError).should('contain', text)
        return this;
      }

      public getSuccessAlert(text: string){
        cy.get(this.successAlert).should('contain', text)
        return this;
      }

      public clickRetrieveBtn(){
          cy.get(this.retrivePasswordBtn).click()
          return this;
      }

    }