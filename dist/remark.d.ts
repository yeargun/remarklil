export interface Processor {
  parser?: (doc: unknown, file?: unknown) => unknown
  compiler?: (tree: unknown, file?: unknown) => unknown
  use(plugin: unknown, options?: unknown): Processor
  parse(file?: unknown): unknown
  runSync(tree: unknown, file?: unknown): unknown
  run(tree: unknown, file?: unknown, done?: unknown): unknown
  stringify(tree: unknown, file?: unknown): unknown
  processSync(input: unknown): unknown
  process(input: unknown, done?: unknown): unknown
  data(): Record<string, unknown>
  data(key: string): unknown
  data(key: string, value: unknown): Processor
  freeze(): Processor
}

export const remark: Processor
export default remark
export function remarkStringify(this: Processor, options?: unknown): void
export function toMarkdown(tree: unknown, options?: unknown): string
export const defaultHandlers: Record<string, unknown>
