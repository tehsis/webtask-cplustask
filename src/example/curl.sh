cat << EOF | curl https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1?script="
   #include <iostream>\n
   using namespace std;
   int main() {
     cout << "\Hello curl!\";
   }"  
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiIwYWUwMWMxNzNhYTE0ODE1OTQyNGY3NjBiMzUyNWZkOSIsImlhdCI6MTQzMDU2ODg1NiwiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90ZWhzaXMuZ2l0aHViLmlvL3dlYnRhc2stY3BsdXN0YXNrL3Rhc2tzL2NwdGFzay5qcyIsInRlbiI6Ii9ed3QtdGVoc2lzLWdtYWlsX2NvbS1bMC0xXSQvIn0.Wn26WHQrNGJdDpRHkrC8Wt-vJxNW8eLyCatwN-IVByk' \
EOF
