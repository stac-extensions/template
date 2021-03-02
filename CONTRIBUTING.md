## Contributing

Pull Requests are the primary method of contributing to the spec itself, and everyone is welcome to submit 
changes.

A standard workflow for making a change might look like this:

- Add a new field to the [JSON Schema](./json-schema/schema.json).
- Update the [README](README.md) with information about your new field.
- Update the relevant [examples](./examples) to reflect the change you made.
- [Run tests](#running-tests) to make sure your changes are consistent.
- [Open a pull request](#submitting-pull-requests).

We consider everyone using the specification to catalog their data to be a 'contributor', as STAC is
really about the end result of more interoperable data, not just creating a spec for the sake of it.
So if you want to help then the best thing you can do is make new catalogs or build software that uses
the spec and its extensions. And please do give us feedback. The best place to do so is on our 
[gitter channel](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby). If you are interested in helping
but aren't sure where to, then see the [stac-ecosystem](https://github.com/stac-utils/stac-ecosystem) repo
for ideas on projects to advance STAC. The next phase of STAC's evolution will be mostly focused on
this broader ecosystem, while keeping the core spec as stable as we can.

### Submitting Pull Requests

Any proposed changes to the specification should be done as pull requests. Please make these
requests against the [dev](https://github.com/radiantearth/stac-spec/tree/dev) branch (this will
require you to switch from the default of 'master', which we keep so it displays first). 

Creating a Pull Request will show our PR template, which includes checkbox reminders for a number
of things.

- Adding an entry the [CHANGELOG](CHANGELOG.md). If the change is more editorial and minor then this 
is not required, but any change to the actual specification should definitely have one.
- Base the PR against dev, as mentioned above - even if the branch was made off of dev this reminds
you to change the base in GitHub's PR creation page.
- Make a ticket in the STAC API repo if anything here affects that specification.
- Highlight if the PR makes breaking changes to the specification.

All pull requests should submit clean markdown, which is checked by the continuous integration
system. Please use `npm run check` locally, as described in the [next section](#running-tests), 
to ensure that the checks on the pull request succeed. If it does not then you can look at the
mistakes online, which are the same as running `npm run check` locally.

All pull requests that modify or create JSON schema files or examples should use [JSON formatter](https://jsonformatter.org/)
to keep files consistent across the repo. 

### Running tests

The same check-markdown and check-examples programs that runs as a check on PR's is part of the repo and can be run locally. 
To run tests locally, you'll need `npm`, which is a standard part of any [node.js installation](https://nodejs.org/en/download/). Alternatively, you can also use [`yarn`](https://yarnpkg.com/) instead of `npm`. In this case replace all occurrences of `npm` with `yarn` below.

First you'll need to install everything with npm once. Just navigate to the root of this repository and on 
your command line run:

```bash
npm install
```

Then to check markdown formatting and test the examples against the JSON schema, you can run:

```bash
npm run test
```

This will spit out the same texts that you see online, and you can then go and fix your markdown or examples.

To just check the markdown run:

```bash
npm run check-markdown
```

To just check the examples run:

```bash
npm run check-examples
```

If the tests reveal formatting problems with the examples, you can fix them with:

```bash
npm run format-examples
```
