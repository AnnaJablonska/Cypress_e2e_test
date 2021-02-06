import LoginPage from '../pages/loginPage'
import BasePage from '../pages/basePage'
import { Utils } from '../../support/utils';



describe('Create and account Test', () => {​​​​​

    const loginPage = new LoginPage();
    const basePage = new BasePage();

    beforeEach(() => {
        loginPage.openLoginPage();
      })

    it('Im able to login into application', () => {​​​​​

        loginPage.fillEmail('ajablonska@test.pl');
        loginPage.fillPassword('Password1');

        loginPage.clickSignInBtn();

        basePage.getPageTitle('My account')
    })

   it('Im not able to login into application with wrong credentials', () => {​​​​​
    loginPage.fillEmail('ajablonska@test.pl');
    loginPage.fillPassword('1');

    loginPage.clickSignInBtn();

    basePage.getValidationError('There is 1 error');

   })

   it('Im able to retrieve a password', () => {​​​​​

    loginPage.clickForgotPassword();
    basePage.getPageSubheading('Forgot your password?')
    loginPage.fillEmail('ajablonska@test.pl')

    basePage.clickRetrieveBtn()

    basePage.getSuccessAlert('A confirmation email has been sent to your address: ajablonska@test.pl');

   })


})