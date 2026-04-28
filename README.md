# Andmebaasid: DuckDB Demo


## Setup
Et setupida projekti ja testida andmebaasi, kirjuta terminali (NB! Windowsis kasuta Git Bash'i, macOS/Linux keskkonnas sobib tavaline terminal):

\`\`\`bash
### 1. Installi vajalikud paketid (DuckDB ja TSX)
npm i

### 2. Genereeri testandmete fail (1 miljon rida)
echo "id,category,price,quantity" > data.csv
awk 'BEGIN {srand(); for(i=1;i<=1000000;i++) printf "%d,cat_%d,%.2f,%d\n", i, int(rand()*10)+1, rand()*100, int(rand()*5)+1}' >> data.csv

### 3. Käivita analüütika skript
npx tsx index.ts
\`\`\`

## Presentatsioon
Link, vajuta [siia](https://docs.google.com/presentation/d/1gRbZldpZDjDZ0X447-lDXI0ZFQfQybdLHAuFNS2Y__A/edit?usp=sharing)
