import { FormOnboarding } from "../support/pages/onboarding_part1.cy"
import { qase } from 'cypress-qase-reporter/mocha'


let formOnboarding = new FormOnboarding()

before(() => {

    cy.clearCookies();
    cy.clearLocalStorage();
    // formOnboarding.navigateform()
    cy.visiturl()
    
})

describe('Validation Section 0', { testIsolation: false }, () => {

    it('Input Teks Singkat', () => {
        formOnboarding.inputTeksSingkat1("Testing Onboarding input teks singkat")
    })

    it('Input Teks Panjang',() => {
        formOnboarding.inputTeksPanjang1("Testing onboarding input teks panjang")
    })
    
    it('Input Angka',() => {
        formOnboarding.inputAngka1("1000")
    })

    it('Klik Button Selanjutnya',() => {
        
        formOnboarding.klikButtonSelanjutnya1()
        cy.wait(1000)
        cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul') //asertion
    })
})

describe('Validasi Section 1', { testIsolation: false }, () => {

    it('Klik Radio Button Pilihan Ganda',() => {
        const selectedValue = 'pilihan 2';
        formOnboarding.klikrbtnPilihanGanda1(selectedValue)
    })

    it('Klik Checkbox Kotak Centang',() => {
        const selectedValue = 'pilihan 2';
        formOnboarding.klikcbKotakCentang1(selectedValue)
    })

    it('Pilih Dropdown Lokasi',() => {
        formOnboarding.selectDdLokasi1('kota bandung')
    })

    it('Klik Button Selanjutnya',() => {
        
        formOnboarding.klikButtonSelanjutnya1()
        cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 2') //asertion
    })
})

describe('Validasi Section 2', { testIsolation: false }, () => {
    it('Input Phone Number',() => {
        formOnboarding.inputPhoneNumber1("8123456789")
    })

    it('Input Alamat',() => {
        
        formOnboarding.inputAlamat1("Quia aute consequat")
    })

    it('Pilih Dropdown Provinsi',() => {
        
        formOnboarding.selectDdProvinsi1('jawa barat')
    })

    it('Pilih Dropdown kabupaten/Kota',() => {
        
        formOnboarding.selectDdKota1('kota bandung')
    })

    it('Pilih Dropdown Kecamatan',() => {
        
        formOnboarding.selectDdKecamatan1('regol')
    })

    it('Pilih Dropdown Kelurahan',() => {
        
        formOnboarding.selectDdKelurahan1('pasirluyu')
    })

    it('Pilih Dropdown Kode Pos',() => {
        
        formOnboarding.selectDdKodePos1('40254')
    })

    it('Input Email',() => {
        
        formOnboarding.inputEmail1("test@test.com")
    })

    it('Klik Button Selanjutnya',() => {
        
        formOnboarding.klikButtonSelanjutnya1()
        cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 3') //asertion
    })
})

describe('Validasi Section 3', { testIsolation: false }, () => {
    it('Pilih Skala',() => {
        
        formOnboarding.selectrbtnSkala1()
    })

    qase([6152],
        it('Cek validasi upload file ketika size file melebihi size yang sudah ditentukan di pembatasan size upload',() => {
            const filePath = 'file_example_MP4_1280_10MG.mp4' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImageFailed1(filePath)
        })
    )

    qase([6156],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar JPG pada komponen Unggah',() => {
            const filePath = 'file_example_JPG_100kB.jpg' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImage1(filePath)
            formOnboarding.HapusImage1()
        })
    )

    qase([6157],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar PNG pada komponen Unggah',() => {
            const filePath = 'maling.png' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImage1(filePath)
            formOnboarding.HapusImage1()
        })
    )

    qase([6164],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar CSV pada komponen Unggah',() => {
            const filePath = 'file_example_CSV_5000.csv' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImageFailed1(filePath)
        })
    )

    qase([6165],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar XLS pada komponen Unggah',() => {
            const filePath = 'file_example_XLS_10.xls' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImageFailed1(filePath)
        })
    )
    
    qase([6166],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar PPTX pada komponen Unggah',() => {
            const filePath = 'file_example_PPT_250kB.ppt' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImageFailed1(filePath)
        })
    )

    qase([6168],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar ZIP pada komponen Unggah',() => {
            const filePath = 'zip_2MB.zip' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImageFailed1(filePath)
        })
    )
    qase([6162],
        it('Cek fungsi batasi format berkas Berdasarkan Gambar PDF pada komponen Unggah',() => {
            const filePath = 'file-sample_150kB.pdf' // Lokasi gambar di folder cypress/fixtures
            formOnboarding.unggahImage1(filePath)
            formOnboarding.HapusImage1()
        })
    )

    it('Klik Button Selanjutnya',() => {  
        formOnboarding.klikButtonSelanjutnya1()
        cy.get(formOnboarding.getBody1).should('contain.text', 'Bagian Tanpa Judul - 4') //asertion
    })
})

describe('Validasi Section 4', { testIsolation: false }, () => {
    it('Input Field Tanggal',() => {
        
        formOnboarding.inputTanggal1('23')
    })

    it('Input Field Tautan',() => {
        
        formOnboarding.inputTautan1('facebook.com')
    })

    it('Input Field Waktu',() => {
        
        formOnboarding.inputWaktu1('12:24')
    })

    it('Klik Button Kirim',() => {
        formOnboarding.klikButtonKirim1()
        cy.get(formOnboarding.getBody1).should('contain.text', 'Terima kasih!') //asertion
    })
})