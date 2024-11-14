import { FormOnboarding } from "../support/pages/onboarding_part1.cy"
import { qase } from 'cypress-qase-reporter/mocha'

let formOnboarding = new FormOnboarding()

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

describe('Form Submission Tests on Different Mobile Dimensions', { testIsolation: false }, () => {
    const dimensions = [
        { device: 'iPhone 5', width: 320, height: 568 },
        { device: 'iPhone 6', width: 375, height: 667 },
        { device: 'iPhone X', width: 375, height: 812 },
        { device: 'Samsung Galaxy S9', width: 360, height: 740 },
    ]

    dimensions.forEach((dimension) => {
        it(`should work correctly on ${dimension.device}`, () => {
            // Set the viewport for the current dimension
            cy.clearCookies();
            cy.clearLocalStorage();
            cy.viewport(dimension.width, dimension.height);
        
            // Visit the page with the form
            cy.visiturl()  

            context('Input Teks Singkat', () => {
                formOnboarding.inputTeksSingkat1("Testing Onboarding input teks singkat")
            })

            context('Input Teks Panjang',() => {
                formOnboarding.inputTeksPanjang1("Testing onboarding input teks panjang")
            })

            context('Input Angka',() => {
                formOnboarding.inputAngka1("1000")
            })
            
            context('Klik Button Selanjutnya',() => {
                formOnboarding.klikMobileButtonSelanjutnya1()
                cy.wait(1000)
                cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul') //asertion
            })

            context('Klik Radio Button Pilihan Ganda',() => {
                const selectedValue = 'pilihan 2';
                formOnboarding.klikrbtnPilihanGanda1(selectedValue)
            })

            context('Klik Checkbox Kotak Centang',() => {
                const selectedValue = 'pilihan 2';
                formOnboarding.klikcbKotakCentang1(selectedValue)
            })

            context('Pilih Dropdown Lokasi',() => {
                formOnboarding.selectDdLokasi1('kota bandung')
            })

            context('Klik Button Selanjutnya',() => {
                formOnboarding.klikMobileButtonSelanjutnya1()
                cy.wait(1000)
                cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 2') //asertion
            })

            context('Input Phone Number',() => {
                formOnboarding.inputPhoneNumber1("8123456789")
            })

            context('Klik Button Selanjutnya',() => {
                formOnboarding.klikMobileButtonSelanjutnya1()
                cy.wait(1000)
                cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 3') //asertion
            })

            context('Klik Button Selanjutnya',() => {
                formOnboarding.klikMobileButtonSelanjutnya1()
                cy.wait(1000)
                cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 4') //asertion
            })

            it('Klik Button Kirim',() => {
                formOnboarding.klikMobileButtonKirim1()
                cy.get(formOnboarding.getBody1).should('contain.text', 'Terima kasih!') //asertion
            })


        })
    
    })
})
