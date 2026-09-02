import type {Root} from 'mdast'
import type {Processor as UnifiedProcessor} from 'unified'
import {remark} from '@itslil/remark'

const upstreamProcessor: UnifiedProcessor<
  Root,
  undefined,
  undefined,
  Root,
  string
> = remark
const tree: Root = remark().parse('# typed')
const markdown: string = remark().stringify(tree)

remark().data('settings', {closeAtx: true})

void upstreamProcessor
void markdown
