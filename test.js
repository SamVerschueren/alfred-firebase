import test from 'ava';
import alfyTest from 'alfy-test';

test('show matching records', async t => {
	const alfy = alfyTest();
	const result = await alfy('MessageBuilder');

	t.deepEqual(result, [
		{
			title: 'MessageBuilder',
			autocomplete: 'MessageBuilder',
			arg: 'https://firebase.google.com/docs/reference/android/com/google/firebase/appindexing/builders/MessageBuilder',
			quicklookurl: 'https://firebase.google.com/docs/reference/android/com/google/firebase/appindexing/builders/MessageBuilder'
		}
	]);
});

test('show all results when no records where found', async t => {
	const alfy = alfyTest();
	const result = await alfy('angular');

	t.deepEqual(result, [
		{
			title: 'Show all results for \'angular\'',
			arg: 'https://firebase.google.com/s/results/?q=angular&p=%2F',
			quicklookurl: 'https://firebase.google.com/s/results/?q=angular&p=%2F'
		}
	]);
});
