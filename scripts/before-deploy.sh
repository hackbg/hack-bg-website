#!/bin/bash
set -e

if [[ $CNAME != "" ]]; then
  echo $CNAME > dist/CNAME
fi

# add robots txt - prevent crawling
echo $'User-agent: *\nDisallow: /' > dist/robots.txt