#!/bin/bash
echo "🔥🔥🔥Build Incoming🔥🔥🔥"

firstline=$(head -n 1 source/changelog.md)

read -a splitfirstline <<< $firstline

version=${splitfirstline[1]}

echo "your building version " $version

echo "do you want to continue type '1' for yes or type '0' for no" 

read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  echo 'Start Copying'
  echo "##################"
  for filename in source/*
  do
    echo $filename
    echo "##################"
    if [ $filename == "source/secretinfo.md" ]
    then
      echo '⏱  not copying' $filename
      echo "##################"
    else
      echo 'copying' $filename
      cp $filename build
    fi
  done
else
  echo "Please come back when you are ready"
  exit
fi

cd build
echo "The Build $version Conain's: "
ls
cd ../

tar cfz build.tgz build/
echo "File Zipped"
