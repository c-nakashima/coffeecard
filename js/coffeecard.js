class ShowHelloElement extends HTMLElement {

  connectedCallback() {
    this.innerText = 'ハロー！';
      const data = {
        "Name": "GUATEMALA El linjerto Bourbon",
        "Roaster": "TAKAMURA COFFEE ROASTERS",
        "Location": "El Lnjerto, Huehuetenango",
        "Producer": "Arturo Aguirre",
        "Varieties": "Bourbon",
        "Process": "Fully Washed process",
        "Elevation": "1500-2000",
        "Roasting": "Medium",
        "Notes": "Cashew nuts, Japanese yam, plum"
      };
      // const defaultKeys = ["Name","Roaster","Location","Producer","Varieties","Process","Elevation","Roasting","Notes"];
      const dataKeys = Object.keys(data);
      const dataVals = Object.values(data);

      const table = document.createElement('table');
      document.body.appendChild(table);
      for(let i=0; i<dataKeys.length; i++){
        const tr = document.createElement('tr');
        for(let j=0; j<2; j++){
          const td = document.createElement('td');
          td.setAttribute('class',`td${i}`)
          tr.appendChild(td);
          if(j===0){
            td.innerText = dataKeys[i];        
          }else if(j===1){
            td.innerText = dataVals[i]; 
          }
        }
        table.appendChild(tr);
      }


  }

}

customElements.define('show-hello', ShowHelloElement);
