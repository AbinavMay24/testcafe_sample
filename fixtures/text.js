import { t } from 'testcafe';

fixture `fixture`
    .page `https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin`;

const testCases = [
    {
        name:     'user 1',
        email:    'cvraju678@gmail.com',
        password: '9059714333'
    },
    {
        name:     'user 2',
        email:    'chinnavenkatarajununi@gmail.com',
        password: '9059714333'
    }
];

async function registration (email, password) {
    await t
        .typeText('#identifierId', email)
        
        .click('#identifierNext')
        .typeText('.whsOnd.zHQkBf[name="password"][data-initial-dir="ltr"]', password)
        .click('#passwordNext')
        .wait(10000);
       
}

for (const user of testCases) {
    test('test ' + user.name, async t => {
        await registration(user.email, user.password);
        
      
    });
}