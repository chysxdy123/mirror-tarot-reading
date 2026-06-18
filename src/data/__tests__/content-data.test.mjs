import assert from 'node:assert/strict';
import test from 'node:test';

import { mirrorCards } from '../cards.ts';
import { sitePages } from '../pages.ts';

test('card data includes complete Mirror Tarot card records', () => {
  assert.ok(mirrorCards.length >= 16, 'expected at least 16 cards');

  for (const card of mirrorCards) {
    assert.equal(typeof card.id, 'string');
    assert.ok(card.id.length > 0);
    assert.equal(typeof card.name, 'string');
    assert.ok(card.name.length > 0);
    assert.equal(typeof card.hook, 'string');
    assert.ok(card.hook.length > 0);
    assert.equal(typeof card.window, 'string');
    assert.ok(card.window.length > 0);
    assert.equal(typeof card.mirror, 'string');
    assert.ok(card.mirror.length > 0);
    assert.equal(typeof card.action, 'string');
    assert.ok(card.action.length > 0);
    assert.ok(Array.isArray(card.categories));
    assert.ok(card.categories.length > 0);
  }
});

test('first release page data includes unique complete pages', () => {
  assert.ok(sitePages.length >= 24, 'expected at least 24 release pages');

  const slugs = new Set();
  const titles = new Set();

  for (const page of sitePages) {
    assert.equal(typeof page.slug, 'string');
    assert.ok(page.slug.length > 0);
    assert.equal(typeof page.title, 'string');
    assert.ok(page.title.length > 0);
    assert.equal(typeof page.description, 'string');
    assert.ok(page.description.length > 0);
    assert.equal(typeof page.primaryKeyword, 'string');
    assert.ok(page.primaryKeyword.length > 0);
    assert.equal(typeof page.type, 'string');
    assert.ok(['hub', 'question', 'pattern', 'trust', 'cards'].includes(page.type));
    assert.ok(Array.isArray(page.relatedSlugs));

    assert.ok(!slugs.has(page.slug), `duplicate slug: ${page.slug}`);
    assert.ok(!titles.has(page.title), `duplicate title: ${page.title}`);
    slugs.add(page.slug);
    titles.add(page.title);
  }
});
