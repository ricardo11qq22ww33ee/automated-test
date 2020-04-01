import {Selector, t} from 'testcafe';

export default class ExamplePage {
    constructor() {
        this.username = Selector('input[name=username');
        this.password = Selector('input[name=password');
        //TODO:
        //clicl 'i have tried TestCafe' button
        this.submit = Selector('button[type=submit]');
        
        // llenar comentario
        //click submiy button
        //validar thank you incluye nombre
       // this.thankYouMessage = Selector('#article-header');

    }

}