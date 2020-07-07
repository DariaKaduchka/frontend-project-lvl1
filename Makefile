install:
	npm install

start:
	npx node bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .