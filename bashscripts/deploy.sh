#!/bin/bash

ERRORSTRING="Error. Please make sure you've indicated correct parameters"
if [ $# -eq 0 ]
  then
    echo $ERRORSTRING;
  elif [ $1 == "live" ]
    then
      if [[ -z $2 ]]
        then
          echo "Running dry-run"
          (exec ./ga-update.sh)
          cd ..
          gulp build
          cd bashscripts
          rsync --dry-run -az --force --delete --stats --exclude-from=rsync_exclude.txt -e "ssh -p22" ../_build/ charlie@sonniesedge.co.uk:/data/sites/uk.co.sonniesedge/htdocs
        elif [ $2 == "go" ]
          then
            echo "Running actual deploy"
            (exec ./ga-update.sh)
            cd ..
            gulp build
            cd bashscripts
            rsync -az --force --delete --stats --exclude-from=rsync_exclude.txt -e "ssh -p22" ../_build/ charlie@sonniesedge.co.uk:/data/sites/uk.co.sonniesedge/htdocs
        else
          2echo $ERRORSTRING;
        fi
fi
