import LoginPage from '../pages/loginPage'
import CreateAccountPage from '../pages/createAccountPage'
import BasePage from '../pages/basePage'
import { Utils } from '../../support/utils';


describe('Create a Test Account', () => {​​​​​

    const loginPage = new LoginPage();
    const createAccount = new CreateAccountPage();
    const basePage = new BasePage();
    let randomNumber1 = Utils.generateString(3)
    
    beforeEach(() => {
        loginPage.openLoginPage();
      })

    it('Im able to create a new user by filling out all fields', () => {​​​​​

    loginPage.setEmailCreate('ajablonska'+ randomNumber1.toString() +'@test.pl');
    loginPage.clickCreateAccountBtn();
    basePage.getPageTitle('Create an account');
    createAccount.setGender();
    createAccount.setFirstName('Anna');
    createAccount.setLastName('Jablonska');
    createAccount.setPassword('Password1!');
    createAccount.setDayOfBirth('1');
    createAccount.setMonthOfBirth('April');
    createAccount.setYearOfBirth('2005');
    createAccount.setCompany('Netguru')
    createAccount.setAddressLine1('Sloneczna');
    createAccount.setAddressLine2('2');
    createAccount.setCity('Wroclaw');
    createAccount.setState();
    createAccount.setPostalCode('50439');
    createAccount.setAdditionalInfo('Test information')
    createAccount.setHomePhone('07001212')
    createAccount.setMobilePhone('111222333');
    createAccount.setAliasAddress('My home');
    createAccount.clickRegisterBtn();
    basePage.getPageTitle('My account');

    })

    it('Im able to create a new user by filling out ONLY mandatory fields', () => {​​​​​

        let randomNumber2 = Utils.generateString(3)

    loginPage.setEmailCreate('ajablonska'+ randomNumber2.toString() +'@test.pl');
    loginPage.clickCreateAccountBtn();
    basePage.getPageTitle('Create an account');
    createAccount.setFirstName('Anna');
    createAccount.setLastName('Jablonska');
    createAccount.setPassword('Password1!');
    createAccount.setAddressLine1('Sloneczna');
    createAccount.setCity('Wroclaw');
    createAccount.setState();
    createAccount.setPostalCode('50439');
    createAccount.setMobilePhone('111222333');
    createAccount.clickRegisterBtn();
    basePage.getPageTitle('My account');
    
    })

    it('Im not able to create a new user with wrong data', () => {​​​​​

        let randomNumber2 = Utils.generateString(3)

    loginPage.setEmailCreate('ajablonska'+ randomNumber2.toString() +'@test.pl');
    loginPage.clickCreateAccountBtn();
    basePage.getPageTitle('Create an account');
    createAccount.setFirstName('Anna');
    createAccount.setLastName('Jablonska');
    createAccount.setPassword('1');
    createAccount.setAddressLine1('Sloneczna');
    createAccount.setCity('Wroclaw');
    createAccount.setState();
    createAccount.setPostalCode('50439');
    createAccount.setMobilePhone('111222333');
    createAccount.clickRegisterBtn();
    basePage.getValidationError('There is 1 error');
    
    })

    it('Im not able to create a new user If the email is already registered', () => {​​​​​

    loginPage.setEmailCreate('ajablonska'+ randomNumber1.toString() +'@test.pl');
    loginPage.clickCreateAccountBtn();
    basePage.getAlertMessage('An account using this email address has already been registered. Please enter a valid password or request a new one.');
    
    })

})