.PHONY: all

CLOSURE = java -jar compiler/compiler.jar
CLOSURE_FLAGS = --charset UTF-8 --language_in ECMASCRIPT6 --language_out ECMASCRIPT3 --new_type_inf --use_types_for_optimization

SOURCES = js/main.js css/main.css chrome/manifest.json

CSS = dist/cookie-banner.css
JS = dist/cookie-banner.js
JSON = dist/manifest.json

all: dist

clean:
	@rm -rf dist
	@mkdir dist

dist: $(CSS) $(JS) $(JSON)

dist/cookie-banner.js: js/main.js
	$(CLOSURE) $(CLOSURE_FLAGS) --js $< --js_output_file $@

dist/cookie-banner.css: css/main.css
	@cp $< $@

dist/manifest.json: chrome/manifest.json
	@cp $< $@
