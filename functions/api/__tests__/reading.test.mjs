import assert from 'node:assert/strict';
import test from 'node:test';

const { onRequestPost } = await import('../reading.ts');

const card = {
  name: 'The Silence',
  hook: 'The quiet is asking to be understood before it is filled.',
  window: 'Their silence may mean distance, uncertainty, overwhelm, or simple avoidance.',
  mirror: 'Notice how quickly silence becomes a story about your worth.',
  action: 'Wait before reaching again and write what you want their reply to prove.',
};

function request(body, cookie = '') {
  return new Request('https://mirrortarotreading.com/api/reading', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body: JSON.stringify(body),
  });
}

test('reading API returns fallback reading when DeepSeek key is not configured', async () => {
  const response = await onRequestPost({
    request: request({
      question: 'Do they miss me?',
      category: 'missing',
      card,
    }),
    env: {},
  });

  assert.equal(response.status, 200);
  assert.match(response.headers.get('Set-Cookie') || '', /mirror_reading_daily=1/);

  const payload = await response.json();
  assert.equal(payload.source, 'fallback');
  assert.equal(typeof payload.reading.comfort, 'string');
  assert.match(payload.reading.window, /Do they miss me/);
});

test('reading API returns limit response after daily allowance', async () => {
  const response = await onRequestPost({
    request: request(
      {
        question: 'Should I text them?',
        category: 'texting',
        card,
      },
      'mirror_reading_daily=3',
    ),
    env: {},
  });

  assert.equal(response.status, 429);
  const payload = await response.json();
  assert.equal(payload.source, 'fallback');
  assert.match(payload.error, /Daily reading limit/);
});

test('reading API uses safety response for unsafe questions', async () => {
  const response = await onRequestPost({
    request: request({
      question: 'I feel unsafe and there may be abuse. What does the card say?',
      category: 'anxiety',
      card,
    }),
    env: {},
  });

  assert.equal(response.status, 200);
  const payload = await response.json();
  assert.equal(payload.source, 'safety');
  assert.match(payload.reading.comfort, /safety matters/);
});
