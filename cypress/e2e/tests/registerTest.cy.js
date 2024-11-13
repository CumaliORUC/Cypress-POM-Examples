import { registerPage } from "../../pages/registerPage"
import testData from '../../fixtures/testData.json'

const registerpage=new registerPage()

describe("Register with POM",()=>{

    it('Register', ()=>{
     registerpage.gotoUrl()
     registerpage.enterFirstName(testData.firstName)
     registerpage.enterlastName(testData.lastName)
     registerpage.enterEmail()
     registerpage.enterphoneNumber(testData.phoneNumber)
     registerpage.enterPassword(testData.password)
     registerpage.confirmPassword(testData.password)
     registerpage.checkedBox()
     registerpage.continueButton()
     registerpage.isAccountCreated()
    
    })
})