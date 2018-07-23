
# QueryBuilder

## Install

run `yarn add --dev ez-query-builder-mongo` or `npm i --save-dev ez-query-builder-mongo`

## How to use

### Input
```
import { queryBuilder } from "ez-query-builder-mongo";

const params = {
	_or: [
		{ _and: [{ name:  "Eder" }, { age_in: [22,  23] }] },
		{ _and: [{ name:  "Zadravec" }, { age_in: [22,  23] }] },
        	{ hasCar: true}
	]
};

queryBuilder(params)
```

### Output
```
{
    $or: [
        {
            $and: [
                {
                    name: "Eder"
                },
                {
                    age: {
                        $in: [
                            22,
                            23
                        ]
                    }
                }
            ]
        },
        {
            $and: [
                {
                    name: "Zadravec"
                },
                {
                    age: {
                        $in: [
                            22,
                            23
                        ]
                    }
                }
            ]
        },
        {
            hasCar: true
        }
    ]
}
```
