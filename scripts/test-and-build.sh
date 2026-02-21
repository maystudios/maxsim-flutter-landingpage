#!/bin/bash
set -e
cd /mnt/c/Development/maxsim-landigpage
echo "Building..."
npm run build
echo "Running tests..."
npm test
echo "All checks passed!"
