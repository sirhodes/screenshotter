import test from 'ava';
import takeScreenshot from './index';

test('takeScreenshot function exists', t => {
  t.is(typeof takeScreenshot, 'function');
});

test('takeScreenshot takes 2 arguments', t => {
  t.is(takeScreenshot.length, 2);
});
