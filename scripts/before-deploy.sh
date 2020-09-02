#!/bin/bash
set -e

if [[ $CNAME != "" ]]; then
  echo $CNAME > dist/CNAME
fi

# add robots txt - prevent crawling
echo $'User-agent: *\nAllow: /\nDisallow: /*/seo-hide/$\nDisallow: /tag/*\nHost: https://01101000011000010110001101101011.com' > dist/robots.txt