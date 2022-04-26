#!/bin/bash

REPORT_URL=$1 # report.zip's URL
TEMP=./temp
CREEVEY=../../.creevey

if [ -z "$REPORT_URL" ]
then
    echo "Error: Provide report.zip's URL!"
else
    echo "downloading report.zip..."
    wget -P $TEMP $REPORT_URL --quiet
    
    echo "unzipping..."
    unzip -qq $TEMP/report.zip -d $TEMP
    
    echo "moving report folder..."
    mv $TEMP/.creevey/report $CREEVEY
    
    echo "running yarn test on creevey files..."
    yarn test --update
    yarn test --config .creevey/config_condensed.js --update
    yarn test --config .creevey/config_darkmode.js --update
    yarn test --config .creevey/config_darkmode_condensed.js --update
        
    echo "deleting temp folder..."
    rm -rf $TEMP/
    
    echo "deleting .creevey/report..."
    rm -rf $CREEVEY/report/
    
    echo "adding PNGs to git..."
    git add $CREEVEY/images/*.png
    
    git status
    
    echo "I already ran 'git add' for you, all that's left is to run 'git commit' and 'git push'!"
fi
