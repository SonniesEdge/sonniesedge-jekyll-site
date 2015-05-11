#!/bin/bash


GRUNT_DIR="grunt"
BOWER_DIR="bower"
FAILURE=1


function checks {

    echo ' '
    echo 'Checking for dependencies...'
    echo ' '

    # check for system ruby
    ruby -v &>/dev/null
    if [ $? -eq 0 ]; then
        echo "Found Ruby"
    else
        echo "Could not find Ruby"
        FAILURE=0
    fi

    bundle -v &>/dev/null
    if [ $? -eq 0 ]; then
        echo "Found Bundle"
    else
        echo "Could not find Bundle"
        FAILURE=0
    fi

    # check for system npm
    npm -v &>/dev/null
    if [ $? -eq 0 ]; then
        echo "Found NPM"
    else
        echo "Could not find NPM"
        FAILURE=0
    fi

    # check for bower
    bower -v &>/dev/null
    if [ $? -eq 0 ]; then
        echo "Found Bower"
    else
        echo "Could not find Bower"
        FAILURE=0
    fi

    # check for bower
    grunt --version &>/dev/null
    if [ $? -eq 0 ]; then
        echo "Found Grunt"
    else
        echo "Could not find Grunt CLI"
        FAILURE=0
    fi

    if [ $FAILURE -eq 0 ]; then
        return 1
    else
        return 0
    fi
}


# Main
function main {

    echo ' '
    echo 'Installing...'
    echo ' '

    # Install bundle gems
    bundle install >/dev/null
    if [ $? -eq 0 ]; then
        echo "Installed gems"
    else
        echo "Could not install gems"
        return 1
    fi

    # Install npm modules
    cd $GRUNT_DIR
    npm install >/dev/null
    if [ $? -eq 0 ]; then
        echo "Installed npm modules"
    else
        echo "Could not install npm modules"
        return 1
    fi
    cd ../

    # Install bower components
    cd $BOWER_DIR
    bower install >/dev/null
    if [ $? -eq 0 ]; then
        echo "Installed Bower components"
    else
        echo "Could not install Bower components"
        return 1
    fi
    cd ../

}

# Run checks
checks


# If checks pass then run main installer
if [ $? -eq 0 ]; then
    main
else 
    echo ' '
    echo "Checks failed. :("
fi
