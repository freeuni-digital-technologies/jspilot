# JSPilot
ბიბლიოთეკა Javascript-ის სასწავლი სავარჯიშოებისთვის, real-time განახლებადი ტესტებითა და ნაბიჯების განსაზღვრის შესაძლებლობით. 

## ფუნქციები
- ტესტების განსაზღვრა მოსახერხებელი mocha/chai სინტაქსით
- ტესტები დინამიურად დაგენერირდება html ფაილში ჩასმული ლინკით
- კოდის შეცვლის შემთხვევაში განახლებული ტესტები აისახება მომენტალურად
- ატვირთული დავალების სერვერზე შესამოწმებელი ტესტები გენერირდება იმავე კოდიდან


## გარემოს გამართვა
### პრერეკვიზიტები
- node >= 12
- yarn
- windows-ის შემთხვევაში: git და git bash


### აუცილებელი ნაბიჯები
1. Github-დან კლონირება
2. კლონირების შემდეგ jspilot დირექტორიაში უნდა გაეშვას ბრძანება
    ```sh
    yarn
    ```

## Development WorkFlow
დეველოპენტისთვის საჭიროა, რომ ტერმინალში გაიშვას ბრძანება:
   ```sh
    yarn start ./homeworks/hwN/index.html
   ```
   სადაც N აღნიშნავს შესაბამისი დავალების ნომერს. ამ ბრძანების შემდეგ შეიქმენა localhost მისამართი რომელზეც ლოკალურად გაკეთებული ცვლილებები ლაივ რეჟიმში აისახება.


ლოკალურად არსებული ტესტების დაბილდვა, რომელიც თითოეული დავალებისთვის შექმნის ფაილს სადაც ყველა ტესტი და საჭირო კოდი ერთიანად იქნება თავმოყრილი:
   ```sh
   yarn build-student-tests
   ```
სერვერის ტესტების დაბილდვა (მე-3 ნომრის მსგავსად ერთ დიდ ფაილებად):
   ```sh
   yarn build-server-tests
   ```
დავალებების დაზიპვა (საბოლოო ფორმატი, როგორც სტუდტებს ეგზავნებათ)
   ```sh
   yarn createZips
   ```

### Setting up github pages
```shell
git checkout --orphan dist
touch .gitignore
```

gitignore:
```text
.DS_Store
.idea
.parcel-cache
node_modules
server-tests
dist
```
```shell
git add .
git commit -m "initial commit"
git push -u origin dist
```
set up github pages from dist branch

## publish homework
```sh
# commit your changes
yarn publish
```

publish homework starter files
```
yarn publish -- zip
```

