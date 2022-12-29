import { expect } from 'chai';
import { splitToLines } from "../../src/utils"

const steps = {
    greetings: 1,
    introduction: 2,
    color: 3,
    parameters: 4,
    finish: 5,
    extra: 6
}

export function generateTests(hw) {
    const CONFIG = hw.config
    CONFIG.hints = 'on'

    CONFIG.isStep(steps.greetings) && describe('ნაძვის ხე', () => {
        it(`საახალწლოდ პატარა და მარტივი დავალება გექნება. შარშან სემინარებზე დრო გვგქონდა, რომ 
        ეს ფუნქციები გაგვერჩია და წელს ვერ ვასწრებთ, მაგრამ ახსნის გარეშეც `)

    })


    CONFIG.isStep(steps.introduction) && describe('შესავალი', () => {
        it(`სემინარზე განვიხილეთ პროგრამირების ენაში ბიბლიოთეკების მნიშვნელობა. მათი მაგალითები:
         anime.js ანიმაციებისთვის და two.js გეომეტრიული ფიგურებისთვის. ამ დავალებისთვის ეს ორი ბიბლიოთეკა გავაერთიანე 
         და ახალი mini "ინტერფეისი" შევქმენი - animation.js . ჩათვალე, რომ საახალწლო ნაძვის ხის გასაკეთებელი ბიბლიოთეკაა. 
        ამ ფაილის კოდში ჩახედვა არაა საჭირო. ბიბლიოთეკის გამოყენების მაგალითი tree.js  ფაილშია და 
        მთავარ ფუნქციებს მე გაგაცნობ.`)
        it(`იმისთვის, რომ იმუშაოს, html ფაილში animation.js სკრიპტ თეგის  ჩამატების შემდეგ (რაც უკვე გავაკეთე) 
        საკუთარ javascript ფაილში (tree.js) ორი ფუნქციაა აუცილებელი. მთავარი არის ფუნქცია, რომელსაც უნდა ერქვას 
        makeChristmasTree. ახლა ხედავ, რომ გვერდზე არაფერი ჩანს.`)
        it(`გახსენი tree.js ფაილი და პირველი ხაზებს კომენტარის // სიმბოლოები წაუშალე. გადატვირთვის შემდეგ
        ბიბლიოთეკა ფუნქციას იპოვის და თავისით გამოიძახებს (ისევე, როგორც, მაგალითად, start() ფუნქციას იძახებს კარელი)`, () => {
            expect(window.makeChristmasTree).to.not.be.an('undefined')
        })
        it(`შემდეგი ფუნქცია createConfig() კონფიგურაციას ქმნის, რომელსაც ფაილის დანარჩენი ფუნქციები იყენებენ, განსხვავებული პარამეტრების დინამიურად წასაკითხად. 
        ამ ფუნქციების წაკითხვა/გაგება არაა საჭირო, თუმცა, თუ დაინტერესდები, რამდენიმეგან კომენტარები მაქვს მიწერილი ახსნებით`)
    })

    CONFIG.isStep(steps.color) && describe('ფერის შეცვლა', () => {
        it(`ჩემს მიერ შექმნილი ნაძვის ხე ორი ნაწილისგან შედგება - თვითონ ხე (სამკუთხედები) და ნათურები (წრეები). დავიწყოთ სამკუთხედებით`)
        it(`ახლა ისე ჩანს, თითქოს მხოლოდ ერთი სამკუთხედია. სინამდვილეში, ორი ცალია, ერთ ადგილას. ფაილის ფუნქციებში ვიყენებ ცვლადს კონფიგურაციიდან, ისე, რომ ყოველი მომდევნო სამკუთხედი yOffset მნიშვნელობით იქნება დაშორებული წინას. ახლა ეს ცვლადი 0-ის ტოლია, შეცვალე და გადატვირთე გვერდი`)
        check(`yOffset`, 30, 40)
        const studentConfig = createConfig()

        it(`rgb მნიშვნელობები გახსოვს? ახლა trunkStartingColor-ის სამივე მნიშვენლობა red blue green ერთი და იგივეა - (50, 50, 50). ერთნაირი rgb მნიშვნელობები ნიშნავს, რომ ფერი იქნება შავი, თეთრი ან ნაცრისფერი. რომელიმე მათგანს თუ უფრო გავზრდით,   ვიდრე დანარჩენებს, ის კონკრეტული ფერი გამოიკვეთება. აუცილებელი არაა ნაძვის ხე მწვანე იყოს, შენ რომელი ფერიც უფრო მოგწონს, ისეთი შექმენი. მთავარია სამივე მნიშვენლობა ერთმანეთის ტოლი არ იყოს`, () => {
            const colors = studentConfig.trunkStartingColor
            expect(colors.red).to.not.equal(colors.green)
            expect(colors.green).to.not.equal(colors.blue)
            expect(colors.red).to.not.equal(colors.blue)
        })
        
    })

    CONFIG.isStep(steps.parameters) && describe('პარამეტრები', () => {
        const s = createConfig()
        it(`config-ის სხვა პარამეტრები ზედმეტი ახსნების გარეშე შევცვალოთ
            - კოდში მოკლე კომენტარებით წერია აღწერა და მეტი თუ გაინტერესებს, შეგიძლია
            ფაილის დანარჩენ ფუნქციებს გადახედო `)
        it(`თითოეულს მინიმალური/მაქსიმალური დასაშვები მნიშვნელობა ასევე კომენტარად უწერია`)
        check(`triangleCount`, 3, 6)
        check(`startingRadius`, 80, 120)
        check(`radiusOffset`, 5, 15)
        check(`startingY`, -200, -50)
        it(`trunkGradation`, () => {
            const studentConfig = createConfig()
            expect(studentConfig.trunkGradation).to.not.equal(0)
            checkBounds(studentConfig.trunkGradation, -50, 50)

        })
        it(`lightColors`, () => {
            checkBounds(s.lightColors.length, 3, 4)
            for (let l of s.lightColors) {
                expect(l).to.not.equal('#222222')
            }
        })
        it(`topLightColor`, () => {
            expect(s.topLightColor).to.not.equal('#222222')
        })
        
    })

    CONFIG.isStep(steps.finish) && describe('🌲🎄🤶🏼', () => {
        const s = createConfig()
        displayMessage()
        it(`message-ის ტექსტიც შეცვალე და სულ ეს არის. დავალება ჩვეულებრივ ატვირთე`, () => {
            expect(s.message).to.not.equal('ბედნიერ 2022 წელს')
        })
        it(`დავალება ისევე ატვირთე, როგორც წინა ჯერზე.`)
        it(`თუ მეტი დროის დათმობა გინდა
        ამ ანიმაციისთვის, რამდენიმე რჩევა შემდეგ გვერდზეა.`)
    })

    CONFIG.isStep(steps.extra) && describe('დამატებით', () => {
         it(`მიხარია, თუ ვინმეს მეტის სწავლა უნდა. ამჯერად, გირჩევ animation.js ფაილი გადმოიწერო
            და github.io თეგის მაგივრად ლოკალური ჩაამატო, რის შემდეგაც შეძლებ ცვლილებები შეიტანო და რაღაცეები დაწერო.
            იგივე რჩევა იქნებოდა tree.js-ის დანარჩენ ნაწილზეც. თუ თვლი, რომ საინტერესო ცვლილებას შეიტან კოდში, 
            გამომიგზავნე შენი ვერსია. თუ რამდენიმე მსურველი იქნება, სიხარულით ჩავატარებთ დამატებით კონსულტაციას 
            მეტი ფუნქციების განსახილველად.`)
         it(`გამოყენებული ბიბლიოთეკების მეტი ფუნქციებისთვის ეწვიე მათ გვერდებს - animejs.com და two.js.org`)
    })

}

function check(parameter, a, b) {
    it(parameter, () => {
        const s = createConfig()
        checkBounds(s[parameter], a, b)
    })
}
function checkBounds(n, a, b) {
    expect(n).to.be.above(a - 1.5)
    expect(n).to.be.below(b + 1.5)
}   