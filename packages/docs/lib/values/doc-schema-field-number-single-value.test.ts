import { expect, test } from "bun:test"
import { DocSchemaFieldNumberSingleValue } from "./doc-schema-field-number-single-value"

test("単一数値型フィールドの基本プロパティを取得できる", () => {
  const field = new DocSchemaFieldNumberSingleValue("price", {
    type: "number",
    required: true,
    title: "価格",
    description: "商品の価格",
    default: 1000,
  })

  expect(field.key).toBe("price")
  expect(field.type).toBe("number")
  expect(field.required).toBe(true)
  expect(field.title).toBe("価格")
  expect(field.description).toBe("商品の価格")
  expect(field.default).toBe(1000)
})

test("型判定メソッドが正しく動作する", () => {
  const field = new DocSchemaFieldNumberSingleValue("count", {
    type: "number",
    required: false,
    title: null,
    description: null,
    default: null,
  })

  expect(field.isArray).toBe(false)
  expect(field.isSingle).toBe(true)
  expect(field.isNumber).toBe(true)
})

test("値の検証メソッドが正しく動作する", () => {
  const field = new DocSchemaFieldNumberSingleValue("score", {
    type: "number",
    required: true,
    title: null,
    description: null,
    default: null,
  })

  expect(field.validate(123)).toBe(true)
  expect(field.validate(0)).toBe(true)
  expect(field.validate(-123)).toBe(true)
  expect(field.validate(123.456)).toBe(true)

  expect(field.validate("123")).toBe(false)
  expect(field.validate(true)).toBe(false)
  expect(field.validate(null)).toBe(false)
  expect(field.validate(undefined)).toBe(false)
  expect(field.validate([])).toBe(false)
  expect(field.validate({})).toBe(false)
})

test("オプショナルなプロパティがundefinedでも動作する", () => {
  const field = new DocSchemaFieldNumberSingleValue("value", {
    type: "number",
    required: true,
    title: null,
    description: null,
    default: null,
  })

  expect(field.title).toBe("")
  expect(field.description).toBe("")
  expect(field.default).toBe(null)
})

test("JSON形式に変換できる", () => {
  const field = new DocSchemaFieldNumberSingleValue("quantity", {
    type: "number",
    required: false,
    title: "数量",
    description: null,
    default: 1,
  })

  const json = field.toJson()
  expect(json).toEqual({
    type: "number",
    required: false,
    title: "数量",
    description: null,
    default: 1,
  })
})

test("インスタンスが不変である", () => {
  const fieldData = {
    type: "number" as const,
    required: true,
    title: null,
    description: null,
    default: null,
  }

  const field = new DocSchemaFieldNumberSingleValue("test", fieldData)

  expect(() => {
    ;(field as any).key = "changed"
  }).toThrow()

  expect(() => {
    ;(field as any).value = {}
  }).toThrow()
})
