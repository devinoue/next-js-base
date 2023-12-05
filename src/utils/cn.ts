import { clsx } from 'clsx'

import type { ClassValue } from 'clsx'

/**
 * clsxのラッパー関数
 * 必要であればtailwind-mergeなどを追加する(clsx相当のものが既に使われているのでその場合不要です)
 * https://github.com/dcastil/tailwind-merge/blob/main/src/lib/tw-join.ts
 * @param inputs CSSクラスの配列
 * @returns CSSクラスの文字列
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
