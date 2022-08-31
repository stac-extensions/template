const { join } = require('path');
const { promises } = require('fs');
const { AjvOptions, rootDirectory, schemaPath } = require('./validation.js');
const ajv = new (require('ajv'))(AjvOptions);

const examplePath = join(rootDirectory, 'examples/item.json');

let validate;
beforeAll(async () => {
	const data = JSON.parse(await promises.readFile(schemaPath));
	validate = await ajv.compileAsync(data);
});

describe('Item example', () => {
	it('should pass validation', async () => {
		// given
		const example = JSON.parse(await promises.readFile(examplePath));

		// when
		let valid = validate(example);

		// then
		expect(valid).toBeTruthy();
	});

	it('should fail validation without mandatory template:new_field property ', async () => {
		// given
		const example = JSON.parse(await promises.readFile(examplePath));
		delete example.properties['template:new_field'];
		// when
		let valid = validate(example);

		// then
		expect(valid).toBeFalsy();
		expect(
			validate.errors.some((error) => error.message === "must have required property 'template:new_field'"),
		).toBeTruthy();
	});
});
