
# QueryBuilder

## Install

run `yarn install --save-dev ez-query-builder-mongo` or `npm i --save-dev ez-query-builder-mongo`

## How to use

### In
```
import { queryBuilder } from "ez-query-builder-mongo";

const params = {
	_or: [
		{ _and: [{ name:  "Eder" }, { age_in: [22,  23] }] },
		{ _and: [{ name:  "Zadravec" }, { age_in: [22,  23] }] }
	]
};

queryBuilder(params)
```

  ### Out
```
{
	$or: [
		{
			$and: [
				{ name: "Eder" },
				{
					age: {
						$in: [22,  23]
					}
				}
			]
		},
		{
			$and: [
				{ name: "Zadravec" },
				{
					age: {
						$in: [22,  23]
					}
				}
			]
		}
	],
}
```
