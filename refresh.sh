#!/bin/sh
bench build --apps commercial_real_estate
sudo supervisorctl stop all
sudo supervisorctl start all