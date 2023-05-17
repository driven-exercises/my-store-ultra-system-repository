 #!/bin/bash

 for f in scripts/*; do
    echo "Executando script $f...";
    sudo su -c "psql -d $1 -f $f" postgres;
  done
  
