#!/bin/bash
# Deploy script for piatyzywiolkalisz.pl (Zenbox)
# Builds the site and uploads via FTP using lftp
# Usage: ./deploy.sh
#
# Credentials are read from environment variables:
#   FTP_HOST, FTP_USER, FTP_PASS, FTP_PORT (default 21), FTP_REMOTE_DIR (default public_html)

set -e

FTP_HOST="${FTP_HOST:-piatyzywiolkalisz.pl}"
FTP_USER="${FTP_USER:-ftp@piatyzywiolkalisz.pl}"
FTP_PASS="${FTP_PASS:?Set FTP_PASS environment variable}"
FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-public_html}"
LOCAL_DIR="dist"

echo "Building site..."
npm run build

echo "Uploading to $FTP_HOST:$FTP_REMOTE_DIR ..."
lftp -c "
  set ftp:ssl-allow no;
  set ftp:passive-mode yes;
  set net:timeout 30;
  set net:max-retries 3;
  open -u '$FTP_USER','$FTP_PASS' -p $FTP_PORT $FTP_HOST;
  mirror --reverse --delete --verbose --parallel=4 $LOCAL_DIR $FTP_REMOTE_DIR;
  bye
"

echo "Deploy complete!"
