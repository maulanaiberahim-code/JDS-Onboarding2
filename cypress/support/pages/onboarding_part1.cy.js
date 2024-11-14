import onboarding_part1, { rbtnPilihan0 } from "../selectors/onboarding_part1.js"
import onboardingPart1 from "../selectors/onboarding_part1.js"

export class FormOnboarding {
    // Visit URL
    navigateform() {
        cy.log(Cypress.env('base_url'))
        cy.visit(Cypress.env('base_url'))
    }

    //Body
    getBody1(){
            onboardingPart1.body0
    }
    // Teks Singkat
    inputTeksSingkat1(dataTeksSingkat1) {
        const fieldTeksSingkat1 = cy.get(onboardingPart1.fieldTeksSingkat0).as('fieldTeksSingkat1')
        fieldTeksSingkat1.should('be.visible')
        .type(dataTeksSingkat1)
        .should('have.value', dataTeksSingkat1) //asertion
    }

    // Teks Panjang
    inputTeksPanjang1(dataTeksPanjang1) {
        const fieldTeksPanjang1 = cy.get(onboardingPart1.fieldTeksPanjang0).as('fieldTeksPanjang1')
        fieldTeksPanjang1.should('be.visible')
        .type(dataTeksPanjang1)
        .should('have.value', dataTeksPanjang1) //asertion
    }

    // Angka
    inputAngka1(dataAngka1) {
        const fieldAngka1 = cy.get(onboardingPart1.fieldAngka0).as('fieldAngka1')
        fieldAngka1.should('be.visible')
        .type(dataAngka1)
        .should('have.value', dataAngka1) //asertion
    }

    // Button Selanjutnya
    klikButtonSelanjutnya1() {
        const buttonSelanjutnya1 = cy.xpath(onboardingPart1.buttonSelanjutnya0).as('buttonSelanjutnya1')
        buttonSelanjutnya1.should('be.visible')
        buttonSelanjutnya1.should('contain.text', 'Selanjutnya')
        .click()
    }
    // Button Selanjutnya (MOBILE)
    klikMobileButtonSelanjutnya1() {
        const mobileButtonSelanjutnya1 = cy.xpath(onboardingPart1.MobilebuttonSelanjutnya0).as('buttonSelanjutnya1')
        mobileButtonSelanjutnya1.should('be.visible')
        mobileButtonSelanjutnya1.should('contain.text', 'Selanjutnya')
        .click()
    }

    // Radio Button
    klikrbtnPilihanGanda1(value){
        const rbtnPilihanGanda1 = cy.get(onboardingPart1.rbtnPilihanGanda0 + `[value="${value}"]`).as('rbtnPilihanGanda1')
        rbtnPilihanGanda1.click()

        // Pastikan atribut 'data-state' dari radio button memiliki nilai 'checked'
        .then((radioButton) => {
            expect(radioButton).to.have.attr('data-state', 'checked');
          }) 
    }

    // Checkbox
    klikcbKotakCentang1(value){
        const cbKotakCentang1 = cy.get(onboardingPart1.cbKotakCentang0 + `[value="${value}"]`).as('cbKotakCentang1')
        cbKotakCentang1.click()

        // Pastikan atribut 'data-state' dari Checkbox memiliki nilai 'checked'
        .then((checkboxButton) => {
            expect(checkboxButton).to.have.attr('data-state', 'checked');
          }) 
    }

    // Pilih Lokasi
    selectDdLokasi1(dataDdLokasi1){
        const ddLokasi1 = cy.xpath(onboardingPart1.ddLokasi0).as('ddLokasi1')
        ddLokasi1.should('be.visible')
        .click()
        cy.contains(dataDdLokasi1, { matchCase: false }).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataDdLokasi1) // Assert case-insensitive
          })
        
    }

    // Input Phone Number
    inputPhoneNumber1(dataPhoneNumber1){
        const fieldPhonNumber1 = cy.get(onboardingPart1.fieldPhoneNumber0).as('fieldPhoneNumber1')
        fieldPhonNumber1.should('be.visible')
        .type(dataPhoneNumber1)

        //asertion
        .invoke('val') // Ambil nilai input saat ini
        .then((PhoneNumber1) => {
          const phoneWithoutHyphen = PhoneNumber1.replace(/-/g, ''); // Hilangkan semua hyphen
          expect(phoneWithoutHyphen).to.equal(dataPhoneNumber1); // Verifikasi bahwa nilai tanpa hyphen sesuai dengan yang diharapkan
        });
    }

    // Input Alamat
    inputAlamat1(dataAlamat1){
        const textareAlamat1 = cy.get(onboardingPart1.textareaAlamat0).as('textareaAlamat1')
        textareAlamat1.should('be.visible')
        .type(dataAlamat1)
        .should('have.value', dataAlamat1)
    }

    // Pilih Dropdown Provinsi
    selectDdProvinsi1(dataProvinsi1){
        const ddProvinsi1 = cy.get(onboardingPart1.ddProvinsi0).as('ddProvinsi1')
        ddProvinsi1.should('be.visible')
        .click()
        cy.contains(dataProvinsi1, { matchCase: false }).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataProvinsi1) // Assert case-insensitive
          })
    }

    // Pilih Dropdown Kabupaten/Kota
    selectDdKota1(dataKota1){
        const ddKota1 = cy.get(onboardingPart1.ddKota0).as('ddKota1')
        ddKota1.should('be.visible')
        .click()
        cy.contains(dataKota1, { matchCase: false }).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataKota1) // Assert case-insensitive
          })

    }

    // Pilih Dropdown Kecamatan
    selectDdKecamatan1(dataKecamatan1){
        const ddKecamatan1 = cy.get(onboardingPart1.ddKecamatan0).as('ddKecamatan1')
        ddKecamatan1.should('be.visible')
        .click()
        cy.contains(dataKecamatan1, { matchCase: false }).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataKecamatan1) // Assert case-insensitive
          })
    }

    // Pilih Dropdown Kelurahan
    selectDdKelurahan1(dataKelurahan1){
        const ddKelurahan1 = cy.get(onboardingPart1.ddKelurahan0).as('ddKelurahan1')
        ddKelurahan1.should('be.visible')
        .click()
        cy.contains(dataKelurahan1, { matchCase: false }).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataKelurahan1) // Assert case-insensitive
          })
    }

    // Pilih Dropdown KodePos
    selectDdKodePos1(dataKodePos1){
        const ddKodePos1 = cy.get(onboardingPart1.ddKodePos0).as('ddKodePos1')
        ddKodePos1.should('be.visible')
        .click()
        cy.contains(dataKodePos1).click()
        
        //assertion
        .invoke('text')
        .then((selectedText) => {
            expect(selectedText.toLowerCase()).to.contain(dataKodePos1) // Assert case-insensitive
          })
    }

    // Input Email
    inputEmail1(dataEmail1) {
        const fieldEmail1 = cy.get(onboardingPart1.fieldEmail0).as('fieldEmail1')
        fieldEmail1.should('be.visible')
        .type(dataEmail1)
        .should('have.value', dataEmail1)
    }

    // Select Radio Btn Skala
    selectrbtnSkala1() {
        const rbtnSkala1 = cy.get(onboardingPart1.rbtnSkala0).as('rbtnSkala1')
        rbtnSkala1.should('be.visible')
        .click()
        //belum ada assertion
    }

    // Unggah Image Valid
    unggahImage1(filePath) {
        const fieldUnggahImage1 = cy.get(onboardingPart1.fieldUnggahImage0).as('fieldUnggahImage1')
        // fieldUnggahImage1.should('not.be.visible')
        .attachFile(filePath)
        cy.wait(1000)
        cy.get('body').should('contain.text', 'Berhasil diunggah')
    }

    // Unggah Image Failed
    unggahImageFailed1(filePath) {
        const fieldUnggahImage1 = cy.get(onboardingPart1.fieldUnggahImage0).as('fieldUnggahImage1')
        // fieldUnggahImage1.should('not.be.visible')
        .attachFile(filePath)
        cy.wait(3000)
        // cy.get('body').should('have.text', 'File type must be image/*,.jpeg,.png,.jpg,.webp,application/pdf,.pdf')
    }

    // Hapus Image Valid
    HapusImage1() {
        const iconHapusUngahan1 = cy.get(onboardingPart1.iconHapusUngahan0).as('iconHapusUngahan1')
        iconHapusUngahan1.click()
        cy.wait(1000)
    }


    // Input Tanggal
    inputTanggal1(dataTanggal1) {

        const fieldTanggal1 = cy.contains(onboardingPart1.fieldTanggal0).first().as('fieldTanggal1')
        fieldTanggal1.should('be.visible')
        .click() //Klik Field tanggal

        // cy.get($nama_element).eq(0)
        // // angka pada .eq() bisa disesuaikan dengan kebutuhan function dan element keberapa ke berapa untuk eksekusi element tersebut
        
        const fieldTanggalHari1 = cy.get(onboardingPart1.fieldTanggalHari0).as('fieldTanggalHari1')
        fieldTanggalHari1.contains(dataTanggal1).click() //Klik spesifik tanggal

        //assertion
        fieldTanggal1.invoke('text')
        .then((selectedText) => {
            expect(selectedText).to.contain(dataTanggal1) // Assert case-insensitive
          })
        
    }

    // Input Tautan
    inputTautan1(dataTautan1) {
        const fieldTautan1 = cy.get(onboardingPart1.fieldTautan0).as('fieldTautan1')
        fieldTautan1.should('be.visible')
        .type(dataTautan1)
        .should('have.value', dataTautan1)
    }

    // Input Waktu
    inputWaktu1(dataWaktu1) {
        const fieldWaktu1 = cy.get(onboardingPart1.fieldWaktu0).as('fieldWaktu1')
        fieldWaktu1.should('be.visible')
        .click()
        .type(dataWaktu1)
        //belum ada assertion
    }

    // Button Kirim
    klikButtonKirim1() {
        const buttonKirim1 = cy.contains(onboardingPart1.buttonKirim0).as('buttonKirim1')
        .click({force: true})

        // cy.contains('Kirim').click({force: true})
        // .should('contains', 'Tanggapan Anda sudah terkirim.')
    }

    // Button Selanjutnya (MOBILE)
    klikMobileButtonKirim1() {
        const mobileButtonKirim1 = cy.xpath(onboardingPart1.MobilebuttonKirim0).as('buttonSelanjutnya1')
        mobileButtonKirim1.should('be.visible')
        mobileButtonKirim1.should('contain.text', 'Selanjutnya')
        .click()
    }
}