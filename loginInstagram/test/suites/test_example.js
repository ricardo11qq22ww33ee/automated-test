import ExamplePage from '../page_model/example_model';

const page = new ExamplePage();

fixture `Example page tests`
    .page `https://www.instagram.com/`;
    const username = 'fofawam582@smlmail.com';
    const password = 'GenericPassword1';
    test('My first test', async t => {
        await t
            .typeText(page.username, username)
            .typeText(page.password, password)
            .click(page.submit)
            .wait(2000);
        //await t.expect(page.thankYouMessage.innerText).contains('Thank you, ' & name);
    });

