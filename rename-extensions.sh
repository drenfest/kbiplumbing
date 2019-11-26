# shellcheck disable=SC2164
cd public;
find . -name "*.html" | while read i; do mv "$i" "${i%.html}.php"; done
cd ../;
