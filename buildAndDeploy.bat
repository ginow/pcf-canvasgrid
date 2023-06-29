echo "Incrementing version number in manifest" && ^
pac pcf version -s manifest && ^
echo "changing directory to solution" && ^
cd solution/ && ^
echo "Incrementing version number in solution" && ^
pac solution version --strategy solution && ^
echo "running msbuild restore" && ^
msbuild /t:restore && ^
echo "running msbuild for production" && ^
msbuild /p:configuration=Release && ^
echo "importing and publishing changes to CRM" && ^
pac solution import && ^
echo "changing directory" && ^
cd ..