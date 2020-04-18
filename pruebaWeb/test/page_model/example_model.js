import {Selector, t} from 'testcafe';

export default class ExamplePage {
    constructor() {
        this.inputName = Selector('#developer-name');
        this.checkboxRemoteTesting = Selector('input').withAttribute('name', 'remote');
        this.checkboxAdvanceTraffic = Selector('input').withAttribute('name', 'analysis');
        //TODO:
        //clicl 'i have tried TestCafe' button
        this.triedTestCafe = Selector('input[name=tried-test-cafe]');
        this.comments = Selector('textarea[name=comments]');
        this.submit = Selector('#submit-button');
        // llenar comentario
        //click submiy button
        //validar thank you incluye nombre
        this.thankYouMessage = Selector('#article-header');

    }

}