
function formatDate(isoDateString) {
    const date = new Date(isoDateString);
  
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
  
    return date.toLocaleDateString('en-US', options);
  }

  export default formatDate