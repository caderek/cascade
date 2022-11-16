# Context.css

## Ideas

- semantic html elements and their context defines the components, with data-props to further specify context (not styling per se),

### `data-` props

They may change colors, font, size, weight etc. - any styling that matches the semantic meaning.

- `data-importance` (there is no `min` - unimportant data shouldn't be included):

  - `low` - non-text equivalent to `<small>`
  - `standard` - default value - don't use it unless you programmatically change the value,
  - `high`, - non-text equivalent to `<b>`
  - `max`, - non-textual equivalent to `<strong>`

- `data-status`

  - `none` - default value - don't use it unless you programmatically change the value,
  - `info`,
  - `success`,
  - `warning`,
  - `error`,

- `data-category`

  - `primary`,
  - `secondary`,
  - `special`,

- `data-context`

  - `card`,
  - `slider`,
  - `miniature`
