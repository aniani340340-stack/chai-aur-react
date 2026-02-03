function coustomrender(myreactelement, container){
    const newelement = document.createElement(myreactelement.type);
    newelement.innerHTML=myreactelement.children;
    for(const prop in myreactelement.prop){
        if(prop==="children") {continue;}
        newelement.setAttribute(prop, myreactelement.prop[prop]);
    }
    container.appendChild(newelement);

}
const myreactelement = {
    type : 'a',
    prop: {
        href:"https://www.google.com",
        target:"_blank",
    },
    children: "Go to Google"
}

const mainContainer = document.querySelector('#root');  
coustomrender(myreactelement, mainContainer)