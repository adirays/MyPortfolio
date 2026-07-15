import fs from 'fs'
import path from 'path'

const root = process.cwd()
const src = path.resolve(root, 'src', 'imports', 'Resume.pdf')
const destDir = path.resolve(root, 'public')
const dest = path.join(destDir, 'resume.pdf')

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest)
  console.log('Copied resume to public/resume.pdf')
} else {
  console.warn('Source resume not found at', src)
  // exit 0 so build can continue without failing if file is absent
  process.exit(0)
}
