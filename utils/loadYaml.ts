// utils/loadYaml.ts
import fs from 'fs/promises'
import { parse } from 'yaml'
import { join } from 'path'

export async function loadYaml(relativePath: string) {
  const filePath = join(process.cwd(), 'content', relativePath)
  const file = await fs.readFile(filePath, 'utf8')
  return parse(file)
}
