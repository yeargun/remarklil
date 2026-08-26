import assert from 'node:assert/strict'
import test from 'node:test'
import {gfmToMarkdown} from 'mdast-util-gfm'
import {unified} from 'unified'
import {
  remark,
  remarkStringify
} from '../../dist/remark.esm.js'

test('remark', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('../../dist/remark.esm.js')).sort(), [
      'default',
      'defaultHandlers',
      'remark',
      'remarkStringify',
      'toMarkdown'
    ])
  })

  await t.test('should process a file', async function () {
    assert.equal(remark().processSync('*foo*').toString(), '*foo*\n')
  })

  await t.test('should accept settings', async function () {
    assert.equal(
      remark()
        .data('settings', {closeAtx: true})
        .processSync('# foo')
        .toString(),
      '# foo #\n'
    )
  })
})

test('remark-stringify', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('../../dist/remark.esm.js')).sort(), [
      'default',
      'defaultHandlers',
      'remark',
      'remarkStringify',
      'toMarkdown'
    ])
  })

  await t.test('should serialize', async function () {
    assert.equal(
      unified()
        .use(remarkStringify)
        .stringify({
          type: 'root',
          children: [
            {type: 'paragraph', children: [{type: 'text', value: 'Alfred'}]}
          ]
        }),
      'Alfred\n'
    )
  })

  await t.test('should support extensions', async function () {
    const result = unified()
      .data('toMarkdownExtensions', [gfmToMarkdown()])
      .use(remarkStringify)
      .stringify({
        type: 'root',
        children: [
          {
            type: 'heading',
            depth: 1,
            children: [{type: 'text', value: 'GFM'}]
          },
          {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Autolink literals'}]
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'link',
                title: null,
                url: 'http://www.example.com',
                children: [{type: 'text', value: 'www.example.com'}]
              },
              {type: 'text', value: ', '},
              {
                type: 'link',
                title: null,
                url: 'https://example.com',
                children: [{type: 'text', value: 'https://example.com'}]
              },
              {type: 'text', value: ', and '},
              {
                type: 'link',
                title: null,
                url: 'mailto:contact@example.com',
                children: [{type: 'text', value: 'contact@example.com'}]
              },
              {type: 'text', value: '.'}
            ]
          },
          {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Strikethrough'}]
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'delete',
                children: [{type: 'text', value: 'one'}]
              },
              {type: 'text', value: ' or '},
              {
                type: 'delete',
                children: [{type: 'text', value: 'two'}]
              },
              {type: 'text', value: ' tildes.'}
            ]
          },
          {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Table'}]
          },
          {
            type: 'table',
            align: [null, 'left', 'right', 'center'],
            children: [
              {
                type: 'tableRow',
                children: [
                  {type: 'tableCell', children: [{type: 'text', value: 'a'}]},
                  {type: 'tableCell', children: [{type: 'text', value: 'b'}]},
                  {type: 'tableCell', children: [{type: 'text', value: 'c'}]},
                  {type: 'tableCell', children: [{type: 'text', value: 'd'}]}
                ]
              }
            ]
          },
          {
            type: 'heading',
            depth: 2,
            children: [{type: 'text', value: 'Tasklist'}]
          },
          {
            type: 'list',
            ordered: false,
            start: undefined,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: false,
                children: [
                  {
                    type: 'paragraph',
                    children: [{type: 'text', value: 'to do'}]
                  }
                ]
              },
              {
                type: 'listItem',
                spread: false,
                checked: true,
                children: [
                  {
                    type: 'paragraph',
                    children: [{type: 'text', value: 'done'}]
                  }
                ]
              }
            ]
          }
        ]
      })

    assert.equal(
      result,
      [
        '# GFM',
        '',
        '## Autolink literals',
        '',
        '[www.example.com](http://www.example.com), <https://example.com>, and <contact@example.com>.',
        '',
        '## Strikethrough',
        '',
        '~~one~~ or ~~two~~ tildes.',
        '',
        '## Table',
        '',
        '| a | b  |  c |  d  |',
        '| - | :- | -: | :-: |',
        '',
        '## Tasklist',
        '',
        '* [ ] to do',
        '* [x] done',
        ''
      ].join('\n')
    )
  })
})
