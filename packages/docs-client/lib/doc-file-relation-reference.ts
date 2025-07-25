import type { DocFileSystem } from "./doc-file-system"
import type { DocPathSystem } from "./doc-path-system"
import { DocFileMdEntity } from "./entities/doc-file-md-entity"
import type { DocRelation } from "./types"
import { DocFileContentMdValue } from "./values/doc-file-content-md-value"
import { DocFilePathValue } from "./values/doc-file-path-value"
import { DocRelationFileValue } from "./values/doc-relation-file-value"
import { DocRelationValue } from "./values/doc-relation-value"

type Props = {
  filePath: string
  fileSystem: DocFileSystem
  pathSystem: DocPathSystem
}

/**
 * リレーションファイルの参照
 */
export class DocFileRelationReference {
  private readonly pathSystem: DocPathSystem

  constructor(private readonly props: Props) {
    this.pathSystem = props.pathSystem
    Object.freeze(this)
  }

  get fileSystem(): DocFileSystem {
    return this.props.fileSystem
  }

  get basePath(): string {
    return this.fileSystem.getBasePath()
  }

  /**
   * リレーションパス
   */
  get path(): string {
    return this.props.filePath
  }

  /**
   * フルパス
   */
  get fullPath(): string {
    return this.pathSystem.join(
      this.fileSystem.getBasePath(),
      this.props.filePath,
    )
  }

  async read(): Promise<DocRelationValue | null> {
    const files = await this.readFiles()

    return new DocRelationValue({
      path: this.path,
      files: files.map((value) => value.toJson()),
    } satisfies DocRelation)
  }

  /**
   * リレーションファイルの一覧を読み込む
   */
  async readFiles(): Promise<DocRelationFileValue[]> {
    const exists = await this.fileSystem.exists(this.path)

    if (!exists) {
      return []
    }

    const filePaths = await this.fileSystem.readDirectoryFilePaths(this.path)

    const files: DocRelationFileValue[] = []

    for (const filePath of filePaths) {
      const file = await this.readFile(filePath)
      if (file === null) continue
      files.push(file)
    }

    return files
  }

  /**
   * 単一のリレーションファイルを読み込む
   */
  async readFile(filePath: string): Promise<DocRelationFileValue | null> {
    if (filePath.includes("index.md")) {
      return null
    }

    const content = await this.fileSystem.readFile(filePath)

    if (content === null) {
      return null
    }

    const contentValue = DocFileContentMdValue.fromMarkdown(content)
    const pathValue = DocFilePathValue.fromPathWithSystem(
      filePath,
      this.pathSystem,
      this.basePath,
    )
    const fileEntity = new DocFileMdEntity({
      type: "markdown",
      content: contentValue.value,
      path: pathValue.value,
      isArchived: false,
    })

    return DocRelationFileValue.from(filePath, fileEntity.value.content.title)
  }

  /**
   * ファイルの存在確認
   */
  async exists(slug: string): Promise<boolean> {
    const filePath = `${this.path}/${slug}.md`
    return this.fileSystem.exists(filePath)
  }

  /**
   * ファイル名の一覧を取得（拡張子なし）
   */
  async readSlugs(): Promise<string[]> {
    const files = await this.readFiles()
    return files.map((file) => file.id)
  }

  /**
   * ファイル数を取得
   */
  async count(): Promise<number> {
    const files = await this.readFiles()
    return files.length
  }

  /**
   * 空かどうかを確認
   */
  async isEmpty(): Promise<boolean> {
    const count = await this.count()
    return count === 0
  }
}
