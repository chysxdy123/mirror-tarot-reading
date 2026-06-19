import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('love reading page renders card draw controls and result region', async () => {
  const html = await readFile('dist/love-tarot-reading/index.html', 'utf8');

  assert.match(html, /data-card-draw/);
  assert.match(html, /data-question-input/);
  assert.match(html, /What question keeps coming back/);
  assert.match(html, /data-question-selector/);
  assert.match(html, /Or begin with one of these/);
  assert.match(html, /Choose a card/);
  assert.match(html, /Receive comfort and clarity/);
  assert.match(html, /data-reading-result/);
  assert.match(html, /data-selected-question/);
  assert.match(html, /Your reading for/);
  assert.match(html, /Comfort/);
  assert.match(html, /The Window/);
  assert.match(html, /The Mirror/);
  assert.match(html, /Do not enter names, phone numbers, addresses, or private identifying details/);
});
