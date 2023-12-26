import Invoice from "./classes/Invoice";
import ListTemplate from "./classes/ListTemplate";
import Payment from "./classes/Payment";
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// inputs.
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// UL container and ListTemplate instance.
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
