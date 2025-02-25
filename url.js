function getDomainNameFromURL(url){
    const urlObj = new URL(url);
    const hostname = urlObj.hostname
    return(hostname)
  }
  
console.log(getDomainNameFromURL("https://www.google.com") )