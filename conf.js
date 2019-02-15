const createTestCafe = require('testcafe');
let tc = null;
createTestCafe('localhost',1337,1338)
.then(testcafe => {
	tc = testcafe;
	const runner = testcafe.createRunner();
	runner.src('./fixtures/*.js').browsers(['chrome'],['ie']).reporter('xunit').run()
	.then(failedCount=> {		
		console.log('Failed Tests: ${failedCount}');
		tc.close();
	})
	.catch(error => {
		console.log('Errors: ${error}');
		tc.close();
	});
	runner.reporter('xunit', 'reports/report.xml');
})