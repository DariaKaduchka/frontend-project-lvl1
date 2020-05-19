install:
	npm install

start:
	npx node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .