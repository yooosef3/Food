const truncate = text => {
    return text?.length > 260 ? text.substring(0, 255) + '...': text  
  };
  
  export {truncate}