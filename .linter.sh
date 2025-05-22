#!/bin/bash
cd /home/kavia/workspace/code-generation/healthtrack-pro-94149-94155/main_container_for_healthtrack_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

