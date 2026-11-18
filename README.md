# Template Extension Specification

- **Title:** Template
- **Identifier:** <https://stac-extensions.github.io/template/v0.1.0/schema.json>
- **Field Name Prefix:** template
- **Scope:** Catalog, Collection, Item
- **Extension [Maturity Classification](https://github.com/radiantearth/stac-spec/tree/master/extensions/README.md#extension-maturity):** Proposal
- **Owner**: @your-gh-handles @person2

This document explains the Template Extension to the [SpatioTemporal Asset Catalog](https://github.com/radiantearth/stac-spec) (STAC) specification.

This is the place to add a short introduction.

- Examples:
  - [Item example](examples/item.json): Shows the basic usage of the extension in a STAC Item
  - [Collection example](examples/collection.json): Shows the basic usage of the extension in a STAC Collection
- [JSON Schema](json-schema/schema.json)
- [Changelog](./CHANGELOG.md)

## Purpose and boundaries

Say in a few sentences what the extension is for and, if applicable, what it does not cover.
Name the extensions or standards that cover the adjacent subjects.
This helps contributors and reviewers to decide if a new field belongs here.
Remove this section if the introduction already makes this clear.

## Fields

The fields in the table below can be used in these parts of STAC documents:

- [x] Catalogs
- [x] Collections
- [x] Item Properties (incl. Summaries in Collections)
- [x] Assets (for both Collections and Items, incl. Item Asset Definitions in Collections and Asset Templates)
- [x] Links (incl. Link Templates)
- [x] Bands

| Field Name           | Type                      | Description                                  |
| -------------------- | ------------------------- | -------------------------------------------- |
| template:new_field   | string                    | **REQUIRED**. Describe the required field... |
| template:xyz         | [XYZ Object](#xyz-object) | Describe the field...                        |
| template:another_one | \[number]                 | Describe the field...                        |

### Additional Field Information

#### template:new_field

This is a much more detailed description of the field `template:new_field`...

### XYZ Object

This is the introduction for the purpose and the content of the XYZ Object...

| Field Name | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| x          | number | **REQUIRED**. Describe the required field... |
| y          | number | **REQUIRED**. Describe the required field... |
| z          | number | **REQUIRED**. Describe the required field... |

## Relation types

The following types should be used as applicable `rel` types in the
[Link Object](https://github.com/radiantearth/stac-spec/tree/master/item-spec/item-spec.md#link-object).

| Type           | Description                           |
| -------------- | ------------------------------------- |
| fancy-rel-type | This link points to a fancy resource. |

## Contributing

All contributions are subject to the
[STAC Specification Code of Conduct](https://github.com/radiantearth/stac-spec/blob/master/CODE_OF_CONDUCT.md).
See [CONTRIBUTING.md](CONTRIBUTING.md) for the rules for changes and for the instructions to run the tests.
