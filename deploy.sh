rm -rf build && npm run build && cd build && git init && git remote add origin https://github.com/planex-io/space-ui-min && git add . && git commit -m "deployed by .sh" && git push origin master -f