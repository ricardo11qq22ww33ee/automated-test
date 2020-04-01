import ExamplePage from '../page_model/example_model';

const page = new ExamplePage();

fixture `Example page tests`
    .page `https://devexpress.github.io/testcafe/example/`;
    const name = 'Ricardo';
    const comments = 'Escribi algo, hola soy German'
    test('My first test', async t => {
        await t
            .typeText(page.inputName, name)
            .click(page.checkboxRemoteTesting)
            .click(page.checkboxAdvanceTraffic)
            .click(page.triedTestCafe)
            .typeText(page.comments, comments)
            .click(page.submit)
            .wait(2000);
        await t.expect(page.thankYouMessage.innerText).contains('Thank you, ' & name);
    });

