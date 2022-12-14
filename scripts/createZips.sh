#!/usr/bin/env sh

rm -r dist 2> /dev/null
for hw in $(/bin/ls homeworks)
do
	mkdir -p "dist/$hw"
  find_string="<script type='module' src='./main.js'>"
  replace_string="<script type='text/javascript' src='http://freeuni-digital-technologies.github.io/jspilot/$hw/main.js'>"
  sed -i.bak "s~$find_string~$replace_string~" "homeworks/$hw/index.html" && rm "homeworks/$hw/index.html.bak"
	git checkout "homeworks/$hw/index.html"
	zip -rj "dist/$hw/$hw.zip" "homeworks/$hw/" -x \
		\*solution\* \*server.js \*extras.js \*tests.js \*main.js \*animation.js
done