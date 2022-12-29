import {toggle} from '../../src/utils'
import {showMessage} from '../../src/HwInstructions'
import {splitToLines} from '../../src/utils'

import flyingBookGif from 'url:../static/book.gif'
const steps = {
    introduction: 1,
    about_javascript: 2,
    first_line: 3,
    function_arguments: 4,
    variables: 5,
    where_were_we: 6,
    toothpick: 7,
    almost_there: 8,
    loop: 9,
    final: 10,
    goodbye: 11
}

export function generateTests(CONFIG) {
    CONFIG.hints = true
    CONFIG.isStep(steps.introduction) && describe("1. შესავალი", () => {
        it('გამარჯობა! დღევანდელი სავარჯიშოთი ძალიან იხალისებ და ბევრ ახალს გაიგებ. სანამ პროგრამირების შესავალს გავივლიდეთ, შეგიძლია იფიქრო, როგორ შეიძლება დიდი ტექსტისთვის ფორმატის შეცვლა ისე, რომ ზომაში შემცირდეს მაგრამ ინფორმაცია არ დაკარგოს. ამ პროცესს ენკოდირება ეწოდება. საორიენტაციო ნაბიჯების შემდეგ ისევ მოვუბრუნდებით ამ ამოცანას და ნაბიჯ-ნაბიჯ მოგცემ მინიშნებებს.')
    })

    CONFIG.isStep(steps.about_javascript) && describe("2. რა არის ჯავასკრიპტი", () => {
        toggle('help')
        showMessage('კონსოლის-გახსნა')
        it(`საიტები (მათ შორის ესეც), გაგონილი გექნება, რომ კოდითაა დაწერილი. ეს კოდი შენს ბრაუზერს ესმის - იგი კონკრეტული მისამართიდან (მაგალითად google.com) მოსულ ფაილებს კითხულობს, იგებს რომელი ელემენტი სად იყოს, როგორ გამოიყურებოდეს, ღილაკზე დაჭერისას რა მოხდეს და ა.შ. `)
        it(`ფუნქციონალის განსასაზღვრად პროგრამირების ენა ჯავასკრიპტი გამოიყენება. საიტის კოდის გარდა, ბრაუზერისთვის ჯავასკრიპტის ბრძანებების გაგზავნა პირდაპირაც შეიძლება. ეს იმაზე მარტივია, ვიდრე წარმოგიდგენია - შემდეგ გვერდზე უკვე გააკეთებ. ახლა უბრალოდ ბრძანებების შესაყვანი სპეციალური ფანჯარა, console, გავხსნათ. ქვემოთ გამოვაჩენ ინსტრუქციას. მომავალში თავიდან გახსნისას ამ ინსტრუქციის გახსენება თუ დაგჭირდა, დააჭირე დახმარების ღილაკს.`)
    })

    CONFIG.isStep(steps.first_line) && describe("3. ჩემი პირველი კოდი", () => {
        toggle('help')
        showMessage('კონსოლის-გამოყენება')
        it(`პროგრამირების ენის ბირთვული კომპონენტი არის განსაზღვრული სინტაქსით სხვადასხვა ფუნქციების გამოძახება და შექმნა. ჯავასკრიპტში, ფუნქციის სახელი შედგება ლათინური და რიცხვითი სიმბოლოებისგან. ფუნქციის გამოძახების სინტაქსი კი ასეთია - დაწერე სახელი და მიუწერე ( ). ჯავასკრიპტის ფუნქციის გამოძახება ბრაუზერის კონსოლიდანაც შეგვიძლია. მისი მუშაობის პრინციპი მარტივია: შენ შეგყავს კოდი და ის აბრუნებს პასუხს, ან ასრულებს დავალებას. მაგალითისთვის, სცადე მომხმარებლისთვის შეტყობინების გაგზავნის ფუნქცია.`)
        it('> alert()')
        it(`მისი გამოძახების შემდეგ პატარა ფანჯარა გამოჩნდება, დახურე იგი და შემდეგ გვერდზე ავტომატურად გადახვალ.`, () => {
            const oldAlert = window.alert
            window.alert = function () {
                oldAlert()
                CONFIG.currentStep++
                CONFIG.save()
                window.location.reload()
            }
            this.fail()
        })

    })

    CONFIG.isStep(steps.function_arguments) && describe('4. ფუნქციის არგუმენტი', () => {
        it(`შეტყობინება ცარიელი მესიჯით არც ისე სახალისოა. კარგი იქნებოდა, ამ ფანჯრისთვის რამე ტექსტის გადაცემა რომ შეგვეძლოს, არა? ჯავასკრიპტში ტექსტი \`""\` სიმბოლოებით არის შემოფარგლული, რომ უბრალო ტექსტი და პროგრამის კოდი ერთმანეთისგან გარჩევადი იყოს. იმისთვის, რომ ეს ტექსტი ფუნქციას “გადავაწოდოთ”, მის არგუმენტად უნდა დავამატოთ. ის \`()\` სიმბოლოები, ფუნქციის სახელის შემდეგ, სწორედ არგუმენტების განსასაზღვრად არის.`)
        it(`> alert(“გამარჯობა, ია”)`, () => {
            const oldAlert = window.alert
            window.alert = function (text) {
                if (!text || text.length < 1) {
                    console.error('ტექსტი არ შეგიყვანია! თავიდან სცადე')
                } else if (!text.startsWith('გამარჯობა')) {
                    console.error('ტექსტი გამარჯობით დაიწყე, თავაზიანად ვესაუბროთ საკუთარ თავს')
                } else if (text.length < 'გამარჯობა '.length + 2) {
                    console.error('და შენი სახელი?')
                } else {
                        oldAlert(text)
                        CONFIG.currentStep++
                        CONFIG.save()
                        window.location.reload()
                }
            }
            this.fail()
        })
        it('თუ კონსოლმა ReferenceError დაგიწერა, ე.ი. ტექსტის ბრჭყალებით შემოფარგვლა დაგავიწყდა')
    })

    CONFIG.isStep(steps.variables) && describe('5. ცვლადი', () => {
        it(`მხოლოდ ფუნქციები, მონაცემების გარეშე გამოუსედაგარი იქნებოდა. ამიტომ პროგრამირების ენის კიდევ ერთი ცენტრალური ნაწილი ცვლადებია - სხვადასხვა მნიშვნელობების შექმნა, შეცვლა და მათი წაკითხვა საჭირო დროს. მაგალითად, კოდში გვჭირდება დავიმახსოვროთ მომხმარებლის სახელი.`)
        it(`ახალი ცვლადის შექმნის სინტაქსი ასეთია:`)
        it(`> var myName = “ამ ტექსტის მაგივრად ჩაწერე შენი სახელი”`)
        it(`ახლა, ცვლადის სახელს თუ შეიყვან, კონსოლში მისი მნიშვნელობა გამოჩნდება. დაიმახსოვრე, ჯავასკრიპტი case sensitive არის - myName და myname სხვადასხვა სიტყვებია. არ გამოგრჩეს ხოლმე სიმბოლოს case (uppercase - N, lowercase - n).`)
        it(`> myName`)
        it(`შეგიძლია სხვა ტექსტსაც “მიაკერო”`)
        it(`> “გამარჯობა, “ + myName`)
        it(`და ეს მნიშვნელობა სხვა ცვლადში შეინახო`)
        it(`> var greeting = “გამარჯობა, “ + myName`)
        it(`თუ ცვლადს ფუნქციას გადააწვდი, ისიც შეძლებს მნიშვნელობის წაკითხვას`)
        it(`> alert(myName)`)
    })

    CONFIG.isStep(steps.where_were_we) && describe("6. სად ვიყავით?", () => {
        it(`რამდენიმე ხაზში უკვე დიდი პროგრესი გაქვს!   მაგრამ რაღაც უნდა გაგვეკეთებინა კბილის ჩხირზე, გახსოვს? როგორც შეგპირდი, ამოცანას ნაბიჯ-ნაბიჯ ამოვხსნით. ენციკლოპედიის მაგივრად უბრალო წინადადებაზე გავაკეთოთ - მხოლოდ ინგლისური ანბანი, სასვენი ნიშნების გარეშე. დასრულების შემდეგ, ამოხსნის იდეურ გავრცობას წინადადებიდან წიგნამდე შენ მოგანდობ.`)

        it(`პირველი ნაბიჯი: ტექსტში თითოეული სიმბოლო რიცხვად უნდა გადავაქციოთ.`)

        it(`ა-ჰ: 01-33, space: 34`)

        it(`ეს ფუნქცია, letterToNumber, უკვე შევქმენი. სცადე გამოძახება.`)
        
        it(`> letterToNumber(‘ა’)`)

        it(`ფუნქცია ციფრებს აბრუნებს, თუმცა ტექსტური ფორმით. რატომ? ჩვენ მიღებული სიმბოლოების 'მიკერება' დაგვჭირდება და არა შეკრება. სცადე ორი სიმბოლოს რიცხვითი მნიშვნელობების შეერთება.`)

        it(`> letterToNumber('ი') + letterToNumber('ა') `)
    })

    CONFIG.isStep(steps.toothpick) && describe("7. კბილის ჩხირი", () => {
        it(`სიმართლე გითხრა, მთლიანი ამოხსნის გამოცნობა, მიმდევრობით, საკმაოდ რთული მგონია. ამიტომ ასე გადავწყვიტე - ახლა მის ბოლო ნაბიჯს განახებ, შემდეგ დავუბრუნდებით დანარჩენებს. იქნებ, პროცესში შეძლო დასაწყისის და ბოლოს დაკავშირება.`)

        it(`letterToNumber-ის გარდა, კიდევ ასეთი ფუნქცია გვაქვს - markToothpick - რომელიც იღებს რიცხვს 0-დან 1-მდე და ქვემოთ მოცემულ ხაზზე წითლად მონიშნავს.`)

        it(`> markToothpick(0.1)`)
        it(`> markToothpick(0.2)`)
        displayToothpick()
    })

    CONFIG.isStep(steps.almost_there) && describe("8. Almost there", () => {
        splitToLines(`ახლა ტექსტს დავუბრუნდეთ. ჩვენი მიზანია მისი რიცხვებში ენკოდირება, ანუ თითოეული ასოს რიცხვად გადაქცევა. მაგალითად, შექმენი ეს ცვლადი:

            > var text = “ტექსტი”
            
            ჯავასკრიპტში, ტექსტის კონკრეტული სიმბოლოს წასაკითხად ცვლადის სახელს კვადრატულ ფრჩხილებში უნდა მივუწეროთ შესაბამისი ციფრი - \`text[0]\` არის მისი პირველი სიმბოლო, \`text[1]\` მეორე, და ა.შ. \`text[2]\` გამოტოვებაა, ამიტომ არაფერი დაიბეჭდება.
            
            > text[0]
            > text[1]
            > text[3]
        `)

    })

    CONFIG.isStep(steps.loop) && describe("9. ციკლი", () => {
        splitToLines(`როგორმე, ეს პროცესი ავტომატური უნდა გავხადოთ. ამისთვის პროგრამირების სტრუქტურას, for ციკლს გამოვიყენებთ. იგი ცოტა რთულად გამოიყურება, მაგრამ მუშაობის პრინციპი მარტივია: \`i<\`-ს შემდეგ რა რიცხვსაც დაწერ, ჯავასკრიპტი კოდის ბლოკში დაწერილ ხაზებს იმდენჯერ გაიმეორებს. ბლოკს \`{\` და \`}\` სიმბოლოებით განვსაზღვრავთ. ქვემოთ კოდში “i<“-ს შემდეგ 4 წერია, ამიტომ ბრაუზერი  \`console.log(i)\`-ს ოთხჯერ შეასრულებს. 

        for (var i=0; i<4; i++) {
            console.log(i)
        }
        
        თვითონ ეს ფუნქცია, \`console.log()\`, მარტივია - თუ \`alert()\` გადაცემულ ტექსტს შეტყობინებად გიგდებს, \`console.log()\` მას კონსოლში დაბეჭდავს. კიდევ ერთი, რაც for ციკლის შესახებ უნდა იცოდე - კოდის ბლოკში შეგიძლია გაიგო მერამდენე გამეორებაზეა ციკლი. ეს მნიშვნელობა i ცვლადში არის შენახული. ქვემოთ მოცემული კოდი კონსოლში 0-დან 4-მდე რიცხვებს დაბეჭდავს.
        
        ახლა ერთი ნაბიჯი დავამატოთ. შეეცადე გამოიცნო, რა მოხდება ამ კოდის გაშვებისას, შემდეგ კი კონსოლში შეყვანით გადაამოწმე შედეგი.
        
        var name = "ია"
        for (var i=0; i<2; i++) {
        console.log(name[i])
        }
        
        რა თქმა უნდა, სხვადასხვა ტექსტზე დათვლით არ ვიგებთ სიმბოლოების რაოდენობას. ამისთვის მოსახერხებელი გზა არსებობს - ცვლადის სახელისთვის .length მიწერა. სცადე ლუპში <2-ის ჩანაცვლება <name.length -ით
        
        `)

    })

    CONFIG.isStep(steps.final) && describe("", () => {
        splitToLines(`დავალების შესრულებამდე ეს ნაბიჯები დარჩა:
        1. შექმენი ორი ახალი ცვლადი:
        \t> var book = "ამ წიგნში ყველაფერი წერია"
        \t> var encodedBook = ""
        2. ციკლის დასაწყისში, i\\<-ის შემდეგ რიცხვის მაგივრად ჩავწეროთ \`book.length\`
        \t> for (var i=0; i<book.length; i++) {
        3. ციკლის ყოველ იტერაციაზე, გადავაკონვერტიროთ წიგნის სიმბოლო, მივუწეროთ encodedBook-ს და შედეგი შევინახოთ
        > \`encodedBook = encodedBook + letterToNumber(book[i]\`)
        > }
        4. ციკლი რომ დასრულდება (ანუ }-ის შემდეგ), გამოიყენე კიდევ ერთი დამხმარე ფუნქცია, bigNumberToRatio(), რომელიც იღებს დიდ ციფრულ ტექსტს და გადააქცევს მას 0-დან 1-მდე რიცხვად. ჯერ ისე ტექსტზე დატესტე კონსოლში, რომ აღიქვა როგორ მუშაობს
        > bigNumberToRatio("0534")
        > var toothpickMark = bigNumberToRatio(encodedBook)`)

        displayToothpick()
    })

    CONFIG.isStep(steps.goodbye) && describe("სულ ეს არის?", () => {
        const finalMessage = document.createElement('div')
        const message = document.createElement('div')
        message.style.width = '600px'
        message.style.margin = 'auto'
        message.innerHTML = `<br>
        <p>
        სწავლებისას ამით ვხელმძღვანელობ - მე თუ ინსტრუქციების ტექსტის წერით ვიღლები, სტუდენტი მისი კითხვით, გააზრებით და შესრულებით უკვე საკმარისად გაირჯებოდა. ერთი დღისთვის საკმაოდ ბევრი ინფორმაცია მიიღე, ამიტომ ფუნქციის შექმნა და ფაილში შენახვა სხვა დროს იყოს.        
        </p>`
        const gif = document.createElement('div')
        finalMessage.appendChild(message)
        finalMessage.appendChild(gif)
        gif.style.width = '300px'
        gif.style.margin = 'auto'
        gif.innerHTML = `<img width="300px" src="${flyingBookGif}">`
        const subscribe = document.createElement('div')
        subscribe.innerHTML = mailChimpHtml
        subscribe.style.width = '300px'
        subscribe.style.margin = 'auto'
        finalMessage.appendChild(subscribe)
        document.getElementById('toothpick').insertBefore(finalMessage, document.getElementById('toothpick-line'))

    })




}

window.letterToNumber = function (letter) {
    const georgianAlphabet = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ'
    if (letter === ' ') {
        return "34"
    }
    if (!georgianAlphabet.includes(letter)) {
        throw `ამ სიმბოლოსთვის ენკოდირება არ გვაქვს!`
    }
    return (georgianAlphabet.indexOf(letter) + 1).toString().padStart(2, '0')
}

window.bigNumberToRatio = function (numberInText) {
    return Number("0." + numberInText)
}

function displayToothpick() {
    const toothpickDiv = document.getElementById('toothpick')
    toothpickDiv.innerHTML = `<div id="toothpick-line" style="margin: auto;width:30%; height: 5px;border:1px solid black">
        <div id="toothpick-mark" style="width:0%;height:5px;border-right: 2px solid red;"></div>
    </div>`
}

window.markToothpick = function (ratio) {
    document.getElementById('toothpick-mark').style.width = `${ratio*100}%`
}

const mailChimpHtml = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
<style type="text/css">
\t/* #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;} */
\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
\t.mc-field-group {
\t\tfont-size: 0.8em;
\t}
\t.small-text {
\t\tfont-size: 0.6em;
\t}
</style>
<div id="mc_embed_signup">
\t<form
\t\taction="https://gmail.us13.list-manage.com/subscribe/post?u=1c4bda155b3fed7bcec7bffd4&amp;id=5446f1374e&amp;f_id=003c3fe3f0"
\t\tmethod="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
\t\tnovalidate>
\t\t<div id="mc_embed_signup_scroll">
\t\t\t<h5> გამოიწერე შემდეგი პოსტები <h2>
\t\t\t\t\t<div class="mc-field-group">
\t\t\t\t\t\t<label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
\t\t\t\t\t\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="mc-field-group">
\t\t\t\t\t\t<label for="mce-FNAME"> სახელი <span class="asterisk">*</span>
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>
\t\t\t\t\t\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="mc-field-group">
\t\t\t\t\t\t<label for="mce-LNAME"> გვარი <span class="small-text">(სურვილის შემთხვევაში)</span> </label>
\t\t\t\t\t\t<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
\t\t\t\t\t\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
\t\t\t\t\t</div>
\t\t\t\t\t<div id="mce-responses" class="clear foot">
\t\t\t\t\t\t<div class="response" id="mce-error-response" style="display:none"></div>
\t\t\t\t\t\t<div class="response" id="mce-success-response" style="display:none"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
\t\t\t\t\t<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
\t\t\t\t\t\t\tname="b_1c4bda155b3fed7bcec7bffd4_5446f1374e" tabindex="-1" value=""></div>
\t\t\t\t\t<div class="optionalParent">
\t\t\t\t\t\t<div class="clear foot">
\t\t\t\t\t\t\t<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
\t\t\t\t\t\t\t\tclass="button">
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t</div>
\t</form>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script
\ttype='text/javascript'>(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text'; fnames[3] = 'ADDRESS'; ftypes[3] = 'address'; fnames[4] = 'PHONE'; ftypes[4] = 'phone'; fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday'; }(jQuery)); var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
</div>
`