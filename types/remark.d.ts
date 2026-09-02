import type {Root} from 'mdast'
import type {
  Extension as FromMarkdownExtension,
  Options as FromMarkdownOptions
} from 'mdast-util-from-markdown'
import type {Options as ToMarkdownOptions} from 'mdast-util-to-markdown'
import type {Extension as MicromarkExtension} from 'micromark-util-types'
import type {Processor} from 'unified'

type ParseOptions = Omit<
  FromMarkdownOptions,
  'extensions' | 'mdastExtensions'
>
type StringifyOptions = Omit<ToMarkdownOptions, 'extensions'>

export const remark: Processor<Root, undefined, undefined, Root, string>

declare module 'unified' {
  interface Settings extends ParseOptions, StringifyOptions {}

  interface Data {
    micromarkExtensions?: MicromarkExtension[]
    fromMarkdownExtensions?: Array<
      FromMarkdownExtension[] | FromMarkdownExtension
    >
    toMarkdownExtensions?: ToMarkdownOptions[]
  }
}
